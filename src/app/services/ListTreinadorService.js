const TreinadorModel = require('../models/TreinadorModel');

const ListTreinadorService = {
    ListData: () => {
    const treinador = new TreinadorModel (
      1, 
      "AshKetchum", 
      15, 
      "Pallet"
    );
    return [treinador];
    },

    ListTreinadorData: (name) => {
      const TreinadorList = ListTreinadorService.ListData();
      const treinador = TreinadorList.find((item) => item.name === name);
      if (!name) {
        return { error: "Treinador não encontrado" };
      }
      return treinador;
    },
};

module.exports = ListTreinadorService;