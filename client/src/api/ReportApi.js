import ReportApiGenerated from "./generated/ReportApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ReportApi extends ReportApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Report List
  static getReportList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/reports")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ReportApi;