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
//const baseURL = 'https://ghibliapi.herokuapp.com/';

export default class GetFilms {
  static async getInfo() {
    try {
      //const filmRequestEndpoint = 'films';
      const response = await fetch ('https://ghibliapi.herokuapp.com/films');
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusTest} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      console.log(jsonifiedResponse[0]);
      return jsonifiedResponse[0];
    } catch(error) {
      return error;
    }
  }
}

// export class GetPeople {
//   static getInfo() {
//     const filmRequestEndpoint = 'people';
//     const urlToFetch = `${baseURL}${filmRequestEndpoint}`;
//     fetch(urlToFetch)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         return data;
//       });
//   }
// }
