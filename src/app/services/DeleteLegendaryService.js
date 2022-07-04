const ListLegendaryService = require("./ListLegendariesService");

const DeleteLegendaryService = {
    delete: (id) => {
        const pokemons = ListLegendaryService.listLegendariesService();
        const pokemonIndice = pokemons.findIndex(item => item.id === Number(id));

        if (pokemonIndice === -1) {
            return { erro: "Pokemon não encontrado" }
        }

        pokemons.splice(pokemonIndice, 1)

        return { mensagem: "Pokemon removido com sucesso" }
    }
}

module.exports = DeleteLegendaryService;