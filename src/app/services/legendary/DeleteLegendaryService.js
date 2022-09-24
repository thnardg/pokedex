import ListLegendariesService from "./ListLegendariesService.js";

export default class DeleteLegendaryService {
  constructor() {
    this.service = new ListLegendariesService();
  }
  delete(id) {
    const pokemons = this.service.listAll();
    const pokemonIndex = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndex === -1) {
      return { erro: "Pokémon não encontrado" };
    }

    pokemons.splice(pokemonIndex, 1);

    return { mensagem: "Pokémon removido com sucesso" };
  }
}
