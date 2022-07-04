const LegendariesService = require('../services/LegendariesService')
const CreateLegendaryService = require('../services/CreateLegendaryService')
const UpdateLegendaryService = require('../services/UpdateLegendaryService');
const DeleteLegendaryService = require('../services/DeleteLegendaryService');


const controller = {
    index: (request, response) => {
        const listLegendaries = LegendariesService.listLegendariesService();
        
        response.json(listLegendaries);
    },

    ListData: (request, response) => {
        const { name } = request.query;

        if (!name) {
            return response.status(400).json("Você não passou o nome do Pokémon");
        }
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
    },
    update: (request, response) => {
        const { id } = request.params
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefence
        } = request.body;

        const updatedLegendary = UpdateLegendaryService.update (
            id,
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefence
        )

        response.json(updatedLegendary)
    },

    delete: (request, response) => {
        const { id } = request.params
        const resultado = DeleteLegendaryService.delete(id);

        response.send(resultado);
    }
}

module.exports = controller;