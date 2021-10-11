//let name = prompt("naame", "");
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , "");
let personalMovieDB ={
    count :'Сколько фильмов вы уже посмотрели?',
    movies : {},
    actors : {},
    genres :[],
    privat : false
};
let a=prompt('Один из последних просмотренных фильмов?' , "");
let b =prompt('На сколько оцените его?', "");
let a1=prompt('Один из последних просмотренных фильмов?' , "");
let b2 =prompt('На сколько оцените его?', "");
personalMovieDB.movies [a]=b;
personalMovieDB.movies [a1]=b2;

console.log (personalMovieDB);