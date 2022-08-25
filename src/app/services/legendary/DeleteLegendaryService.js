import ListAllLegendariesService from "./ListAllLegendariesService.js";

class DeleteLegendaryService {
  constructor() {}
  delete(id) {
    const pokemons = ListAllLegendariesService.list();
    const pokemonIndex = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndex === -1) {
      return { erro: "Pokémon não encontrado" };
    }

    pokemons.splice(pokemonIndex, 1);

    return { mensagem: "Pokémon removido com sucesso" };
  }
}

export default DeleteLegendaryService;
