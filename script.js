let numberOfFilms = prompt('сколько фильиов вы уже просмотрели?', 0);
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat:false

};

let asq = prompt("один из последних фильмов?", '');
let movieRating = prompt("На сколько вы его оцените?", '');

personalMovieDB[asq] = movieRating ;
console.log(personalMovieDB);