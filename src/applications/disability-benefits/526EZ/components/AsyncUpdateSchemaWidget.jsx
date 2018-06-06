import React from 'react';

export default class AsyncUpdateSchemaWidget extends React.Component {
  constructor(props) {
    super(props);

    // Configuration checking
    const uiOptions = this.props.options;
    if (typeof uiOptions !== 'object' || !Array.isArray(uiOptions.actions)) {
      throw new Error('AsyncUpdateSchemaWidget requires ui:options to be passed with an `actions` array.');
    }

    uiOptions.actions.forEach(action => {
      if (typeof action.callback !== 'function') {
        throw new Error('AsyncUpdateSchemaWidget requires callback in ui:options to be a function.');
      }
      if (typeof action.update !== 'function') {
        throw new Error('AsyncUpdateSchemaWidget requires update in ui:options to be a function.');
      }
      if (action.handleFailure && typeof action.handleFailure !== 'function') {
        throw new Error('AsyncUpdateSchemaWidget requires handleFailure in ui:options to be a function if it exists.');
      }
    });

    // Safety checks done; call all the things
    uiOptions.actions.forEach((action, i) => {
      const { callback, update, handleFailure } = action;
      const cbPromise = callback();
      if (cbPromise instanceof Promise) {
        cbPromise.then(update);
        if (handleFailure) {
          cbPromise.catch(handleFailure);
        }
      } else {
        throw new Error(`AsyncUpdateSchemaWidget expects callback to return a Promise but found ${typeof cbPromise} at actions[${i}].`);
      }
    });
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
