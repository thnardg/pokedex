import LegendaryModel from "../../models/legendary/LegendaryModel.js";
import { v4 } from "uuid";

class CreateLegendaryService {
  constructor() {}
  createLegendary(name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    const newLegendary = new LegendaryModel(v4(), name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

    return newLegendary;
  }
}

export default CreateLegendaryService;
