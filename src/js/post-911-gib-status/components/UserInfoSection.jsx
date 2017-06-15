import React from 'react';
import PropTypes from 'prop-types';

import InfoPair from './InfoPair';

import { formatDateShort, formatPercent } from '../utils/helpers';

class UserInfoSection extends React.Component {
  render() {
    const enrollmentData = this.props.enrollmentData || {};

    // Get today's date to show information current as of
    const todayFormatted = formatDateShort(new Date());
    const percentageBenefit = formatPercent(enrollmentData.percentageBenefit) || 'unavailable';
    const fullName = `${enrollmentData.firstName} ${enrollmentData.lastName}`;

    let currentAsOfAlert;
    if (this.props.showCurrentAsOfAlert) {
      currentAsOfAlert = (
        <div className="usa-alert usa-alert-info">
          <div className="usa-alert-body">
            <h4 className="usa-alert-heading">This information is current as of {todayFormatted}</h4>
          </div>
        </div>
      );
    }

    return (
      <div>
        {currentAsOfAlert}
        <InfoPair
            label="Name"
            value={fullName}
            spacingClass="section-line"/>
        <InfoPair
            label="Date of Birth"
            value={formatDateShort(enrollmentData.dateOfBirth)}
            spacingClass="section-line"/>
        {/* TODO: find out whether this should be only partially displayed  xxxx1234 */}
        <InfoPair
            label="VA File Number"
            value={enrollmentData.vaFileNumber}
            spacingClass="section-line"/>
        <InfoPair
            label="Regional Processing Office"
            value={enrollmentData.regionalProcessingOffice}
            spacingClass="section-line"/>
        <div>
          <h4>When You Can Receive Benefits</h4>
          <div className="section-line">
            You are eligible to receive benefits between <strong>{formatDateShort(enrollmentData.eligibilityDate)}</strong> and <strong>{formatDateShort(enrollmentData.delimitingDate)}</strong>.
          </div>
        </div>
        <div>
          <h4>Your Benefit Level</h4>
          <div className="section-line">
            You are eligible to receive benefits at a rate of <strong>{percentageBenefit}</strong>.
          </div>
        </div>
        <InfoPair label="Total months received" value={enrollmentData.originalEntitlement}/>
        <InfoPair label="Used" value={enrollmentData.usedEntitlement}/>
        <InfoPair label="Remaining" value={enrollmentData.remainingEntitlement}/>
      </div>
    );
  }
}

UserInfoSection.propTypes = {
  enrollmentData: PropTypes.object,
  showCurrentAsOfAlert: PropTypes.bool
};

export default UserInfoSection;
