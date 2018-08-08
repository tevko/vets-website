import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import { focusElement } from '../../../../platform/utilities/ui';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';
import { introActions, introSelector } from '../../../../platform/forms/save-in-progress/SaveInProgressIntro';


import {
  fetchTransactions
} from '../../../personalization/profile360/vet360/actions';


import {
  fetchHero,
  fetchMilitaryInformation,
  fetchPersonalInformation,
  fetchAddressInformation,
  fetchEmailInformation,
  fetchTelephoneInformation,
} from '../actions';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');

  }

  fetchInfo = () => {
    this.props.fetchPersonalInformation();
    this.props.fetchHero();
    this.props.fetchMilitaryInformation();
    this.props.fetchAddressInformation();
    this.props.fetchEmailInformation();
    this.props.fetchTelephoneInformation();
  }

  render() {
    console.log(this.props);
    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for increased disability compensation"/>
        <h4>About private medical records</h4>
        <p>You said you were treated for [contidion] by a private doctor. If you have those records, you can upload them here, or we can get them for you. If you want us to get yoru recotds, you'll need to authorize their release.</p>
        <p>Do you want to upload your private medical records?</p>
        <button type="button" className="usa-button-secondary" onClick={this.fetchInfo}>Continue</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    profile: state.vaProfile,
    saveInProgress: introSelector(state)
  };
};

const mapDispatchToProps = {
  fetchTransactions,
  fetchHero,
  fetchMilitaryInformation,
  fetchPersonalInformation,
  fetchAddressInformation,
  fetchEmailInformation,
  fetchTelephoneInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);

export { IntroductionPage };
