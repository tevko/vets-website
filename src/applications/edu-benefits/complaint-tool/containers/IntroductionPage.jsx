import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { focusElement } from '../../../../platform/utilities/ui';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';
import SaveInProgressIntro, { introActions, introSelector } from '../../../../platform/forms/save-in-progress/SaveInProgressIntro';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="GI Bill Complaint Tool"/>
        <h4>Follow the steps below to submit a complaint:</h4>
        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>To fill out this application, you’ll need your:</h6></div>
              <ul>
                <li>School Name</li>
                <li>School Address</li>
                <li>...etc?</li>
              </ul>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this application .</p>
              <p>After submitting the complaint, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-three">
              <div><h5>VA Review</h5></div>
              <p>We process claims in the order we recieve them. We'll let you know by email if we need more information.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>Follow Up</h5></div>
              <p>We will share our communication with your institution with you if applicable. Add ___@va.gov to your contacts to recieve notifications about messages that need timely responses.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    saveInProgress: introSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveInProgressActions: bindActionCreators(introActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);

export { IntroductionPage };
