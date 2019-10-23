// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DoctorListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DOCTOR_SUCCESS:
      return { ...state, doctor: action.payload };
    case types.LIST_DOCTOR_SUCCESS:
      return { ...state, listDoctor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}