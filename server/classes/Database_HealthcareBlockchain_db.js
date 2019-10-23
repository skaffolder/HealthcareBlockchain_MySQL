// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_HealthcareBlockchain_db";
import UserModel from "../models/HealthcareBlockchain_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.HealthcareBlockchain_db.host +
        ":" +
        properties.HealthcareBlockchain_db.port +
        "//" +
        properties.HealthcareBlockchain_db.user +
        "@" +
        properties.HealthcareBlockchain_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.HealthcareBlockchain_db.name,
      properties.HealthcareBlockchain_db.user,
      properties.HealthcareBlockchain_db.password,
      {
        host: properties.HealthcareBlockchain_db.host,
        dialect: properties.HealthcareBlockchain_db.dialect,
        port: properties.HealthcareBlockchain_db.port,
        logging: false
      }
    );
    this.dbConnection_HealthcareBlockchain_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_HealthcareBlockchain_db;
  }
}

export default new Database();
