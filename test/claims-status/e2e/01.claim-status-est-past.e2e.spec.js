const E2eHelpers = require('../../../src/platform/testing/e2e/helpers');
const Timeouts = require('../../../src/platform/testing/e2e/timeouts.js');
const DisabilityHelpers = require('../../e2e/disability-helpers');
const LoginHelpers = require('../../e2e/login-helpers');
const moment = require('moment');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = LoginHelpers.getUserToken();

    DisabilityHelpers.initClaimsListMock(token);

    DisabilityHelpers.initClaimDetailMocks(token, false, true, false, 6, moment().subtract(5, 'years').format('YYYY-MM-DD'));

    LoginHelpers.logIn(token, client, '/track-claims', 3)
      .waitForElementVisible('.claim-list-item-container', Timeouts.slow);

    client
      .click('.claim-list-item-container:first-child a.usa-button-primary')
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.claim-title', Timeouts.slow)
      .axeCheck('.main');

    // redirect to status tab
    client.assert.urlContains('/your-claims/11/status');

    client
      .expect.element('.claim-completion-desc').text.to.contain('We estimated your claim would be completed by now');

    client.end();
  }
);
