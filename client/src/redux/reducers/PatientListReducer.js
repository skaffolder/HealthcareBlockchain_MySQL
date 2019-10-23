// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PatientListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PATIENT_SUCCESS:
      return { ...state, patient: action.payload };
    case types.LIST_PATIENT_SUCCESS:
      return { ...state, listPatient: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}