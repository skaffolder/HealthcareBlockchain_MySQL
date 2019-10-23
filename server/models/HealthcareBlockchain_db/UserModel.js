import UserModelGenerated from "./generated/UserModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await UserModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UserModelGenerated,
  ...customModel
};
