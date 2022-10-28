import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GetFilms, GetLocation, GetPeople, GetSpecies, GetVehicles } from './js/film';

// Business Logic

async function getFilms() {
  const response = await GetFilms.getInfo();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function getLocation() {
  const response = await GetLocation.getInfo();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function getPeople() {
  const response = await GetPeople.getInfo();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function getSpecies() {
  const response = await GetSpecies.getInfo();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function getVehicles() {
  const response = await GetVehicles.getInfo();
  if (response.main) {
    printElements(response);
  } else {
    printError(response);
  }
}

// UI Logic

function printElements(response) {
  document.querySelector('.result').innerText = response;
}

function printError(error) {
  document.querySelector('.result').innerText = error;
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