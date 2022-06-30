const LegendariesService = require('../services/LegendariesService')
const CreateLegendaryService = require('../services/CreateLegendaryService')


const controller = {
    index: (request, response) => {
        const listLegendaries = LegendariesService.listLegendariesService();
        
        response.json(listLegendaries);
    },

    ListData: (request, response) => {
        const { name } = request.query;
        const legendary = LegendariesService.listPokemonData(name);

        return response.json(legendary);
    },
    
    create: (request, response) => {
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefence} = request.body;
        
        const legendary = CreateLegendaryService.createLegendary(
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefence
        );

        return response.json(legendary);
    }
}

module.exports = controller;