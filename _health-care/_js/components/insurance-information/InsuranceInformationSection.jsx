import React from 'react';
import { connect } from 'react-redux';

import ErrorableCheckbox from '../form-elements/ErrorableCheckbox';
import GrowableTable from '../form-elements/GrowableTable.jsx';
import Provider from './Provider.jsx';
import { veteranUpdateField, ensureFieldsInitialized } from '../../actions';

/**
 * Props:
 * `sectionComplete` - Boolean. Marks the section as completed. Provides styles for completed sections.
 * `reviewSection` - Boolean. Hides components that are only needed for ReviewAndSubmitSection.
 */
class InsuranceInformationSection extends React.Component {
  // TODO(awong): Pull this out into a model.
  createBlankProvider() {
    return {
      insuranceName: null,
      insuranceAddress: null,
      insuranceCity: null,
      insuranceCountry: null,
      insuranceState: null,
      insuranceZipcode: null,
      insurancePhone: null,
      insurancePolicyHolderName: null,
      insurancePolicyNumber: null,
      insuranceGroupCode: null,
    };
  }

  render() {
    let providersTable;

    if (this.props.data.isCoveredByHealthInsurance) {
      providersTable = (
        <GrowableTable
            component={Provider}
            createRow={this.createBlankProvider}
            data={this.props.data}
            initializeCurrentElement={() => {this.props.initializeFields();}}
            onRowsUpdate={(update) => {this.props.onStateChange('providers', update);}}
            path="/insurance-information/general"
            rows={this.props.data.providers}/>
      );
    }

    return (
      <fieldset>
        <div className={`input-section${this.props.data.sectionComplete ? ' review-view' : ' edit-view'}`}>
          <h4>Coverage Information</h4>
          <ErrorableCheckbox
              label={`${this.props.data.sectionComplete ? 'Edit' : 'Update'}`}
              checked={this.props.data.sectionComplete}
              className={`edit-checkbox ${this.props.reviewSection ? '' : 'hidden'}`}
              onValueChange={(update) => {this.props.onStateChange('sectionComplete', update);}}/>
          <ErrorableCheckbox
              label="Are you covered by health insurance? (Including coverage through a spouse or another person)"
              checked={this.props.data.isCoveredByHealthInsurance}
              onValueChange={(update) => {this.props.onStateChange('isCoveredByHealthInsurance', update);}}/>
          <hr/>
          {providersTable}
        </div>
      </fieldset>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.insuranceInformation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStateChange: (field, update) => {
      dispatch(veteranUpdateField(['insuranceInformation', field], update));
    },
    initializeFields: () => {
      dispatch(ensureFieldsInitialized('/insurance-information/general'));
    }
  };
}

// TODO(awong): Remove the pure: false once we start using ImmutableJS.
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(InsuranceInformationSection);
export { InsuranceInformationSection };
