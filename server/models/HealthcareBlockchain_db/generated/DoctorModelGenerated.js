/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE DoctorModelGenerated.js PLEASE EDIT ../DoctorModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_HealthcareBlockchain_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * DoctorModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Doctor.create(item);
    let patients = await result.setPatients(item.patients);
    result.patients = patients;
        return result;
  },
  
  /**
  * DoctorModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Doctor.destroy({ where: { _id: id } });
  },
  
  /**
  * DoctorModel.findBypatients
  *   @description CRUD ACTION findBypatients
  *   @param Objectid key Id della risorsa patients da cercare
  *
  */
  async findBypatients(key) {
    return await Database.getConnection().models.Doctor.findAll({ where: { "patients": key } });
  },
  
  /**
  * DoctorModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Doctor.findByPk(id);
    let patients = await result.getPatients({ raw: true });
    result.dataValues.patients = patients.map(item => item._id);
    
    return result;
  },
  
  /**
  * DoctorModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Doctor.findAll();
      },
  
  /**
  * DoctorModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Doctor.update(item, {
      where: { _id: item._id }
    });
    result = await Database.getConnection().models.Doctor.findByPk(item._id);
    let patients = await result.setPatients(item.patients);
    result.patients = patients;
    
    return result;
  },
  


};

export default generatedModel;
