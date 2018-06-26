import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from 'us-forms-system/lib/js/components/FormTitle';

import { focusElement } from '../../../platform/utilities/ui';
import SaveInProgressIntro, { introActions, introSelector } from '../../../platform/forms/save-in-progress/SaveInProgressIntro';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="GI Bill Coomplaint Tool"/>
        <p>This is the tool for people using the GI Bill to express their complaints.</p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          messages={this.props.route.formConfig.savedFormMessages}
          downtime={this.props.route.formConfig.downtime}
          pageList={this.props.route.pageList}
          startText="Start using the tool"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the 10-10EZ form to apply for health care benefits.
        </SaveInProgressIntro>
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
