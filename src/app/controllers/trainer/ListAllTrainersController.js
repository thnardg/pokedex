import ListTrainersService from "../../services/trainer/ListTrainersService.js";

class ListAllTrainersController {
  constructor() {}

  list(request, response) {
    const trainers = ListTrainersService.list();

    return response.send(trainers);
  }
}

export default ListAllTrainersController;
