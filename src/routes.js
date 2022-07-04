const Router = require('express');

const controller = require('./app/controllers/LegendaryController');
const uploadFileController = require('./app/controllers/UploadFileController');

const app = require('./app');

const routes = new Router();

routes.get('/legendaries', controller.ListData);
routes.post('/legendaries', controller.create);
routes.put('/legendaries/:id', controller.update);
routes.delete('/legendaries/:id', controller.delete);
routes.post('/uploads', app.uploadFile.single('file'), uploadFileController.storeFile);

module.exports = routes;