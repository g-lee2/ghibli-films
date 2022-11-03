import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetFilms from './js/film';
import GetPeople from './js/film';

function getFilms() {
  const response = GetFilms.getInfo();
  if (response == 200) {
    printFilmElements(response.title);
  } else {
    printFilmError(response);
  }
}

function getPeople() {
  const response = GetPeople.getInfo();
  if (response == 200) {
    printPeopleElements(response);
  } else {
    printPeopleError(response);
  }
}


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