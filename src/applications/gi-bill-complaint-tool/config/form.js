import { validateMatch } from 'us-forms-system/lib/js/validation';
import { createUSAStateLabels } from 'us-forms-system/lib/js/helpers';
import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';
import phoneUI from 'us-forms-system/lib/js/definitions/phone';
import { schema as addressSchema, uiSchema as addressUI } from 'us-forms-system/lib/js/definitions/address';
import currentOrPastDateUI from 'us-forms-system/lib/js/definitions/currentOrPastDate';
import dateUI from 'us-forms-system/lib/js/definitions/date';
import ssnUI from 'us-forms-system/lib/js/definitions/ssn';

import {
  states
} from '../../../platform/forms/address';
import { externalServices } from '../../../platform/monitoring/DowntimeNotification';
import FormFooter from '../../../platform/forms/components/FormFooter';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';
