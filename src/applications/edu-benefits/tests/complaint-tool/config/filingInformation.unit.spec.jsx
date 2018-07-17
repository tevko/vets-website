import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio, fillDate } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../complaint-tool/config/form.js';

describe('complaint tool filing information', () => {
  const { schema, uiSchema } = formConfig.chapters.firstSection.pages.firstPage;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        />
    );
    expect(form.find('input').length).to.equal(7); //NOT DROPDOWNS
    expect(form.find('select').length).to.equal(8); //dropdowns
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(4);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit form if applicant is veteran', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'filing', 'Myself');
    fillData(form, 'input#first', 'test');
    fillData(form, 'input#last', 'test');
    selectRadio(form, 'serviceAffiliation', 'Yes');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should submit form if applicant is not a veteran', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'filing', 'Myself');
    fillData(form, 'input#first', 'test');
    fillData(form, 'input#last', 'test');
    selectRadio(form, 'serviceAffiliation', 'No');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should submit form if applicant is filing on behalf of someone else', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'filing', 'Someone else');
    fillData(form, 'input#first', 'test');
    fillData(form, 'input#last', 'test');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should submit form if applicant is filing anonymously', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'filing', 'I want to file my complaint anonymously');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

});
