import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);

class LegendaryModel extends Model {}

LegendaryModel.init(
  {
    id: Sequelize.UUIDV4(),
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    type: Sequelize.STRING,
    specialAttack: Sequelize.STRING,
    defense: Sequelize.STRING,
    attack: Sequelize.STRING,
    experience: Sequelize.STRING,
    specialDefense: Sequelize.STRING,
  },
  {
    sequelize,
  }
);

export default LegendaryModel;
