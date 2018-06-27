import React from 'react';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';

import Vet360EditModal from './Vet360EditModal';

export default class EditEmailModal extends React.Component {
  onChange = ({ value: emailAddress, dirty }) => {
    const newFieldValue = { ...this.props.field.value, emailAddress };
    this.props.onChange(newFieldValue, dirty);
  }

  onBlur = (field) => {
    this.props.onChange(this.props.field.value, field);
  }

  getInitialFormValues = () => {
    if (this.props.data) {
      return { ...this.props.data };
    }
    return {
      emailAddress: ''
    };
  }

  renderForm = () => {
    return (
      <ErrorableTextInput
        autoFocus
        label="Email Address"
        field={{ value: this.props.field.value.emailAddress, dirty: false }}
        errorMessage={this.props.field.validations.emailAddress}
        onValueChange={this.onChange}/>
    );
  }

  render() {
    return (
      <Vet360EditModal
        getInitialFormValues={this.getInitialFormValues}
        render={this.renderForm}
        onBlur={this.onBlur}
        {...this.props}/>
    );
  }
}