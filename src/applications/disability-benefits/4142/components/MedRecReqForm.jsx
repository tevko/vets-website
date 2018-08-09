import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  introActions,
  introSelector,
} from '../../../../platform/forms/save-in-progress/SaveInProgressIntro';

class MedRecReqForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      country: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      primaryPhoneNumber: '',
      firstTreatmendDate: '',
      lastTreatmentDate: '',
    };
  }

  updateProvider = event => {
    this.setState({ provider: event.target.value });
  };

  updateCountry = event => {
    this.setState({ country: event.target.value });
  };

  updateStreetAddress = event => {
    this.setState({ streetAddress: event.target.value });
  };

  updateCity = event => {
    this.setState({ city: event.target.value });
  };

  updatePostalCode = event => {
    this.setState({ postalCode: event.target.value });
  };

  updatePrimaryPhoneNumber = event => {
    this.setState({ primaryPhoneNumber: event.target.value });
  };

  updateFirstTreatmentDate = event => {
    this.setState({ firstTreatmentDate: event.target.value });
  };
  updateLastTreatmentDate = event => {
    this.setState({ lastTreatmentDate: event.target.value });
  };

  handleSubmit = () => {
    // TODO SUBMIT
  };

  continue = () => {
    // TODO CONTINUE
  };

  render() {
    return (
      <div>
        <p>
          Please let us know where and when you received treatment. We'll
          request your private medical records for you. If you have your records
          available, you can upload them later in the application.
        </p>
        <form className="row" onSubmit={this.handleSubmit}>
          <label htmlFor="provider-name" aria-controls="provider-name">
            Name of private provider or hospital
          </label>
          <input
            id="provider-name"
            type="text"
            value={this.state.provider}
            onChange={this.updateProvider}/>
          <label
            htmlFor="first-treatment-date"
            aria-controls="first-treatment-date">
            Approximate date of first treatment
          </label>
          <input
            id="first-treatment-date"
            type="text"
            value={this.state.firstTreatmentDate}
            onChange={this.updateFirstTreatmentDate}/>
          <label
            htmlFor="last-treatment-date"
            aria-controls="last-treatment-date">
            Approximate date of last treatment
          </label>
          <input
            id="last-treatment-date"
            type="text"
            value={this.state.lastTreatmentDate}
            onChange={this.updateLastTreatmentDate}/>
          <label htmlFor="country" aria-controls="country">
            Country
          </label>
          <input
            id="country"
            type="text"
            value={this.state.country}
            onChange={this.updateCountry}/>
          <label htmlFor="street-address" aria-controls="street-address">
            Street Address
          </label>
          <input
            id="street-address"
            type="text"
            value={this.state.streetAddress}
            onChange={this.updatestreetAddress}/>
          <label htmlFor="city" aria-controls="city">
            City
          </label>
          <input
            id="city"
            type="text"
            value={this.state.city}
            onChange={this.updateCity}/>
          <label htmlFor="postal-code" aria-controls="postal-code">
            Postal code
          </label>
          <input
            id="postal-code"
            type="text"
            value={this.state.postalCode}
            onChange={this.updatePostalCode}/>
          <label
            htmlFor="primary-phone-number"
            aria-controls="primary-phone-number">
            Primary Phone Number
          </label>
          <input
            id="primary-phone-number"
            type="text"
            value={this.state.primaryPhoneNumber}
            onChange={this.updatePrimaryPhoneNumber}/>
          <button
            type="button"
            className="usa-button-secondary"
            onClick={this.addAnotherProvider}>
            Add Another Provider
          </button>
        </form>
        <button
          type="button"
          className="usa-button-secondary"
          onClick={this.goBack}>
          Back
        </button>
        <button
          type="button"
          className="usa-button-primary"
          onClick={this.continue}>
          Continue
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    saveInProgress: introSelector(state), // TODO: SEND FORM DATA TO SAVE IN PROGRESS?
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveInProgressActions: bindActionCreators(introActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MedRecReqForm);

export { MedRecReqForm };
