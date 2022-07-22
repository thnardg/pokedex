const Router = require("express");
const routes = new Router();

const multer = require("multer");
const multerConfig = require("./config/multer");
const uploadFile = multer({ storage: multerConfig });
const uploadFileController = require("./app/controllers/utils/UploadFileController");

const legendaryController = require("./app/controllers/legendary/LegendaryController");
const legendaryValidator = require("./middlewares/LegendaryValidator");

const trainerController = require("./app/controllers/trainer/TrainerController");
const trainerValitador = require("./middlewares/TrainerValidator");

routes.post("/legendaries", legendaryValidator, legendaryController.create);
routes.get("/legendaries", legendaryController.ListData);
routes.put("/legendaries/:id", legendaryController.update);
routes.delete("/legendaries/:id", legendaryController.delete);

routes.post("/trainers", trainerValitador, trainerController.create);
routes.get("/trainers", trainerController.listAll);
routes.put("/trainers/:id", trainerController.update);
routes.delete("/trainers/:id", trainerController.delete);

routes.post("/session", SessionController.create);

routes.post(
  "/uploads",
  uploadFile.single("file"),
  uploadFileController.storeFile
);

module.exports = routes;
