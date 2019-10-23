import DoctorApiGenerated from "./generated/DoctorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DoctorApi extends DoctorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Doctor List
  static getDoctorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/doctors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DoctorApi;