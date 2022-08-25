import ListAllLegendariesService from "../../services/legendary/ListAllLegendariesService.js";

class ListLegendaryController {
  constructor() {}

  list(request, response) {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ erro: "Você não passou o nome do pokemon" });
    }

    const legendary = ListAllLegendariesService.listPokemonData(name);

    return response.json(legendary);
  }
}

export default ListLegendaryController;
