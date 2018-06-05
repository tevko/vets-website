import React from 'react';

export default class AsyncUpdateSchemaWidget extends React.Component {
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
