// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  doctor: {}
};

// Reducer
export default function DoctorEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DOCTOR_SUCCESS:
      return { ...state, doctor: action.payload };
    case types.FINDBYDOCTOR_REPORT_SUCCESS:
      return { ...state, listReport: action.payload };
    case types.GET_DOCTOR_SUCCESS:
      return { ...state, doctor: action.payload };
    case types.LIST_PATIENT_SUCCESS:
      return { ...state, listPatient: action.payload };
    case types.UPDATE_DOCTOR_SUCCESS:
      return { ...state, doctor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}