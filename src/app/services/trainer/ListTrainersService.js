import TrainerModel from "../../models/trainer/TrainerModel.js";

class ListTrainersService {
  constructor() {}
  list() {
    const trainers = [
      new TrainerModel(
        "5ed061a8-dacb-4b14-af79-7e7abea09b45",
        "Bruno",
        "boliveira@digitalhouse.com",
        "123456",
        25,
        "Cariacica"
      ),
    ];

    return trainers;
  }
  FindTrainer(email, password) {
    const trainer = ListTrainerService.list().find(
      (trainer) => trainer.email === email && trainer.password === password
    );

    return trainer;
  }
}

export default ListTrainersService;
