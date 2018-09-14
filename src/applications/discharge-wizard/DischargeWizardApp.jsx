import React from 'react';
import Breadcrumbs from '@department-of-veterans-affairs/formation/Breadcrumbs';
import DischargeWizardManifest from './manifest.json';

export default function DischargeWizardApp({ children }) {
  return (
    <div className="discharge-wizard">
      <Breadcrumbs>
        <a href="/" id="dw-home-link">Home</a>
        <a href={`${DischargeWizardManifest.rootUrl}/`} id="dw-instructions">Apply for a Discharge Upgrade</a>
      </Breadcrumbs>
      <div className="row">
        <div className="columns small-12" aria-live="polite" aria-relevant="additions">
          {children}
        </div>
      </div>
    </div>
  );
}
