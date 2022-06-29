const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendariesService: () => {
        const pokemon = new LegendaryModel(
            1,
            'MewTwo',
            'Descrição',
            'Pokemon'
        )
        const pokemon2 = new LegendaryModel(
            2,
            'Pikachu',
            'Descrição',
            'Pokemon'
        )

        return [pokemon, pokemon2];
    }
}

module.exports = LegendariesService;