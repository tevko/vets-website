import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ProgressButton from '@department-of-veterans-affairs/formation/ProgressButton';
import Modal from '@department-of-veterans-affairs/formation/Modal';

class FormStartControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  componentWillReceiveProps = (newProps) => {
    if (!this.props.returnUrl && newProps.returnUrl) {
      // Navigate to the last page they were on
      this.props.router.push(newProps.returnUrl);
    }
  }

  getPrestartForm = () => {
    const { prestartCheck, prestartForm } = this.props;
    if (!prestartCheck) {
      return null;
    }
    return () => prestartForm(prestartCheck);
  }

  goToBeginning = () => {
    this.props.router.push(this.props.startPage);
  }

  handleLoadPrefill = () => {
    if (this.props.prefillAvailable) {
      const prestartForm = this.getPrestartForm();
      this.props.fetchInProgressForm(this.props.formId, this.props.migrations, true, this.props.prefillTransformer, prestartForm);
    } else {
      this.goToBeginning();
    }
  }

  handleLoadForm = () => {
    // If successful, this will set form.loadedData.metadata.returnUrl and will
    //  trickle down to this.props to be caught in componentWillReceiveProps
    const prestartForm = this.getPrestartForm();
    return this.props.fetchInProgressForm(this.props.formId, this.props.migrations, null, null, prestartForm);
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  startOver = () => {
    this.toggleModal();
    const prestartForm = this.getPrestartForm();
    return this.props.removeInProgressForm(this.props.formId, this.props.migrations, this.props.prefillTransformer, prestartForm);
  }

  render() {
    if (this.props.formSaved) {
      return (
        <div>
          <ProgressButton
            onButtonClick={this.handleLoadForm}
            buttonText="Continue Your Application"
            buttonClass="usa-button-primary no-text-transform"/>
          {!this.props.resumeOnly && <ProgressButton
            onButtonClick={this.toggleModal}
            buttonText="Start Over"
            buttonClass="usa-button-secondary"/>}
          <Modal
            cssClass="va-modal-large"
            id="start-over-modal"
            onClose={this.toggleModal}
            visible={this.state.modalOpen}>
            <h4>Starting over will delete your in-progress form.</h4>
            <p>Are you sure you want to start over?</p>
            <ProgressButton
              onButtonClick={this.startOver}
              buttonText="Start Over"
              buttonClass="usa-button-primary"/>
            <ProgressButton
              onButtonClick={this.toggleModal}
              buttonText="Cancel"
              buttonClass="usa-button-secondary"/>
          </Modal>
        </div>
      );
    }

    return (
      <div>
        <ProgressButton
          onButtonClick={this.handleLoadPrefill}
          buttonText={this.props.startText || 'Get Started'}
          buttonClass="usa-button-primary schemaform-start-button"
          afterText="»"/>
      </div>
    );
  }
}


FormStartControls.propTypes = {
  prestartCheck: PropTypes.func,
  prestartForm: PropTypes.func,
  formId: PropTypes.string.isRequired,
  handleLoadPrefill: PropTypes.func,
  migrations: PropTypes.array,
  returnUrl: PropTypes.string,
  fetchInProgressForm: PropTypes.func.isRequired,
  removeInProgressForm: PropTypes.func.isRequired,
  formSaved: PropTypes.bool.isRequired,
  prefillAvailable: PropTypes.bool.isRequired,
  startPage: PropTypes.string.isRequired,
  startText: PropTypes.string,
  resumeOnly: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    prestartCheck: state.form.prestartCheck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    prestartForm: (prestartCheck) => {
      dispatch(prestartCheck());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormStartControls));

export { FormStartControls };
