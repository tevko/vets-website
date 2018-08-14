import { uiSchema as autoSuggestUiSchema } from 'us-forms-system/lib/js/definitions/autosuggest';
import dateRangeUI from 'us-forms-system/lib/js/definitions/dateRange';
import fullSchema526EZ from 'vets-json-schema/dist/21-526EZ-schema.json';

import omit from '../../../../platform/utilities/data/omit';
// import { merge } from 'lodash/merge';
import merge from 'lodash/merge';

import {
  disabilityNameTitle,
  facilityDescription,
  treatmentView,
  queryForFacilities,
  validateAganistServiceDates
} from '../helpers';
import treatmentAddressUiSchema from '../pages/treatmentAddress';

const treatmentsSchema = fullSchema526EZ.properties.treatments;
const treatments = ((treatmentsCommonDef) => {
  const { type, maxItems, items } = treatmentsCommonDef;

  return {
    type,
    maxItems,
    items: {
      type: items.type,
      // TODO: use standard required property once treatmentCenterType added
      // back in schema (because it's required)
      required: ['treatmentCenterName'],
      properties: omit(['treatmentCenterType'], items.properties)
    }
  };

})(treatmentsSchema);


export const uiSchema = {
  disabilities: {
    items: {
      'ui:title': disabilityNameTitle,
      'ui:description': facilityDescription,
      treatments: {
        'ui:options': {
          itemName: 'Facility',
          viewField: treatmentView
        },
        items: {
          treatmentCenterName: autoSuggestUiSchema(
            'Name of VA medical facility',
            queryForFacilities,
            {
              'ui:options': {
                queryForResults: true,
                freeInput: true,
              },
              'ui:errorMessages': {
                // If the maxLength changes, we'll want to update the message too
                maxLength: 'Please enter a name with fewer than 100 characters.',
                pattern: 'Please enter a valid name.'
              }
            }
          ),
          treatmentDateRange: merge(
            {},
            dateRangeUI(
              'Date of first treatment (This date doesn’t have to be exact.)',
              'Date of last treatment (This date doesn’t have to be exact.)',
              'Date of last treatment must be after date of first treatment'
            ),
            { 'ui:validations': [validateAganistServiceDates] }
          ),
          treatmentCenterAddress: treatmentAddressUiSchema
        }
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    disabilities: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          treatments
        }
      }
    }
  }
};
