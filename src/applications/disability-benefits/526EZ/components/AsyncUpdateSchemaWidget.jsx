import React from 'react';

export default class AsyncUpdateSchemaWidget extends React.Component {
  constructor(props) {
    super(props);

    // Configuration checking
    const uiOptions = this.props.options;
    const { callback, update, handleFailure } = uiOptions;
    if (typeof uiOptions !== 'object') {
      throw new Error('AsyncUpdateSchemaWidget requires ui:options to be passed with callback, update, and handleFailure functions.');
    }
    if (typeof uiOptions.callback !== 'function') {
      throw new Error('AsyncUpdateSchemaWidget requires callback in ui:options to be a function.');
    }
    if (typeof uiOptions.update !== 'function') {
      throw new Error('AsyncUpdateSchemaWidget requires update in ui:options to be a function.');
    }
    if (uiOptions.handleFailure && typeof uiOptions.handleFailure !== 'function') {
      throw new Error('AsyncUpdateSchemaWidget requires handleFailure in ui:options to be a function if it exists.');
    }

    const cbPromise = callback();
    if (cbPromise instanceof Promise) {
      cbPromise.then(update);
      if (handleFailure) {
        cbPromise.catch(handleFailure);
      }
    } else {
      throw new Error('AsyncUpdateSchemaWidget expects callback to return a Promise.');
    }
  }

  render() {
    const {
      uiSchema,
      errorSchema,
      idSchema,
      formData,
      disabled,
      readonly,
      registry,
      onBlur,
      onChange,
      schema
    } = this.props;
    const { SchemaField } = registry.fields;
    return (
      <SchemaField
        schema={schema}
        uiSchema={uiSchema}
        errorSchema={errorSchema}
        idSchema={idSchema}
        formData={formData}
        onChange={onChange}
        onBlur={onBlur}
        registry={registry}
        required={false}
        disabled={disabled}
        readonly={readonly}/>
    );
  }
}
