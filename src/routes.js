import Router from "express";
import multer from "multer";
import multerConfig from "./config/multer.js";

import uploadFileController from "./app/controllers/utils/UploadFileController.js";
import SessionController from "./app/controllers/auth/SessionController.js";

import legendaryValidator from "./middlewares/LegendaryValidator.js";
import trainerValidator from "./middlewares/TrainerValidator.js";

import ListAllTrainersController from "./app/controllers/trainer/ListAllTrainersController.js";
import ListTrainerController from "./app/controllers/trainer/ListTrainerController.js";
import CreateTrainerController from "./app/controllers/trainer/CreateTrainerController.js";
import UpdateTrainerController from "./app/controllers/trainer/UpdateTrainerController.js";
import DeleteTrainerController from "./app/controllers/trainer/DeleteTrainerController.js";

import ListAllLegendariesController from "./app/controllers/legendary/ListAllLegendariesController.js";
import ListLegendaryController from "./app/controllers/legendary/ListLegendaryController.js";
import CreateLegendaryController from "./app/controllers/legendary/CreateLegendaryController.js";
import UpdateLegendaryController from "./app/controllers/legendary/UpdateLegendaryController.js";
import DeleteLegendaryController from "./app/controllers/legendary/DeleteLegendaryController.js";

const routes = new Router();
const uploadFile = multer({ storage: multerConfig });

const listAllTrainersController = new ListAllTrainersController();
const listTrainerController = new ListTrainerController();
const createTrainerController = new CreateTrainerController();
const updateTrainerController = new UpdateTrainerController();
const deleteTrainerController = new DeleteTrainerController();

const listAllLegendariesController = new ListAllLegendariesController();
const listLegendaryController = new ListLegendaryController();
const createLegendaryController = new CreateLegendaryController();
const updateLegendaryController = new UpdateLegendaryController();
const deleteLegendaryController = new DeleteLegendaryController();

routes.get("/legendaries", listAllLegendariesController.list);
routes.get("/legendaries", listLegendaryController.list);
routes.post("/legendaries", legendaryValidator, createLegendaryController.create);
routes.put("/legendaries/:id", updateLegendaryController.update);
routes.delete("/legendaries/:id", deleteLegendaryController.delete);

routes.get("/trainers", listAllTrainersController.list);
routes.get("/trainers", listTrainerController.list);
routes.post("/trainers", trainerValidator, createTrainerController.create);
routes.put("/trainers/:id", updateTrainerController.update);
routes.delete("/trainers/:id", deleteTrainerController.delete);

routes.post("/session", SessionController.create);
routes.post("/uploads", uploadFile.single("file"), uploadFileController.storeFile);

export default routes;
