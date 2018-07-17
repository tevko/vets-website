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
                  'Myself': 'Only your name will be shared with the school.',
                  'Someone else': 'Only your name will be shared with the school.',
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
                'ui:required': formData => formData.filing !== 'I want to file my complaint anonymously'
              },
              middle: {
                'ui:title': 'Your middle name',
              },
              last: {
                'ui:title': 'Your last name',
                'ui:required': formData => formData.filing !== 'I want to file my complaint anonymously'
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
                'ui:required': formData => formData.filing !== 'I want to file my complaint anonymously'
              },
              middle: {
                'ui:title': 'Middle Name',
              },
              last: {
                'ui:title': 'Last Name',
                'ui:required': formData => formData.filing !== 'I want to file my complaint anonymously'
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
        secondPage: {
          depends: [
            {filing: 'Myself'},
            {filing: 'Someone else'}
          ],
          path: 'first-section/second-page',
          title: 'Contact Information',
          uiSchema: {
            country: {
              'ui:title': 'Country'
            },
            streetAddress1: {
              'ui:title': 'Address line 1',
            },
            streetAddress2: {
              'ui:title': 'Address line 2',
            },
            city: {
              'ui:title': 'City',
            },
            state: {
              'ui:title': 'State',
            },
            postalCode: {
              'ui:title': 'Postal code',
            },
            email: {
              'ui:title': 'Email',
              'ui:widget': 'EmailWidget'
            },
            emailConfirmation: {
              'ui:title': 'Re-enter email address',
              'ui:widget': 'EmailWidget'
            },
            phone: {
              'ui:title': 'Phone number',
              'ui:options': {
                "inputType": "tel"
              }
            }
          },
          schema: {
            type: 'object',
            required: [
              'country',
              'streetAddress1',
              'city',
              'state',
              'postalCode',
              'email',
              'emailConfirmation'
            ],
            properties: {
              country: {
                type: 'string',
                'enum': [
                  'United States'
                ]
              },
              streetAddress1: {
                type: 'string'
              },
              streetAddress2: {
                type: 'string'
              },
              city: {
                type: 'string'
              },
              state: {
                type: 'string',
                enum: [
                  'Alabama',
                  'Alaska',
                  'Arizona',
                  'Arkansas',
                  'California',
                  'Colorado',
                  'Connecticut',
                  'Delaware',
                  'Florida',
                  'Georgia',
                  'Hawaii',
                  'Idaho',
                  'Illinois',
                  'Indiana',
                  'Iowa',
                  'Kansas',
                  'Kentucky',
                  'Louisiana',
                  'Maine',
                  'Maryland',
                  'Massachusetts',
                  'Michigan',
                  'Minnesota',
                  'Mississippi',
                  'Missouri',
                  'Montana',
                  'Nebraska',
                  'Nevada',
                  'New Hampshire',
                  'New Jersey',
                  'New Mexico',
                  'New York',
                  'North Carolina',
                  'North Dakota',
                  'Ohio',
                  'Oklahoma',
                  'Oregon',
                  'Pennsylvania',
                  'Rhode Island',
                  'South Carolina',
                  'South Dakota',
                  'Tennessee',
                  'Texas',
                  'Utah',
                  'Vermont',
                  'Virginia',
                  'Washington',
                  'West Virginia',
                  'Wisconsin',
                  'Wyoming'
                ]
              },
              postalCode: {
                type: 'string',
                maxLength: 10
              },
              email: {
                type: 'string'
              },
              emailConfirmation: {
                type: 'string'
              },
              phone: {
                type: 'string',
                "minLength": 10
              }
            }
          }
        }
      }
    }
  }
};

export default formConfig;
