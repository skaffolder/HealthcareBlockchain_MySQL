import { combineReducers } from "redux";

// START IMPORT REDUCERS
import DoctorEditReducer from "./DoctorEditReducer";
import DoctorListReducer from "./DoctorListReducer";
import HomeReducer from "./HomeReducer";
import PatientEditReducer from "./PatientEditReducer";
import PatientListReducer from "./PatientListReducer";
import ReportEditReducer from "./ReportEditReducer";
import ReportListReducer from "./ReportListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	DoctorEditReducer,
	DoctorListReducer,
	HomeReducer,
	PatientEditReducer,
	PatientListReducer,
	ReportEditReducer,
	ReportListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
