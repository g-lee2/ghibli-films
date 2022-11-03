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

export default class GetFilms {
  static getInfo() {
    const filmRequestEndpoint = 'films';
    const urlToFetch = `${baseURL}${filmRequestEndpoint}`;
    fetch(urlToFetch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}

export class GetPeople {
  static getInfo() {
    const filmRequestEndpoint = 'people';
    const urlToFetch = `${baseURL}${filmRequestEndpoint}`;
    fetch(urlToFetch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}
