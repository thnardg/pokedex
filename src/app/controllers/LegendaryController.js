const LegendariesService = require('../services/LegendariesService')

const controller = {
    index: (request, response) => {
        const listLegendaries = LegendariesService.listLegendariesService();
        
        response.json(listLegendaries);
    }
}

module.exports = controller;