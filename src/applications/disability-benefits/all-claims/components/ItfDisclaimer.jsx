import React from 'react';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import { itfModalContents } from '../content/introductionPage';

class ItfDisclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  openITFInfo = () => this.setState({ isVisible: true });
  closeITFInfo = () => this.setState({ isVisible: false });

  render() {
    return (
      <div>
        <button className="va-button-link itf-button" onClick={this.openITFInfo}>
          By clicking the button to start the disability application, you’ll declare
          your intent to file.
        </button>
        <Modal
          title="Intent To File"
          onClose={this.closeITFInfo}
          visible={this.state.isVisible}
          id="itf-modal"
          contents={itfModalContents}/>
      </div>
    );
    // return (
    //   <div className="usa-alert take_action itf-warning">
    //     <div className="usa-alert-body">
    //       <div className="usa-alert-heading">
    //         <button className="va-button-link" onClick={this.openITFInfo}>
    //            By clicking the button to start the disability application, you’ll declare
    //            your intent to file.
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default ItfDisclaimer;
