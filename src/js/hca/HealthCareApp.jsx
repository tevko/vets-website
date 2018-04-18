import React from 'react';

// import FormApp from '../common/schemaform/containers/FormApp';
import RoutedSavableApp from '../common/schemaform/save-in-progress/RoutedSavableApp';
import formConfig from './config/form';

export default function HealthCareEntry({ location, children }) {
  return (
    <RoutedSavableApp formConfig={formConfig} currentLocation={location}>
      {children}
    </RoutedSavableApp>
  );
}
