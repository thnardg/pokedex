import ListAllLegendariesService from "../../services/legendary/ListAllLegendariesService.js";

class ListAllLegendariesController {
  constructor() {}

  list(request, response) {
    const legendaries = ListAllLegendariesService.list();
    response.json(legendaries);
  }
}

export default ListAllLegendariesController;
