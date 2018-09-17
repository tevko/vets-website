import React from 'react';
import PropTypes from 'prop-types';

import conditionalStorage from '../../../../platform/utilities/storage/conditionalStorage';
import Five26EZManifest from '../manifest.json';
import VerifyManifest from '../../../verify/manifest.json';

export default function ButtonContainer(props) {
  const { checkGuidanceStatus, isChoosingStatus, atGuidance, goBack, goForward, authenticate, isVerified } = props;
  const { atIncreaseGuidance, atEbenefitsGuidance } = checkGuidanceStatus();

  return  (<div>
    {!isChoosingStatus() &&
      <button type="button" className="usa-button-secondary" onClick={goBack}><span className="button-icon">« </span>Back</button>
    }
    {atIncreaseGuidance && !conditionalStorage().getItem('userToken') &&
      <a className="usa-button-primary" href={`${Five26EZManifest.rootUrl}/introduction/`} onClick={authenticate}>Sign In and Verify Your Identity<span className="button-icon"> »</span></a>
    }
    {atIncreaseGuidance && conditionalStorage().getItem('userToken') && !isVerified &&
      <a className="usa-button-primary" href={`${VerifyManifest.rootUrl}?next=${Five26EZManifest.rootUrl}/introduction/`}>Verify Your Identity<span className="button-icon"> »</span></a>}
    {atIncreaseGuidance && isVerified &&
      <a className="usa-button-primary" href={`${Five26EZManifest.rootUrl}/introduction/`}>Apply for Claim for Increase<span className="button-icon"> »</span></a>}
    {atEbenefitsGuidance &&
      <a className="usa-button-primary" href="https://www.ebenefits.va.gov/ebenefits/about/feature?feature=disability-compensation">Go to eBenefits<span className="button-icon"> »</span></a>
    }
    {!atGuidance() &&
      <a className="usa-button-primary" onClick={goForward}>Next<span className="button-icon"> »</span></a>
    }
  </div>);
}

ButtonContainer.propTypes = {
  checkGuidanceStatus: PropTypes.func.isRequired,
  isChoosingStatus: PropTypes.func.isRequired,
  atGuidance: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
  isVerified: PropTypes.bool.isRequired
};
