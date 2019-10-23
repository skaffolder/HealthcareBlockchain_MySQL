import PatientApiGenerated from "./generated/PatientApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PatientApi extends PatientApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Patient List
  static getPatientList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/patients")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PatientApi;