import { pokeApi } from "../../../config/axios";

export default class ListRemotePokemonsController {
  constructor() {}

  async index(request, response) {
    const { offset, limit } = request.query;

    try {
      const result = await pokeApi.get(
        `/pokemon?offset=${offset}&limit=${limit}`
      );

      return response.status(result.status).json(result.data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async show(request, response) {
    const { name } = request.params;

    try {
      const result = await pokeApi.get(`/pokemon/${name}`);

      return response.status(result.status).json(result.data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
