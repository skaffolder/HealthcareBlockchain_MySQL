import actionsFunction from "./generated/PatientActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PatientApi from "../../api/PatientApi";
 
 actionsFunction.loadPatientList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PatientApi
     .getPatientList()
     .then(list => {
       dispatch(actionsFunction.loadPatientSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
