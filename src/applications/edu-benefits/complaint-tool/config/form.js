// import fullSchema from 'vets-json-schema/dist/686-schema.json';

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import { validateBooleanGroup } from 'us-forms-system/lib/js/validation';

// const { } = fullSchema.properties;

// const { } = fullSchema.definitions;

const countries = [
      "Afghanistan",
      "Åland Islands",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "United States Minor Outlying Islands",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cabo Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo (Democratic Republic of the)",
      "Cook Islands",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Côte d'Ivoire",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Macedonia (the former Yugoslav Republic of)",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Korea (Democratic People's Republic of)",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of Kosovo",
      "Réunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "Korea (Republic of)",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom of Great Britain and Northern Ireland",
      "United States of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe"
]

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
  title: 'GI Bill Complaint Tool',
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
            },
            personalInfo: {
              'ui:options': {
                hideIf: formData => formData.filing === 'Anonymous'
              },
              first: {
                'ui:title': 'First Name'
              },
              middle: {
                'ui:title': 'Middle Name'
              },
              last: {
                'ui:title': 'Last Name'
              },
              suffix: {
                'ui:title': 'Suffix'
              },
              dob: {
                'ui:title': 'Date of Birth',
                'ui:widget': 'date',
                'ui:options': {
                  inline: true
                }
              }
            },
          },
          schema: {
            type: 'object',
            properties: {
              filing: {
                type: 'string',
                enum: [
                  'Myself',
                  'Someone Else',
                  'Anonymous'
                ]
              },
              personalInfo: {
                type: 'object',
                required: [
                  'filing'
                ],
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
                  }
                }
              },

            },
          }
        },
        secondPage: {
          depends: [
            {filing: 'Myself'},
            {filing: 'Someone Else'}
          ],
          path: 'first-section/second-page',
          title: 'Second Page',
          uiSchema: {
            country: {
              'ui:title': 'Country'
            },
            street_address: {
              'ui:title': 'Street Address',
            },
            city: {
              'ui:title': 'City',
            },
            state: {
              'ui:title': 'State',
            },
            postal_code: {
              'ui:title': 'ZIP Code',
            },
            email: {
              'ui:title': 'Email',
              'ui:widget': 'EmailWidget'
            },
            phone: {
              'ui:title': 'Phone Number',
              'ui:options': {
                "inputType": "tel"
              }
            },
          },
          schema: {
            type: 'object',
            properties: {
              country: {
                type: 'string',
                'enum': countries
              },
              street_address: {
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
              postal_code: {
                type: 'string',
                maxLength: 10
              },
              email: {
                type: 'string'
              },
              phone: {
                type: 'string',
                "minLength": 10
              },
            }
          }
        }
      }
    },
    secondSection: {
      title: 'Benefits Used',
      pages: {
        thirdPage: {
          path: 'second-section/first-page',
          title: 'Benefits',
          uiSchema: {
            'view:giBill': {
              'ui:title': 'VA Education Programs (e.g GI Bill)',
              'ui:validations': [
                validateBooleanGroup
              ],
              'ui:options': {
                showFieldLabel: true
              },
              'ui:errorMessages': {
                atLeastOne: 'Please select at least one'
              },
            },
            'view:title10': {
              'ui:title': 'VA Military Tuition Assistance (Title 10)',
              'ui:options': {
                showFieldLabel: true
              },
            },
            study: {
              'ui:title': 'Level of Study'
            },
            government_tuition: {
              'ui:title': 'Government Tuition'
            },
            pocket_tuition: {
              'ui:title': 'Out of Pocket Tuition'
            }
          },
          schema: {
            type: 'object',
            properties: {
              'view:giBill': {
                type: 'object',
                properties: {
                  'Post-9/11 GI Bill (Ch. 33)': {
                    type: 'boolean',
                  },
                  'Montgomery GI Bill - Active Duty (MGIB) (Ch. 30)': {
                    type: 'boolean'
                  },
                  'Montgomery GI Bill - Selected Reserve (MGIB-SR) (Ch. 1606)': {
                    type: 'boolean'
                  },
                  'Tuition Assistance Top-Up': {
                    type: 'boolean'
                  },
                  'Survivors & Dependents Assistance (DEA) (Ch. 35)': {
                    type: 'boolean'
                  },
                  'Vocational Rehabilitation and Employment (VR&E) (Ch. 31)': {
                    type: 'boolean'
                  },
                }
              },
              'view:title10': {
                type: 'object',
                properties: {
                  'Federal Tuition Assistance (TA)': {
                    type: 'boolean'
                  },
                  'State Funded Tuition Assistance (TA) for Service Members Performing Active Guard and Reserve Dutites (AGR)': {
                    type: 'boolean'
                  },
                  'Military Spouse Career Advancement Accounts (MyCAA)': {
                    type: 'boolean'
                  },
                  'Federal Financial Aid': {
                    type: 'boolean'
                  },
                }
              },
              study: {
                type: 'string',
                'enum': [
                  'Certificate/Diploma',
                  'Associates',
                  'Bachelors',
                  'Graduate/Professional',
                  'On-the-Job Training/Apprenticeship'
                ]
              },
              government_tuition: {
                type: 'string',
                'enum': [
                  'Less than $1,000',
                  '$1,000-$4,999',
                  '$5,000-$9,999',
                  '$10,000-$19,000',
                  '$20,000-$29,000',
                  'More than $30,000'
                ]
              },
              pocket_tuition: {
                type: 'string',
                'enum': [
                  'Less than $1,000',
                  '$1,000-$4,999',
                  '$5,000-$9,999',
                  '$10,000-$19,000',
                  '$20,000-$29,000',
                  'More than $30,000'
                ]
              }
            },
            required: [
              'view:giBill',
              'study',
              'government_tuition',
              'pocket_tuition'
            ]
          }
        }
      }
    },
    thirdSection: {
      title: 'School Information',
      pages: {
        fouthPage: {
          path: 'third-section/first-page',
          title: 'First Page',
          uiSchema: {
            school: {
              'ui:title': 'School',
            },
            country: {
              'ui:title': 'Country'
            },
            street_address: {
              'ui:title': 'Street Address',
            },
            city: {
              'ui:title': 'City',
            },
            state: {
              'ui:title': 'State',
            },
            postal_code: {
              'ui:title': 'ZIP Code',
            },
          },
          schema: {
            type: 'object',
            properties: {
              school: {
                type: 'string'
                //Consider using the autofill widget...
              },
              country: {
                type: 'string',
                'enum': countries
              },
              street_address: {
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
              postal_code: {
                type: 'string',
                maxLength: 10
              },
            },
            required: [
              'school',
              'country',
              'street_address',
              'city',
              'state',
              'postal_code'
            ]
          }
        }
      }
    },
    fourthSection: {
      title: 'Complaint',
      pages: {
        fourthPage: {
          path: 'fourth-section/first-page',
          title: 'First Page',
          uiSchema: {
            'view:issueType': {
              'ui:title': 'Which describes the issue?',
              'ui:validations': [
                validateBooleanGroup
              ],
              'ui:options': {
                showFieldLabel: true
              },
              'ui:errorMessages': {
                atLeastOne: 'Please select at least one'
              },
            },
            complaint: {
              'ui:title': 'Describe what happened so we can better understand the issue:',
              'ui:widget': 'textarea',
              'ui:options': {
                rows: 5
              }
            },
            resolution: {
              'ui:title': 'What do you think would be a fair resolution to your issue?',
              'ui:widget': 'textarea',
              'ui:options': {
                rows: 5
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              'view:issueType': {
                type: 'object',
                properties: {
                  'Recruiting/Marketing Practices': {
                    type: 'boolean',
                  },
                  'Student Loans': {
                    type: 'boolean'
                  },
                  'Quality of Education': {
                    type: 'boolean'
                  },
                  'Transfer of Credits': {
                    type: 'boolean'
                  },
                  'Accreditation': {
                    type: 'boolean'
                  },
                  'Post-graduation Job Opportunities': {
                    type: 'boolean'
                  },
                  'Grade Policy': {
                    type: 'boolean'
                  },
                  'Refund Issues': {
                    type: 'boolean'
                  },
                  'Financial Issues (e.g. Tuition/Fee charges)': {
                    type: 'boolean'
                  },
                  'Change in Degree Plan/Requirements': {
                    type: 'boolean'
                  },
                  'Release of Transcripts': {
                    type: 'boolean'
                  },
                }
              },
              complaint: {
                type: 'string'
              },
              resolution: {
                type: 'string'
              }
            },
            required: [
              'view:issueType',
              'complaint',
              'resolution'
            ]
          }
        }
      }
    }
  }
};

export default formConfig;
