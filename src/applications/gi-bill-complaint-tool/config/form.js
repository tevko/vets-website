//import { validateMatch } from 'us-forms-system/lib/js/validation';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

const formConfig = {
  title: 'GI Bill Complaint Tool',
  subTitle: 'A subtitle will potentially go here',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  version: 1,
  introduction: IntroductionPage,
  confirmation: '',
  defaultDefinitions: {
    //something?
  },
  chapters: {
    firstSection: {
      title: 'Filing Information',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {

          },
          schema: {
            type: 'object',
            properties: {

            }
          }
        }
      }
    },
  }
};

export default formConfig;
