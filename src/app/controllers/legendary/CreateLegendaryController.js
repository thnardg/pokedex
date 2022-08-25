import CreateLegendaryService from "../../services/legendary/CreateLegendaryService.js";

class CreateLegendaryController {
  constructor() {}

  create(request, response) {
    const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense } = request.body;

    const legendary = CreateLegendaryService.createLegendary(name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

    return response.json(legendary);
  }
}

export default CreateLegendaryController;
