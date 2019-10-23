import DoctorModelGenerated from "./generated/DoctorModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DoctorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DoctorModelGenerated,
  ...customModel
};
