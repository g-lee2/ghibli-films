class FilmInfo {
  constructor(film) {
    this.id = film.id;
    this.title = film.title;
    this.originalTitle = film.original_title;
    this.originalTitleRomanised = film.original_title_romanised;
    this.image = film.image;
    this.description = film.description;
    this.director = film.director;
    this.producer = film.producer;
    this.releaseDate = film.release_date;
    this.runningTime = film.running_time;
  }
}

class PeopleInfo {
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.gender = person.gender;
    this.age = person.age;
    this.eyeColor = person.eye_color;
    this.hairColor = person.hair_color;
    this.film = person.films;
  } 
}
