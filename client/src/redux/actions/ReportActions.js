import actionsFunction from "./generated/ReportActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ReportApi from "../../api/ReportApi";
 
 actionsFunction.loadReportList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ReportApi
     .getReportList()
     .then(list => {
       dispatch(actionsFunction.loadReportSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
