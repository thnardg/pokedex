const UpdateLegendaryService = {
    update: (
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefence
) => {
    const pokemons = ListLegendariesService.listLegendariesService()
    const pokemonIndice = pokemons.findIndex(item => item.id === Number(id))
    
    if (pokemonIndice === -1) {
    return { erro: "Pokemon não encontrado" }
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
    specialDefense
    }

    return {
    id,
    ...pokemons[pokemonIndice]
    }
}
}
    
module.exports = UpdateLegendaryService