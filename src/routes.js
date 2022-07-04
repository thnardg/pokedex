const Router = require('express');

const controller = require('./app/controllers/LegendaryController');

const routes = new Router();

routes.get('/legendaries', controller.ListData);
routes.get('/legendaries', controller.index);
routes.post('/legendaries', controller.create);
routes.put('/legendaries/:id', controller.update);

module.exports = routes;