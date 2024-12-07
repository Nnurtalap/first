'use strict'
// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;
    

//     case 2:
//     case 3:       
//         alert('Вы ввели число 2, а может и 3');
//         break;
// } 
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// function multiplyNumeric(){
//  for( let key in menu){
//   if(typeof menu[key] === 'number'){
//     menu[key]*=2;
//     alert(menu[key]);
//   }
//    }
//     }

// до вызова функции

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() { // показывает текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };
// ladder.up().up().down().showStep().down().showStep();



// function Calculator(){
//   this.read = function() {
//     this.a = +prompt("Введите первое число:", "1");
//     this.b = +prompt("Введите второе число:", "1");
//   }
//   this.sum = function(){
//   return this.a + this.b
// }

//   this.mul = function(){
//     return this.a * this.b
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(b){
//   this.value = b
//    this.read = function(){
//     this.value +=  +prompt('f', 0)
    
//    } 

   
// }
// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// let user = ['Ваня', 'Иштван', ];
// user.push('ola');
// user[1] = "Петя";
// user.shift();
// console.log(user);
// user.unshift("Маша" , "Паша");

// console.log(user);
// // Удаляем элемент и возвращаем его в переменную
// let arrTwo = ['Ваня', 'Иштван', 'Оля',];
// let removed = arrTwo.splice(1, 1);
// console.log(removed);
// // Заменяем элементы


// Чему равен previousValue в начале работы метода?




// let as = [1,2,3,4,5]
// console.log(as)
// as.push('12')
// console.log(as)
// as.shift(12)
// console.log(as)
// as.unshift(12,2345)
// console.log(as)
// as.splice(0,0 , 'asd ', 'asds');
// console.log(as)
// as.forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`)
// });

// for(let i =0; i<as.length; i++){
//     console.log(as[i])
// }

// for(let frur of as){
//     console.log(frur)
// }

// for(let r in as){
//     console.log(as[r])
// }

// function sumInput(){
//     let d = [];

//     while(true) {
//     let s = prompt('f' , 0);
//     if( s === '' || s=== null || !isFinite(s)) break;
//     d.push(+s);
//     }
//     for( let f of d){
//         d +=f
//     }
//     return(d)
// }
// let nurta = {
//     nurta: "navigator",
// }

// nurta['namee'] = 'nurtalap';
// console.log(nurta)

// let nurtalap = [1,23,34,45]
// nurtalap[5] = 12;
// console.log(nurtalap)

// let as = 8
// console.log(as++)
// Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for ( let i = 1; i <= 10; i++){
//     console.log(i)
    
// }}

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let j = 20; j > 10 ; j--){
//         if (j === 13 ) {
//             break;
//         }
//         console.log(j)
//     }
    
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//   for ( let i = 2; i <= 10; i++){
//       if (i % 2 === 0){
//           console.log(i);
//       }
//   }
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     // Пишем решение вот тут
    
//       let i = 2;
//     while ( i <= 16){
//          if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//         i++
//     }
    
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i <= 10 ; i++){
//         arrayOfNumbers[i] = i
//     }
    
//     // Не трогаем
//     return arrayOfNumbers;
// }
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";

    
// }
// console.log(result); 
// // Выводим текущую строку






//  function showFirstMassage(text) {
//     console.log(text);
//     let num = 20;

//  }

//  showFirstMassage('hello world');


//  function calc( a , b){
//     return (a + b);
//  }
//  console.log(calc(4 , 5))

//  const loger = function() {

//  };

//  const calk = ( a, b) => a+ b;


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     console.log(str);
// }

// getMathResult(3, 5);

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('сколько фильиов вы уже просмотрели?', '');

//     while ( numberOfFilms == ''  || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt('сколько фильиов вы уже просмотрели?', '');

//     }
// }

// start();

// let personalMovieDB = {
//          count: numberOfFilms,

//         movies:{},
//          actors:{},
//          genres: [],
//          privat:false

// };

// function rememberMyFilms(){
    
// for ( let i =0; i <2; i++){
//     let a = prompt("один из последних фильмов?", '');

//     let b = prompt("На сколько вы его оцените?", '');

//     if ( a != '' && a != null && b != null && b != '' && a.length < 50){
//         personalMovieDB[a] = b;
//         console.log('done')
//     } else {
//         console.log("error")
//         i--;
//     }

// }
// }
// rememberMyFilms();

// function detect(){
//     if(personalMovieDB.count < 10){
//         console.log('1')
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30){
//         console.log('2')
//     } else if (personalMovieDB.count >= 30){
//         console.log('3')
//     } else{
//         console.log('error')
//     }
    
// }

// detect()


// function showMyDB(hidden) {
//     if( !hidden){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);




// function writeYourGenres(num) {
//     for(let i = 0; i < num; i++){
//        let as = prompt(`Ваш любимый жанр под номером ${i + 1}` , '');
//         personalMovieDB.genres[i] = as;
//     }
    
// }
// writeYourGenres(3);


// function calculateVolumeAndArea(num) {
//     let a = num * num * num;
//     let b = 6 * (num * num);
//     if ( num == '' || num == null || isNaN(num) ||typeof(num) === "string" || num < 0 ||  num % 1 !== 0){
//         console.log('При вычислении произошла ошибка!');
//     } else{
//          let bb = (`Объем куба: ${a}, площадь всей поверхности: ${b}`);
//         console.log(bb);

//     }

    
// }
// calculateVolumeAndArea(-15);

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// function getTimeFromMinutes(num) {
//     if ( num != 'number' || num < 0  || !number.isInteger(num)){
//         return "Ошибка, проверьте данные";
//     }

//     let number = parseInt(num / 60);
//     let minutes =( (num / 60) - number ) * 60;

//     switch (number){
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2: 
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:  
//             hoursStr = 'часов';
//     }
//     return ` Это ${number} ${hourStr} и ${minutes} минут`;
//     }
// getTimeFromMinutes(600)

// function getTimeFromMinutes(num) {
//     if ( typeof(num) !== 'number' || num < 0  || !Number.isInteger(num)){
//         return "Ошибка, проверьте данные";
//     }

//     let number = Math.floor(num / 60);
//     let minutes =num % 60;

//     let = 'hoursStr'
//     switch (number){
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2: 
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:  
//             hoursStr = 'часов';
//     }
//     return ` Это ${number} ${hourStr} и ${minutes} минут`;
//     }
// getTimeFromMinutes(600)



// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

// function findMaxNumber( a){
//     if( a == null || isNaN(a) || a == ''){
//         return ''
//     } 
//     let result = '';
//     let first = 0;
//     let second = 1;

// for (let i = 0; i < num; i++){
//     if(i+1 === num){
//         result += `${first}`
//     }else { // Если это не последнее число
//         result += `${first} `; // Добавляем число с пробелом
//     }
// let third = first + second;
// first = second;
// second = third;
// }
// return result;
// }




// let r = 5;
// for( let i = 0; i < r ; i++ ){
//     let c = '';
//     for(let j =0 ; j<r-i -1; j++){
//         c += " "
        

//     }
        
//     for ( let d = 0; d< 2 * i + 1 ; d++){
//         c=  c +'*';
    
//     }
//     console.log(c)

// }

// function fib(num){
//     let first = 0;
//     let second = 1;
//     let result = '';
//     for( let i =0;i < num ; i++){
//         if(i +1 === num){
//             result += `${first
//             }`
//         }else{
//               result += `${first} `
//         }
//         let third = first + second;
//         first =+ second;
//         second= third
//     }
   
// console.log(result)
// }
// fib(10)


// function call(learn , callbak){
//     console.log(`i learn ${learn}`);
//     callbak();
// }
// function nor(){
//     console.log('im callbak');
// }
// call('js', nor)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
    
}
