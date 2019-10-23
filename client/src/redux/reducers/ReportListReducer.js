// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ReportListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_REPORT_SUCCESS:
      return { ...state, report: action.payload };
    case types.LIST_REPORT_SUCCESS:
      return { ...state, listReport: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}