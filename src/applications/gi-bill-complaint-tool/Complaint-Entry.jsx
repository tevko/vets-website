import '../../platform/polyfills';
import './sass/hca.scss'; //TODO: change this to new hca.scss file

import startApp from '../../platform/startup';

import routes from './routes';
import reducer from './reducer';
import manifest from './manifest.json'; //TODO: manifest file

let rootUrl = manifest.rootUrl;
if (window.location.pathname.indexOf('healthcare/') >= 0) {
  rootUrl = rootUrl.replace('health-care/', 'healthcare/');//We'll need to do something here...
}

startApp({
  url: rootUrl,
  reducer,
  routes
});
