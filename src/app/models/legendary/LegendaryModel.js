import Sequelize, { Model } from "sequelize";

class LegendaryModel extends Model {
  static init(sequelize) {
    super.init(
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
  }
}

export { LegendaryModel };
/* function LegendaryModel(id, name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.type = type;
  this.healthPoints = healthPoints;
  this.specialAttack = specialAttack;
  this.defense = defense;
  this.attack = attack;
  this.experience = experience;
  this.specialDefense = specialDefense;
}
export default LegendaryModel;
*/
