import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../util/schemaform-utils.jsx';
import formConfig from '../../../src/js/veteran-representative/config/form.js';

describe('authorization to change claimant address', () => {
  const { schema, uiSchema } = formConfig.chapters.authorizationToChangeClaimantAddress.pages.authorizationToChangeClaimantAddress;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input[type="checkbox"]').length).to.equal(1);
  });
});
