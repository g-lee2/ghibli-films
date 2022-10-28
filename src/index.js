import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GetFilms, GetLocation, GetPeople, GetSpecies, GetVehicles } from './js/film';

// Business Logic

async function getFilms() {
  const response = await GetFilms.getInfo();
  if (response.main) {
    printFilmElements(response);
  } else {
    printFilmError(response);
  }
}

async function getLocation() {
  const response = await GetLocation.getInfo();
  if (response.main) {
    printLocationElements(response);
  } else {
    printLocationError(response);
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

async function getSpecies() {
  const response = await GetSpecies.getInfo();
  if (response.main) {
    printSpeciesElements(response);
  } else {
    printSpeciesError(response);
  }
}

async function getVehicles() {
  const response = await GetVehicles.getInfo();
  if (response.main) {
    printVehiclesElements(response);
  } else {
    printVehiclesError(response);
  }
}

// UI Logic

function printFilmElements(response) {
  document.querySelector('.result-films').innerText = response;
}

function printFilmError(error) {
  document.querySelector('.result-films').innerText = error;
}

function printLocationElements(response) {
  document.querySelector('.result-location').innerText = response;
}

function printLocationError(error) {
  document.querySelector('.result-location').innerText = error;
}

function printPeopleElements(response) {
  document.querySelector('.result-people').innerText = response;
}

function printPeopleError(error) {
  document.querySelector('.result-people').innerText = error;
}

function printSpeciesElements(response) {
  document.querySelector('.result-species').innerText = response;
}

function printSpeciesError(error) {
  document.querySelector('.result-species').innerText = error;
}

function printVehiclesElements(response) {
  document.querySelector('.result-vehicles').innerText = response;
}

function printVehiclesError(error) {
  document.querySelector('.result-vehicles').innerText = error;
}

function handleFormSubmission() {
  getFilms();
  getLocation();
  getPeople();
  getSpecies();
  getVehicles();
}

window.addEventListener("load", function() {
  handleFormSubmission();
});