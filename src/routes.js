const Router = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");
const legendaryValidator = require("./middlewares/LegendaryValidator");
const treinerValidator = require("./middlewares/TreinerValidator");

const controller = require("./app/controllers/LegendaryController");
const uploadFileController = require("./app/controllers/UploadFileController");

const treinadorController = require("./app/controllers/TreinadorController");

const uploadFile = multer({ storage: multerConfig });

const routes = new Router();

routes.get("/legendaries", controller.ListData);
routes.post("/legendaries", legendaryValidator, controller.create);
routes.put("/legendaries/:id", controller.update);
routes.delete("/legendaries/:id", controller.delete);
routes.post(
    "/uploads",
    uploadFile.single("file"),
    uploadFileController.storeFile
);

routes.get("/treinador", treinadorController.ListData);
routes.post("/treinador", treinerValidator, treinadorController.create);
routes.put("/treinador/:id", treinadorController.update);
routes.delete("/treinador/:id", treinadorController.delete);

module.exports = routes;
