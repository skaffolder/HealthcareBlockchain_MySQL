import ReportModelGenerated from "./generated/ReportModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ReportModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ReportModelGenerated,
  ...customModel
};
