import ListLegendariesService from "../../services/legendary/ListLegendariesService.js";

const UpdateLegendaryService = {
  update: (id, name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) => {
    const pokemons = ListLegendariesService.listLegendariesService();
    const pokemonIndice = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndice === -1) {
      return { erro: "Pokemon não encontrado" };
    }

    pokemons[pokemonIndice] = {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    };

    return {
      id,
      ...pokemons[pokemonIndice],
    };
  },
};

export default UpdateLegendaryService;
