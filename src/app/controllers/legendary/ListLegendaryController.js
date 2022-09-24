import ListLegendariesService from "../../services/legendary/ListLegendariesService";

export default class ListLegendariesController {
  constructor() {
    this.service = new ListLegendariesService();
  }

  async index(request, response) {
    const { name } = request.query;

    const legendaries = await this.service.listAll(name);

    response.json(legendaries);
  }
}
