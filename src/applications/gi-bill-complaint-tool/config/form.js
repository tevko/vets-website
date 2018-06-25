import { validateMatch } from 'us-forms-system/lib/js/validation';
import { createUSAStateLabels } from 'us-forms-system/lib/js/helpers';
import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';
import phoneUI from 'us-forms-system/lib/js/definitions/phone';
import { schema as addressSchema, uiSchema as addressUI } from 'us-forms-system/lib/js/definitions/address';
import currentOrPastDateUI from 'us-forms-system/lib/js/definitions/currentOrPastDate';
import dateUI from 'us-forms-system/lib/js/definitions/date';
import ssnUI from 'us-forms-system/lib/js/definitions/ssn';

import {
  states
} from '../../../platform/forms/address';
import { externalServices } from '../../../platform/monitoring/DowntimeNotification';
import FormFooter from '../../../platform/forms/components/FormFooter';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

const formConfig = {
  title: 'GI Bill Complaint Tool',
  subTitle: 'A subtitle will potentially go here',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: IntroductionPage,
  confirmation: '',
  defaultDefinitions: {
    //fullName
    test
  },
  chapters: {
    firstSection: {
      title: 'Filing Information',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {
            test: testUI
          },
          schema: {
            type: 'object',
            properties: {
              test
            }
          }
        }
      }
    },
    secondSection: {
      title: 'School Information',
      pages: {
        thirdPage: {
          path: 'second-section/first-page',
          title: 'School Information',
          uiSchema: {
            test: testUI
          },
          schema: {
            type: 'object',
            properties: {
              test
            }
          }
        }
      }
    },
    thirdSection: {
      title: 'Benefits Used',
      pages: {
        thirdPage: {
          path: 'third-section/first-page',
          title: 'Benefits Used',
          uiSchema: {
            test: testUI
          },
          schema: {
            type: 'object',
            properties: {
              test
            }
          }
        }
      }
    },
    fourthSection: {
      title: 'Issue Description',
      pages: {
        firstPage: {
          path: 'fourth-section/first-page',
          title: 'Issue Description',
          uiSchema: {
            test: testUI
          },
          schema: {
            type: 'object',
            properties: {
              test
            }
          }
        }
      }
    }
  }
};

export default formConfig;
