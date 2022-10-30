import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GetFilms, GetPeople } from './js/film';

// Business Logic

async function getFilms() {
  const response = await GetFilms.getInfo();
  if (response.main) {
    printFilmElements(response);
  } else {
    printFilmError(response);
  }
}

async function getPeople() {
  const response = await GetPeople.getInfo();
  if (response.main) {
    printPeopleElements(response);
  } else {
    printPeopleError(response);
  }
}

// UI Logic

function printFilmElements(response) {
  document.querySelector('.result-films').innerText = response;
}

function printFilmError(error) {
  document.querySelector('.result-films').innerText = error;
}

function printPeopleElements(response) {
  document.querySelector('.result-people').innerText = response;
}

function printPeopleError(error) {
  document.querySelector('.result-people').innerText = error;
}

function handleFormSubmission() {
  getFilms();
  getPeople();
}

window.addEventListener("load", function() {
  handleFormSubmission();
});