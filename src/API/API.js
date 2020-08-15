import entities from './entities.json'; 

class API {
  constructor() {
    this.apiUrl = new URL('https://rickandmortyapi.com/api/');
  }

  async get(route = '/') {
    let response
    try {
      const url = new URL(route, this.apiUrl);
      response = await fetch(url);
    } catch (e) {
      console.log(`Error while retrieving info for route ${route}`, e);
    }

    return response && response.json();
  }

  async getEntity(type, id) {
    if (entities.indexOf(type) === -1) {
      throw new Error("Invalid entity");
    }

    const route = id ? `${type}/${id}` : type;
    const data = await this.get(route);

    return data;
  }
}

export default new API();