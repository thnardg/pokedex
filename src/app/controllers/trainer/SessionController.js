const jwt = require("jsonwebtoken");
const CreateTrainerService = require("../../services/trainer/CreateTrainerService");
const controller = require("./TrainerController");

const SessionController = {
  create(request, response) {
    const { email, password } = request.body;

    const trainer = ListTrainerService.listAll();

    const trainerIndex = trainer.findIndex((t) => t.email === email);

    if (trainerIndex < 0) {
      return response.status(401).json({ error: "Trainer not found" });
    }

    if (trainer[trainerIndex].password !== password) {
      return response.status(401).json({ error: "Invalid password" });
    }

    const { id, name } = trainer;

    return response.json({
      trainer: {
        id,
        name,
        email,
      },
    });
  },
};

module.exports = SessionController;
