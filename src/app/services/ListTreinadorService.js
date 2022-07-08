const TreinadorModel = require('../models/TreinadorModel');

const ListTreinadorService = {
    ListData: () => {
      const treinador = new TreinadorModel(
        1, 
        "AshKetchum", 
        15, 
        "Pallet");

      return [trainer];
    },
    ListTreinadorData: (name) => {
      const TreinadorList = ListTreinadorService.listData();
      const treinador = treinadorList.find((item) => item.name === name);
      if (!name) {
        return { error: "Treinador não encontrado" };
      }
      return treinador;
    },
  };

module.exports = ListTreinadorService;