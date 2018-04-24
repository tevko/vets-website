import _ from 'lodash/fp';

// Direct Deposit Enrollment Schema
import fullSchema from 'vets-json-schema/dist/24-0296-schema.json';

// Default Start/End 
import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

// UI components
import fullNameUI from '../../common/schemaform/definitions/fullName';
import ssnUI from '../../common/schemaform/definitions/ssn';
import dateUI from '../../common/schemaform/definitions/date';
import bankAccountUI from '../../common/schemaform/definitions/bankAccount';
import phoneUI from '../../common/schemaform/definitions/phone';
import * as addressFn from '../../common/schemaform/definitions/address';

// properties for fields pulled from schema
const {
  institutionName,
  beneficiaryAddressIsNew,
  benefitType,
  veteranFullName,
  veteranSSN,
  veteranVAFileNumber,
  veteranDOB,
  beneficiaryFullName,
  beneficiarySSN,
  beneficiaryVAFileNumber,
  // beneficiaryAddress,
  institutionAccount,
  // institutionAddress,
  institutionPhone,
  payeePhone
} = fullSchema.properties;

// definitions pulled from schema
const {
  fullName,
  ssn,
  vaFileNumber,
  date,
  bankAccount,
  phone
  // ,address
} = fullSchema.definitions;


const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/api',
  trackingPrefix: 'direct-deposit-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '24-0296',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for direct deposit.',
    noAuth: 'Please sign in again to continue your application for direct deposit.'
  },
  title: 'Direct Deposit Enrollment',
  defaultDefinitions: {
    fullName,
    bankAccount,
    phone,
    date,
    ssn,
    vaFileNumber
    // ,address
  },
  chapters: {
    veteran: {
      title: "Veteran's Identification Information",
      pages: {
        veteranInfo: {
          path: 'veteran-info',
          title: '',
          uiSchema: {
            veteranFullName: fullNameUI,
            veteranSSN: _.merge(ssnUI, {
              'ui:title': 'Social Security Number',
              'ui:required': (formData) => !formData.veteranVAFileNumber,
              'ui:errorMessages': {
                required: 'Either SSN or VA File Number is required'
              }
            }),
            veteranVAFileNumber: {
              'ui:title': 'VA File Number',
              'ui:required': (formData) => !formData.veteranSSN,
              'ui:errorMessages': {
                required: 'Either SSN or VA File Number is required'
              }
            },
            veteranDOB: dateUI('Date of Birth')
          },
          schema: {
            type: 'object',
            required: [
              'veteranFullName',
              'veteranDOB'
            ],
            properties: {
              veteranFullName,
              veteranSSN,
              veteranVAFileNumber,
              veteranDOB
            }
          }
        }
      }
    },
    beneficiary: {
      title: "Beneficiary's Identification Information",
      pages: {
        beneficiaryInfo: {
          path: 'beneficiary-info',
          title: '',
          uiSchema: {
            beneficiaryFullName: fullNameUI,
            beneficiarySSN: _.merge(ssnUI, {
              'ui:title': 'Social Security Number',
              'ui:required': (formData) => !formData.beneficiaryVAFileNumber,
              'ui:errorMessages': {
                required: 'Either SSN or VA File Number is required'
              }
            }),
            beneficiaryVAFileNumber: {
              'ui:title': 'VA File Number',
              'ui:required': (formData) => !formData.beneficiarySSN,
              'ui:errorMessages': {
                required: 'Either SSN or VA File Number is required'
              }
            },
            benefitType: {
              'ui:title': 'Type of Benefit'
            },
            beneficiaryAddress: addressFn.uiSchema('Address of Person Receiving Payment'),
            beneficiaryAddressIsNew: {
              'ui:title': 'Check if the above address is new'
            }
          },
          schema: {
            type: 'object',
            required: [
              'beneficiaryAddress',
              'beneficiaryFullName',
              'benefitType'
            ],
            properties: {
              beneficiaryFullName,
              beneficiarySSN,
              beneficiaryVAFileNumber,
              benefitType,
              beneficiaryAddress: addressFn.schema(fullSchema, true),
              beneficiaryAddressIsNew
            }
          }
        }
      }
    },
    financial: {
      title: 'Financial Institution Information',
      pages: {
        financialInfo: {
          path: 'financial-info',
          title: '',
          uiSchema: {
            institutionAccount: _.merge(bankAccountUI, {
              accountType: {
                'ui:title': 'Bank Account Type',
                'ui:required': (formData) => !formData.institutionAccount.accountType
              },
              accountNumber: {
                'ui:required': (formData) => !formData.institutionAccount.accountNumber
              },
              routingNumber: {
                'ui:required': (formData) => !formData.institutionAccount.routingNumber
              }
            }),
            institutionName: { 'ui:title': 'Name of Financial Institution' },
            institutionAddress: addressFn.uiSchema('Address of Financial Institution'),
            institutionPhone: _.merge(phoneUI, { 'ui:title': 'Phone Number of Financial Institution' })
          },
          schema: {
            type: 'object',
            required: [
              'institutionAccount',
              'institutionName',
              'institutionPhone'
            ],
            properties: {
              institutionAccount,
              institutionName,
              institutionAddress: addressFn.schema(fullSchema, true),
              institutionPhone
            }
          }
        },
        payee: {
          path: 'payee-contact',
          title: '',
          uiSchema: {
            payeePhone: {
              'ui:title': 'Payee Phone Number'
            }
          },
          schema: {
            type: 'object',
            required: [
              'payeePhone'
            ],
            properties: {
              payeePhone
            }
          }
        }
      }
    }
  }
};

export default formConfig;
