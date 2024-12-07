// let numberOfFilms = prompt('сколько фильиов вы уже просмотрели?', 0);
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres: [],
//     privat:false

// };

// let asq = prompt("один из последних фильмов?", '');
// let movieRating = prompt("На сколько вы его оцените?", '');

// personalMovieDB[asq] = movieRating ;
// console.log(personalMovieDB);


// (num == 50) ? console.log('ok'): console.log("error");

// let num = 50;

// switch(num) {
//     case 49: 
//         console.log("no");
//         break;
//     case 100: 
//         console.log("no");
//         break;
//     case 50: 
//         console.log("yes");
//         break;
//     default:
//         console.log('nononono')
// }

// const hamburger = 3;
// const free = 3;
// const cola = 0;
// const nuggets = 2;
// if (hamburger === 3 &&  cola === 2 || free === 3 && nuggets) {
//     cinsole.log('i ate')
// }

// console.log( !1 && 2 || !3 );

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(num);
//     num++
// }
// while (num <55);

// for (let i = 1; i < 8 ; i++ ) {
//     console.log(i)
// }

// for ( let i = 0; i < 3; i++ ) {
//     console.log(i);
//     for ( let j = 0; j < 3; j++ ) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j <i; j++){
//         result += "*";

//     }


//     result += '\n'
// }


// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for ( let i = 1; i <= 10; i++){
    console.log(i)
    
}}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let j = 20; j > 10 ; j--){
        if (j === 13 ) {
            break;
        }
        console.log(j)
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
  for ( let i = 2; i <= 10; i++){
      if (i % 2 === 0){
          console.log(i);
      }
  }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    
      let i = 2;
    while ( i <= 16){
         if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
        i++
    }
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10 ; i++){
        arrayOfNumbers[i] = i
    }
    
    // Не трогаем
    return arrayOfNumbers;
}