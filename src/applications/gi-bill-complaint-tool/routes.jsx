import { createRoutesWithSaveInProgress } from '../../platform/forms/save-in-progress/helpers';

import formConfig from './config/form';
import GIComplaintToolApp from './GIComplaintToolApp.jsx';

const route = {
  path: '/',
  component: GIComplaintToolApp,
  indexRoute: { onEnter: (nextState, replace) => replace('/introduction') },
  childRoutes: createRoutesWithSaveInProgress(formConfig),
};

export default route;
