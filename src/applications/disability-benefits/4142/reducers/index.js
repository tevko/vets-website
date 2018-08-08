import formConfig from '../config/form';
import { createSaveInProgressFormReducer } from '../../../../platform/forms/save-in-progress/reducers';

import {
  FETCH_HERO_SUCCESS,
  FETCH_PERSONAL_INFORMATION_SUCCESS,
  FETCH_MILITARY_INFORMATION_SUCCESS,
  FETCH_ADDRESS_INFORMATION_SUCCESS,
  FETCH_EMAIL_INFORMATION_SUCCESS,
  FETCH_TELEPHONE_INFORMATION_SUCCESS,
} from '../actions';

const initialState = {
  hero: null,
  personalInformation: null,
  militaryInformation: null,
  addressInformation: null,
  emailInformation: null,
  telephoneInformation: null,
};

function vaProfile(state = initialState, action) {
  switch (action.type) {
    case FETCH_HERO_SUCCESS:
      return { ...state, hero: action.hero };

    case FETCH_PERSONAL_INFORMATION_SUCCESS:
      return { ...state, personalInformation: action.personalInformation };

    case FETCH_MILITARY_INFORMATION_SUCCESS:
      return { ...state, militaryInformation: action.militaryInformation };

    case FETCH_ADDRESS_INFORMATION_SUCCESS:
      return { ...state, addressInformation: action.addressInformation };

    case FETCH_EMAIL_INFORMATION_SUCCESS:
      return { ...state, emailInformation: action.emailInformation };

    case FETCH_TELEPHONE_INFORMATION_SUCCESS:
      return { ...state, telephoneInformation: action.telephonInformation };
    default:
      return state;
  }
}

export default {
  vaProfile,
  form: createSaveInProgressFormReducer(formConfig)

};
