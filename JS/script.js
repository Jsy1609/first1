let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Один из последних просмотреных фильмов', "");
let b = prompt('Оценка?', "");
let c = prompt('Один из последних просмотреных фильмов', "");
let d = prompt('Оценка?', "");
personalMovieDB.movie[a]=b; 
personalMovieDB.movie[c]=d; 

console.log(personalMovieDB);
