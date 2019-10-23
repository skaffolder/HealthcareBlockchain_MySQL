// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  report: {}
};

// Reducer
export default function ReportEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_REPORT_SUCCESS:
      return { ...state, report: action.payload };
    case types.GET_REPORT_SUCCESS:
      return { ...state, report: action.payload };
    case types.LIST_DOCTOR_SUCCESS:
      return { ...state, listDoctor: action.payload };
    case types.UPDATE_REPORT_SUCCESS:
      return { ...state, report: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}