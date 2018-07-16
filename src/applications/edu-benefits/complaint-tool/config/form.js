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
                labels: {
                  1: 'Myself',
                  2: 'Someone else',
                  3: 'I want to file my complaint anonymously'
                },
                nestedContent: {
                  1: 'Only your name will be shared with the school.',
                  2: 'Only your name will be shared with the school.',
                  3: 'None of your personal information will be shared outside of the VA.'
                }
              },
            },
            myselfInfo: {
              'ui:options': {
                hideIf: formData => formData.filing !== 1,
                expandUnder: 'filing'
              },

              first: {
                'ui:title': 'Your first name',
                'ui:required': formData => formData.filing !== 3
              },
              middle: {
                'ui:title': 'Your middle name',
              },
              last: {
                'ui:title': 'Your last name',
                'ui:required': formData => formData.filing !== 3
              },
              suffix: {
                'ui:title': 'Suffix',
                'ui:options': {
                  labels: {
                    1: 'Jr.',
                    2: 'Sr.',
                    3: 'II',
                    4: 'III',
                    5: 'IV'
                  }
                }
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
              'ui:required': formData => formData.filing === 1,
              'ui:options': {
                labels: {
                  1: 'Yes',
                  2: 'No'
                },
                hideIf: formData => formData.filing !== 1,
                expandUnderClassNames: 'schemaform-expandUnder'
              }
            },
            someoneInfo: {
              'ui:options': {
                hideIf: formData => formData.filing !== 2,
                expandUnder: 'filing'
              },

              first: {
                'ui:title': 'First Name',
                'ui:required': formData => formData.filing !== 3
              },
              middle: {
                'ui:title': 'Middle Name',
              },
              last: {
                'ui:title': 'Last Name',
                'ui:required': formData => formData.filing !== 3
              },
              suffix: {
                'ui:title': 'Suffix',
                'ui:options': {
                  labels: {
                    1: 'Jr.',
                    2: 'Sr.',
                    3: 'II',
                    4: 'III',
                    5: 'IV'
                  }
                }
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
                hideIf: formData => formData.serviceAffiliation !== 1,
                expandUnder: 'serviceAffiliation',
              },
              branch: {
                'ui:title': 'Branch',
                'ui:required': formData => formData.serviceAffiliation === 1,
                'ui:options': {
                  labels: {
                    1: 'Army',
                    2: 'Navy',
                    3: 'Marines',
                    4: 'Air Force',
                    5: 'Coast Guard',
                    6: 'NOAA/PHS'
                  }
                }
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
            }
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
                  1,
                  2,
                  3
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
                      1,
                      2,
                      3,
                      4,
                      5
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
                  1,
                  2
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
                      1,
                      2,
                      3,
                      4,
                      5
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
                      1,
                      2,
                      3,
                      4,
                      5,
                      6
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
            {filing: 1},
            {filing: 2}
          ],
          path: 'first-section/second-page',
          title: 'Second Page',
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
                'enum': countries
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
            governmentTuition: {
              'ui:title': 'Government Tuition'
            },
            pocketTuition: {
              'ui:title': 'Out of Pocket Tuition'
            }
          },
          schema: {
            type: 'object',
            required: [
              'view:giBill',
            ],
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
              }
            }
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
            }
          },
          schema: {
            type: 'object',
            required: [
              'school',
              'country',
              'streetAddress1',
              'city',
              'state',
              'postalCode',
              'email'
            ],
            properties: {
              school: {
                type: 'string'
                //Consider using the autofill widget...
              },
              country: {
                type: 'string',
                'enum': countries
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
              }
            }
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
            required: [
              'view:issueType',
              'complaint',
              'resolution'
            ],
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
            }
          }
        }
      }
    }
  }
};

export default formConfig;
