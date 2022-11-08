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
  for (let i = 0; i < data.length; i++) {
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const image = document.createElement('img');
    const movieBanner = document.createElement('img');
    const p = document.getElementById('film-info');
    li1.append(data[i].title);
    li2.append(data[i].original_title);
    li3.append(data[i].original_title_romanised);
    li4.append(data[i].description);
    li5.append(data[i].director);
    li6.append(data[i].producer);
    li7.append(data[i].release_date);
    li8.append(data[i].running_time);
    image.setAttribute("src", data[i].image);
    movieBanner.setAttribute("src", data[i].movie_banner);
    li9.append(image);
    li10.append(movieBanner);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);
    ul.append(li5);
    ul.append(li6);
    ul.append(li7);
    ul.append(li8);
    ul.append(li9);
    ul.append(li10);
    p.append(ul);
  }
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