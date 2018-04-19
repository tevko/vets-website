import formConfig from './config/form';
// import createSchemaFormReducer from 'us-forms-system/lib/state';
import { createSaveInProgressFormReducer } from '../common/schemaform/save-in-progress/reducers';

export default {
  form: createSaveInProgressFormReducer(formConfig)
};
