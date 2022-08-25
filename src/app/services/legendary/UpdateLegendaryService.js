import ListAllLegendariesService from "./ListAllLegendariesService.js";

class UpdateLegendaryService {
  constructor() {}

  update(id, name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    const pokemons = ListAllLegendariesService.list();
    const pokemonIndex = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndex === -1) {
      return { erro: "Pokemon não encontrado" };
    }

    pokemons[pokemonIndex] = {
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
      ...pokemons[pokemonIndex],
    };
  }
}

export default UpdateLegendaryService;
