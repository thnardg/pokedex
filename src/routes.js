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

routes.get("/legendaries", (req, res) =>
  listAllLegendariesController.list(req, res)
);
routes.get("/legendaries", (req, res) =>
  listLegendaryController.list(req, res)
);
routes.post("/legendaries", legendaryValidator, (req, res) =>
  createLegendaryController.create(req, res)
);
routes.put("/legendaries/:id", (req, res) =>
  updateLegendaryController.update(req, res)
);
routes.delete("/legendaries/:id", (req, res) =>
  deleteLegendaryController.delete(req, res)
);

routes.get("/trainers", (req, res) => listAllTrainersController.list(req, res));
routes.get("/trainers", (req, res) => listTrainerController.list(req, res));
routes.post("/trainers", trainerValidator, (req, res) =>
  createTrainerController.create(req, res)
);
routes.put("/trainers/:id", (req, res) =>
  updateTrainerController.update(req, res)
);
routes.delete("/trainers/:id", (req, res) =>
  deleteTrainerController.delete(req, res)
);

routes.post("/session", (req, res) => SessionController.create(req, res));
routes.post("/uploads", uploadFile.single("file"), (req, res) =>
  uploadFileController.storeFile(req, res)
);

export default routes;
