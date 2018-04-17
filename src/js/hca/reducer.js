import formConfig from './config/form';
import createSchemaFormReducer from '../common/schemaform/state';
// import { createSaveInProgressFormReducer } from '../common/schemaform/save-in-progress/reducers';

export default {
  form: createSchemaFormReducer(formConfig)
};
