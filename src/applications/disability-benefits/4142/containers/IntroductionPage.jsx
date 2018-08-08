import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { focusElement } from '../../../../platform/utilities/ui';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';
import {
  introActions,
  introSelector,
} from '../../../../platform/forms/save-in-progress/SaveInProgressIntro';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation/ErrorableRadioButtons';
import AdditionalInfo from '@department-of-veterans-affairs/formation/AdditionalInfo';

class IntroductionPage extends React.Component {

  state = {
    getPrivateRecords: null,
  };

  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }
  getRecords = v => {
    this.setState(prevState => ({ ...prevState, getPrivateRecords: v }));
  };

  render() {
    const { privateRecords } = this.state;

    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for increased disability compensation"/>
        <h4>About private medical records</h4>
        <p>
          You said you were treated for [contidion] by a private doctor. If you
          have those records, you can upload them here, or we can get them for
          you. If you want us to get yoru recotds, you'll need to authorize
          their release.
        </p>
        <ErrorableRadioButtons
          name="privateRecords"
          id="privateRecords"
          label="Do you want to upload your private medical records?"
          options={[
            { label: 'Yes', value: true },
            { label: 'No, please get them from my doctor', value: false },
          ]}
          onValueChange={v => this.getRecords(v.value)}
          value={{ value: privateRecords }}/>
        <AdditionalInfo
          triggerText="Which should I choose?">
          <h5>Upload your medical records</h5>
          <p>If you have an electronic copy of your medical records, uploading your records can speed the review of your claim</p>
          <p>This works best if you have a fast internet connection and time for a large file upload. Records should be .pdf, .jpg, or .png files.</p>
          <h5>We get records for you</h5>
          <p>If you tell us which VA medical center treated you for your condition, we can get your medical reocrds for you. Getting your records may take us some time. This could take us longer to make a decision on your claim.</p>
        </AdditionalInfo>

        <button
          type="button"
          className="usa-button-secondary"
          onClick={this.goBack}>
          Back
        </button>
        <button
          type="button"
          className="usa-button-primary"
          onClick={this.fetchInfo}>
          Continue
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    saveInProgress: introSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveInProgressActions: bindActionCreators(introActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);

export { IntroductionPage };
