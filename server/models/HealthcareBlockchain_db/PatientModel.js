import PatientModelGenerated from "./generated/PatientModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PatientModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PatientModelGenerated,
  ...customModel
};
