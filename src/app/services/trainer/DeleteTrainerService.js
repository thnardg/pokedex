const ListTreinadorService = require("../ListTreinadorService");

const DeleteTreinadorService = {
    delete: (id) => {
        const treinador = ListTreinadorService.listTreinadorService();
        const treinadorIndex = treinador.findIndex(
            (item) => item.id === Number(id)
        );

        if (treinadorIndex === -1) {
            return { erro: "Treinador não encontrado" };
        }

        treinador.splice(treinadorIndex, 1);

        return { mensagem: "Treinador removido com sucesso" };
    },
};

module.exports = DeleteTreinadorService;
