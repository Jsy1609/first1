let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', "");
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};
let a = "";
let i = 1;
function rememberMyFilms() {

    while (i <= 2) {
        do {
            a = prompt('Один из последних просмотреных фильмов', "");
            if (a == "") {
                
                continue;
            } /* else if (str.length(a) > 50) {
                continue;
            } */;
        } while (a == "");
        
        do {
            b = prompt('Оценка?', "");
            if (b == "") {
                console.log('Вы не ввели Оценкy');
                continue;
            };
        } while (b == "");
       
        personalMovieDB.movie[a]=b;
        i++;
    };
}

rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } 
}

function writeYourGenres() {
    for (let n = 1; n <= 3; n++) {
    personalMovieDB.genres[n-1] = prompt(`Ваш любимый жанр под номером ${n}`);
    };
}


writeYourGenres();

showMyDB();