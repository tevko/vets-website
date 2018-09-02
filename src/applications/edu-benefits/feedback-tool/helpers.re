[@bs.module "../../../platform/utilities/data/get"] external getString : (string, 'a) => string = "default";
[@bs.module "../../../platform/utilities/data/get"] external getBool : (string, 'a) => bool = "default";

type constants = {
  myself: string,
  someoneElse: string,
  anonymous: string
};

let relationships = {
  myself: "Myself",
  someoneElse: "Someone else",
  anonymous: "Anonymous"
};

let myself = relationships.myself;
let someoneElse = relationships.someoneElse;
let anonymous = relationships.anonymous;

let isNotAnonymous = (formData) => formData##onBehalfOf !== relationships.anonymous;

let isMyself = (formData) => {
  formData##onBehalfOf === relationships.myself
};

let isNotMyself = (formData) => {
  formData##onBehalfOf === relationships.someoneElse || formData##onBehalfOf === relationships.anonymous
};

let isVeteranOrServiceMember = (formData) => {
  let nonServiceMemberOrVeteranAffiliations = ["Spouse", "Child", "Other"];
  !isNotMyself(formData) && !List.exists(x => x === formData##serviceAffiliation, nonServiceMemberOrVeteranAffiliations);
};

let manualSchoolEntryIsChecked = (formData) => {
  getBool("educationDetails.school.view:searchSchoolSelect.view:manualSchoolEntryChecked", formData);
}

let isUS = (formData) => (getString("educationDetails.school.view:manualSchoolEntry.address.country", formData)) === "United States";

let manualSchoolEntryIsNotChecked = (formData) => !manualSchoolEntryIsChecked(formData);

let manualSchoolEntryIsCheckedAndIsUS = (formData) => manualSchoolEntryIsChecked(formData) && isUS(formData);
