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
    li1.append('Title: ' + data[i].title);
    li2.append('Japanese Title: ' + data[i].original_title);
    li3.append('Romanised Title: ' + data[i].original_title_romanised);
    li4.append('Movie Description: ' + data[i].description);
    li5.append('Director: ' + data[i].director);
    li6.append('Producer: ' + data[i].producer);
    li7.append('Release Date: ' + data[i].release_date);
    li8.append('Running Time: ' + data[i].running_time + ' minutes');
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

function handleDirectorSelection() {
  const userSelection = document.getElementById('director-names').value;
  if (userSelection == 'Hayao-Miyazaki') {
    
  } else if (userSelection == "Isao-Takahata") {
    
  } else if (userSelection == "Yoshifumi-Kondō") {

  } else if (userSelection == "Gorō-Miyazaki") {

  } else if (userSelection == "Hiromasa-Yonebayashi") {

  } else {

  }
}

function printFilmError(error) {
  document.getElementsByClassName('film-title').innerText = error;
}

function handleFormSubmission(event) {
  event.preventDefault();
  getFilms();
  document.getElementById('button').setAttribute('class', 'hidden');
  // getPeople();
}

window.addEventListener("load", function() {
  document.getElementById('button').removeAttribute('class');
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
  document.getElementById('button').addEventListener('submit', handleDirectorSelection);
});