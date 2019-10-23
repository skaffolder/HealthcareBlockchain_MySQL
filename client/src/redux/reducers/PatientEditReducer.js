// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  patient: {}
};

// Reducer
export default function PatientEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PATIENT_SUCCESS:
      return { ...state, patient: action.payload };
    case types.FINDBYPATIENTS_DOCTOR_SUCCESS:
      return { ...state, listDoctor: action.payload };
    case types.GET_PATIENT_SUCCESS:
      return { ...state, patient: action.payload };
    case types.UPDATE_PATIENT_SUCCESS:
      return { ...state, patient: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}