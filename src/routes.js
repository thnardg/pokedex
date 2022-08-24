import { Router } from "express";
import multer from "multer";

import multerConfig from "./config/multer.js";
import uploadFileController from "./app/controllers/utils/UploadFileController.js";

import legendaryController from "./app/controllers/legendary/LegendaryController.js";
import legendaryValidator from "./middlewares/LegendaryValidator.js";

import trainerController from "./app/controllers/trainer/TrainerController.js";
import trainerValidator from "./middlewares/TrainerValidator.js";

import SessionController from "./app/controllers/trainer/SessionController.js";

const routes = new Router();
const uploadFile = multer({ storage: multerConfig });

routes.post("/legendaries", legendaryValidator, legendaryController.create);
routes.get("/legendaries", legendaryController.ListData);
routes.put("/legendaries/:id", legendaryController.update);
routes.delete("/legendaries/:id", legendaryController.delete);

routes.post("/trainers", trainerValidator, trainerController.create);
routes.get("/trainers", trainerController.listAll);
routes.put("/trainers/:id", trainerController.update);
routes.delete("/trainers/:id", trainerController.delete);

routes.post("/session", SessionController.create);

routes.post("/uploads", uploadFile.single("file"), uploadFileController.storeFile);

export default routes;
