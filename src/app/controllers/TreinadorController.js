const CreateTreinadorService = require('../services/CreateTreinadorService');
const listTreinadorService = require('../services/ListTreinadorService');
const UpdateTreinadorService = require('../services/UpdateTreinadorService');
const DeleteTreinadorService = require('../services/DeleteLegendaryService');

const treinadorController = {
    ListData: (request, response) => {
        const { name } = request.query;

        if (!name) {
            return response.status(400).json("Você não passou o nome do treinador");
        }
        const treinador = listTreinadorService.listTreinadorData(name);

        return response.json(treinador);
    },

    create: (request, response) => {
        const { name, idade, cidade } = request.body;
        
        if (!name) {
            return response.status(404).json("Você não adicionou um nome.");
        } else if (!idade) {
            return response.status(404).json("Você não adicionou uma idade.");
        }

        const treinador = CreateTreinadorService.createTreinador(name, idade, cidade);
        return response.json(treinador);
    },

    update: (request, response) => {
        const { id } = request.params;
        const dados = request.body;

        const updateTreinador = UpdateTreinadorService.update(id, dados);
        response.json(updateTreinador);
    },

    delete: (request, response) => {
        const { id } = request.params
        const deleteTreinador = DeleteTreinadorService.delete(id);

        response.json(deleteTreinador);
    }
}

module.exports = treinadorController;