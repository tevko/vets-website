const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const One990EManifest = require('../1990e/manifest.json');
const One990NManifest = require('../1990n/manifest.json');
const One995Manifest = require('../1995/manifest.json');
const Five490Manifest = require('../5490/manifest.json');
const Five495Manifest = require('../5495/manifest.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    // Ensure education apply-wizard page renders.
    // Open education apply wizard
    client
      .url(`${E2eHelpers.baseUrl}/education/apply/`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('How to Apply for Education Benefits: Vets.gov')
      .waitForElementVisible('.wizard-container', Timeouts.normal)
      .click('.wizard-button')
      .waitForElementVisible('label[for="newBenefit-0"]', Timeouts.normal)
      .axeCheck('.main');

    // Create a new application
    client
      .click('input[id="newBenefit-0"]')
      .waitForElementVisible('label[for="serviceBenefitBasedOn-0"]', Timeouts.normal)
    // Select veteran
      .click('input[id="serviceBenefitBasedOn-0"]')
      .waitForElementVisible('label[for="nationalCallToService-0"]', Timeouts.normal)
    // Select national call to service
      .click('#nationalCallToService-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(One990NManifest.rootUrl);

    client
      .expect.element('.usa-alert-warning').to.be.present;

    // Select non-veteran
    client
      .click('#serviceBenefitBasedOn-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .expect.element('.usa-alert-warning').not.to.be.present;

    client
      .waitForElementVisible('label[for="sponsorDeceasedDisabledMIA-0"]', Timeouts.normal);

    // Select dependent
    client
      .click('#sponsorDeceasedDisabledMIA-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(Five490Manifest.rootUrl);

    // Select non-dependent
    client
      .click('#sponsorDeceasedDisabledMIA-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .waitForElementVisible('label[for="sponsorTransferredBenefits-0"]', Timeouts.normal);

    // Select transfer
    client
      .click('#sponsorTransferredBenefits-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(One990EManifest.rootUrl);

    // Select non-transfer
    client
      .click('#sponsorTransferredBenefits-1')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('.usa-alert-warning').to.be.present;

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(One990EManifest.rootUrl);

    // Update an existing application
    client
      .click('#newBenefit-1')
      .expect.element('#apply-now-link').not.to.be.present;

    client
      .waitForElementVisible('label[for="transferredEduBenefits-0"]', Timeouts.normal);

    // Select dependent
    client
      .click('#transferredEduBenefits-2')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('.usa-alert-warning').not.to.be.present;

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(Five495Manifest.rootUrl);

    // Select non-dependent
    client
      .click('#transferredEduBenefits-0')
      .waitForElementVisible('#apply-now-link', Timeouts.normal);

    client
      .expect.element('#apply-now-link').to.have.attribute('href').which.contains(One995Manifest.rootUrl);

    // Navigate to application
    client
      .click('#apply-now-link')
      .pause(1000)
      .assert.urlContains(`${One995Manifest.rootUrl}/introduction`);

    client
      .end();
  }
);
