// import fullSchema from 'vets-json-schema/dist/686-schema.json';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';


// const { } = fullSchema.properties;

// const { } = fullSchema.definitions;

const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/api',
  trackingPrefix: 'complaint-tool',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '686',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for declaration of status of dependents.',
    noAuth: 'Please sign in again to continue your application for declaration of status of dependents.'
  },
  title: 'GI Bill School Complaint Tool',
  defaultDefinitions: {
  },
  chapters: {
    firstSection: {
      title: 'Filing Information',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {
            filing: {
              'ui:title': 'I am filing on behalf of:',
              'ui:widget': 'radio',
              'ui:options': {
                expandUnderClassNames: 'schemaform-expandUnder',
                nestedContent: {
                  'Myself': '(We\'ll only share your name with the school.)',
                  'Someone else': '(We\'ll only share your name with the school.)',
                  'I want to file my complaint anonymously': 'None of your personal information will be shared outside of the VA.'
                }
              },
            },
            myselfInfo: {
              'ui:options': {
                hideIf: formData => formData.filing !== 'Myself',
                expandUnder: 'filing'
              },

              first: {
                'ui:title': 'Your first name',
                'ui:required': formData => formData.filing === 'Myself'
              },
              middle: {
                'ui:title': 'Your middle name',
              },
              last: {
                'ui:title': 'Your last name',
                'ui:required': formData => formData.filing === 'Myself'
              },
              suffix: {
                'ui:title': 'Suffix',
              },
              dob: {
                'ui:title': 'Date of Birth',
                'ui:widget': 'date',
                'ui:options': {
                  inline: true
                }
              },
            },
            serviceAffiliation: {
              'ui:title': 'Are you a veteran?',
              'ui:widget': 'radio',
              'ui:required': formData => formData.filing === 'Myself',
              'ui:options': {
                hideIf: formData => formData.filing !== 'Myself',
                expandUnderClassNames: 'schemaform-expandUnder'
              }
            },
            someoneInfo: {
              'ui:options': {
                hideIf: formData => formData.filing !== 'Someone else',
                expandUnder: 'filing'
              },

              first: {
                'ui:title': 'First Name',
                'ui:required': formData => formData.filing === 'Someone else'
              },
              middle: {
                'ui:title': 'Middle Name',
              },
              last: {
                'ui:title': 'Last Name',
                'ui:required': formData => formData.filing === 'Someone else'
              },
              suffix: {
                'ui:title': 'Suffix',
              },
              dob: {
                'ui:title': 'Date of Birth',
                'ui:widget': 'date',
                'ui:options': {
                  inline: true
                }
              }
            },
            militaryHistory: {
              'ui:options': {
                hideIf: formData => formData.serviceAffiliation !== 'Yes',
                expandUnder: 'serviceAffiliation',
              },
              branch: {
                'ui:title': 'Branch',
                //'ui:required': formData => formData.serviceAffiliation === 'Yes',
              },
              eod: {
                'ui:title': 'Service start date',
                'ui:widget': 'date',
                'ui:options': {
                  inline: true,
                }
              },
              rad: {
                'ui:title': 'Service end date',
                'ui:widget': 'date',
                'ui:options': {
                  inline: true,
                }
              }
            },
          },
          schema: {
            type: 'object',
            required: [
              'filing'
            ],
            properties: {
              filing: {
                type: 'string',
                enum: [
                  'Myself',
                  'Someone else',
                  'I want to file my complaint anonymously'
                ]
              },
              myselfInfo: {
                type: 'object',
                properties: {
                  first: {
                    type: 'string',
                    pattern: '^.*\\S.*',
                    minLength: 1,
                    maxLength: 30
                  },
                  middle: {
                    type: 'string'
                  },
                  last: {
                    type: 'string',
                    pattern: '^.*\\S.*',
                    minLength: 2,
                    maxLength: 30
                  },
                  suffix: {
                    type: 'string',
                    'enum': [
                      'Jr.',
                      'Sr.',
                      'II',
                      'III',
                      'IV'
                    ]
                  },
                  dob: {
                    type: 'string'
                  },
                }
              },
              serviceAffiliation: {
                type: 'string',
                enum: [
                  'Yes',
                  'No'
                ]
              },
              someoneInfo: {
                type: 'object',
                properties: {
                  first: {
                    type: 'string',
                    pattern: '^.*\\S.*',
                    minLength: 1,
                    maxLength: 30
                  },
                  middle: {
                    type: 'string'
                  },
                  last: {
                    type: 'string',
                    pattern: '^.*\\S.*',
                    minLength: 2,
                    maxLength: 30
                  },
                  suffix: {
                    type: 'string',
                    'enum': [
                      'Jr.',
                      'Sr.',
                      'II',
                      'III',
                      'IV'
                    ]
                  },
                  dob: {
                    type: 'string'
                  },
                }
              },
              militaryHistory: {
                type: 'object',
                properties: {
                  branch: {
                    type: 'string',
                    enum: [
                      'Army',
                      'Navy',
                      'Marines',
                      'Air Force',
                      'Coast Guard',
                      'NOAA/PHS'
                    ]
                  },
                  eod: {
                    type: 'string'
                  },
                  rad: {
                    type: 'string'
                  }
                }
              }
            }
          }
        },
      }
    }
  }
};

export default formConfig;
