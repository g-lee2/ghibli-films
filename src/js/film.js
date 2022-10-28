// https://ghibliapi.herokuapp.com/films
// https://ghibliapi.herokuapp.com/films/<id>
// https://ghibliapi.herokuapp.com/people
// https://ghibliapi.herokuapp.com/people/<id>
// https://ghibliapi.herokuapp.com/locations
// https://ghibliapi.herokuapp.com/locations/<id>
// https://ghibliapi.herokuapp.com/species
// https://ghibliapi.herokuapp.com/species/<id>
// https://ghibliapi.herokuapp.com/vehicles
// https://ghibliapi.herokuapp.com/vehicles/<id>
const baseURL = 'https://ghibliapi.herokuapp.com/';

class GetFilms {
  static async getInfo() {
    const filmRequestEndpoint = 'films';
    const urlToFetch = `${baseURL}${filmRequestEndpoint}`;
    try {
      const response = await fetch(urlToFetch);
      const jsonifiedResponse = await Response.json();
      if (!Response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

class GetPeople {
  static async getInfo() {
    const peopleRequestEndpoint = 'people';
    const urlToFetch = `${baseURL}${peopleRequestEndpoint}`;
    try {
      const response = await fetch(urlToFetch);
      const jsonifiedResponse = await Response.json();
      if (!Response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

class GetLocation {
  static async getInfo() {
    const locationRequestEndpoint = 'locations';
    const urlToFetch = `${baseURL}${locationRequestEndpoint}`;
    try {
      const response = await fetch(urlToFetch);
      const jsonifiedResponse = await Response.json();
      if (!Response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

class GetSpecies {
  static async getInfo() {
    const speciesRequestEndpoint = 'species';
    const urlToFetch = `${baseURL}${speciesRequestEndpoint}`;
    try {
      const response = await fetch(urlToFetch);
      const jsonifiedResponse = await Response.json();
      if (!Response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

class GetVehicles {
  static async getInfo() {
    const vehicleRequestEndpoint = 'vehicles';
    const urlToFetch = `${baseURL}${vehicleRequestEndpoint}`;
    try {
      const response = await fetch(urlToFetch);
      const jsonifiedResponse = await Response.json();
      if (!Response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}

export { GetFilms, GetLocation, GetPeople, GetSpecies, GetVehicles };