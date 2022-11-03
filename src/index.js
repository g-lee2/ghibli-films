import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetFilms from './js/film';
//import GetPeople from './js/film';

async function getFilms() {
  const response = await GetFilms.getInfo();
  if (response) {
    printFilmElements(response);
  } else {
    printFilmError(response);
  }
}

// function getPeople() {
//   const response = GetPeople.getInfo();
//   if (response == 200) {
//     printPeopleElements(response);
//   } else {
//     printPeopleError(response);
//   }
// }

function printFilmElements(data) {
  document.getElementById('film-title').innerHTML = data.title; 
  document.getElementById('film-original-title').innerHTML = data.original_title;
  document.getElementById('film-romanised-title').innerHTML = data.original_title_romanised;
  document.getElementById('film-image').innerHTML = data.image;
  document.getElementById('film-description').innerHTML = data.description;
  document.getElementById('film-director').innerHTML = data.director;
  document.getElementById('film-producer').innerHTML = data.producer;
  document.getElementById('film-release-date').innerHTML = data.release_date;
  document.getElementById('film-running-time').innerHTML = data.running_time;
}

function printFilmError(error) {
  document.getElementsByClassName('film-title').innerText = error;
}

// function printPeopleElements(data) {
//   document.querySelector('.result-people').innerText = response;
// }

// function printPeopleError(error) {
//   document.querySelector('.result-people').innerText = error;
// }

function handleFormSubmission(event) {
  event.preventDefault();
  getFilms();
  // getPeople();
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});