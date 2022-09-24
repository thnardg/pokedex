import LegendaryModel from "../../models/legendary/LegendaryModel.js";
import { v4 } from "uuid";

export default class CreateLegendaryService {
  constructor() {}

  create(
    name,
    description,
    type,
    healthPoints,
    specialAttack,
    defense,
    attack,
    experience,
    specialDefense
  ) {
    const newLegendary = new LegendaryModel(
      v4(),
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );

    return newLegendary;
  }
}
