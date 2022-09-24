import LegendaryModel from "../../models/legendary/LegendaryModel.js";

class ListLegendariesService {
  constructor() {}
  listAll() {
    return [];
  }

  listOne(pokemonName) {
    const pokemonList = this.listAll();
    const pokemon = pokemonList.find((item) => item.name === pokemonName);
    return pokemon;
  }
}

export default ListLegendariesService;
