import actionsFunction from "./generated/DoctorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DoctorApi from "../../api/DoctorApi";
 
 actionsFunction.loadDoctorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DoctorApi
     .getDoctorList()
     .then(list => {
       dispatch(actionsFunction.loadDoctorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
