// 'use strict'
// // const number = +prompt('Введите число между 0 и 3', '');
// // switch(number){
// //     case 0:
// //         alert('Вы ввели число 0');
// //         break;

// //     case 1:
// //         alert('Вы ввели число 1');
// //         break;
    

// //     case 2:
// //     case 3:       
// //         alert('Вы ввели число 2, а может и 3');
// //         break;
// // } 
// // let menu = {
// //   width: 200,
// //   height: 300,
// //   title: "My menu"
// // };

// // multiplyNumeric(menu);
// // function multiplyNumeric(){
// //  for( let key in menu){
// //   if(typeof menu[key] === 'number'){
// //     menu[key]*=2;
// //     alert(menu[key]);
// //   }
// //    }
// //     }

// // до вызова функции

// // let ladder = {
// //   step: 0,
// //   up() {
// //     this.step++;
// //     return this;
// //   },
// //   down() {
// //     this.step--;
// //     return this;
// //   },
// //   showStep() { // показывает текущую ступеньку
// //     alert( this.step );
// //     return this;
// //   }
// // };
// // ladder.up().up().down().showStep().down().showStep();



// // function Calculator(){
// //   this.read = function() {
// //     this.a = +prompt("Введите первое число:", "1");
// //     this.b = +prompt("Введите второе число:", "1");
// //   }
// //   this.sum = function(){
// //   return this.a + this.b
// // }

// //   this.mul = function(){
// //     return this.a * this.b
// //   }
// // }

// // let calculator = new Calculator();
// // calculator.read();

// // alert( "Sum=" + calculator.sum() );
// // alert( "Mul=" + calculator.mul() );



// // function Accumulator(b){
// //   this.value = b
// //    this.read = function(){
// //     this.value +=  +prompt('f', 0)
    
// //    } 

   
// // }
// // let accumulator = new Accumulator(1); // начальное значение 1

// // accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// // accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// // alert(accumulator.value); // выведет сумму этих значений

// // let user = ['Ваня', 'Иштван', ];
// // user.push('ola');
// // user[1] = "Петя";
// // user.shift();
// // console.log(user);
// // user.unshift("Маша" , "Паша");

// // console.log(user);
// // // Удаляем элемент и возвращаем его в переменную
// // let arrTwo = ['Ваня', 'Иштван', 'Оля',];
// // let removed = arrTwo.splice(1, 1);
// // console.log(removed);
// // // Заменяем элементы


// // Чему равен previousValue в начале работы метода?




// // let as = [1,2,3,4,5]
// // console.log(as)
// // as.push('12')
// // console.log(as)
// // as.shift(12)
// // console.log(as)
// // as.unshift(12,2345)
// // console.log(as)
// // as.splice(0,0 , 'asd ', 'asds');
// // console.log(as)
// // as.forEach((item, index, array) => {
// //     alert(`У ${item} индекс ${index} в ${array}`)
// // });

// // for(let i =0; i<as.length; i++){
// //     console.log(as[i])
// // }

// // for(let frur of as){
// //     console.log(frur)
// // }

// // for(let r in as){
// //     console.log(as[r])
// // }

// // function sumInput(){
// //     let d = [];

// //     while(true) {
// //     let s = prompt('f' , 0);
// //     if( s === '' || s=== null || !isFinite(s)) break;
// //     d.push(+s);
// //     }
// //     for( let f of d){
// //         d +=f
// //     }
// //     return(d)
// // }
// // let nurta = {
// //     nurta: "navigator",
// // }

// // nurta['namee'] = 'nurtalap';
// // console.log(nurta)

// // let nurtalap = [1,23,34,45]
// // nurtalap[5] = 12;
// // console.log(nurtalap)

// // let as = 8
// // console.log(as++)
// // Место для первой задачи
// // function firstTask() {
// //     // Пишем решение вот тут
// //     for ( let i = 1; i <= 10; i++){
// //     console.log(i)
    
// // }}

// // // Место для второй задачи
// // function secondTask() {
// //     // Пишем решение вот тут
// //     for (let j = 20; j > 10 ; j--){
// //         if (j === 13 ) {
// //             break;
// //         }
// //         console.log(j)
// //     }
    
// // }

// // // Место для третьей задачи
// // function thirdTask() {
// //     // Пишем решение вот тут
// //   for ( let i = 2; i <= 10; i++){
// //       if (i % 2 === 0){
// //           console.log(i);
// //       }
// //   }
// // }

// // // Место для четвертой задачи

// // // Цикл, который нужно переписать:

// // // for (let i = 2; i <= 16; i++) {
// // //     if (i % 2 === 0) {
// // //         continue;
// // //     } else {
// // //         console.log(i);
// // //     }
// // // }

// // function fourthTask() {
// //     // Пишем решение вот тут
    
// //       let i = 2;
// //     while ( i <= 16){
// //          if (i % 2 === 0) {
// //          continue;
// //      } else {
// //          console.log(i);
// //      }
// //         i++
// //     }
    
// // }

// // // Место для пятой задачи

// // function fifthTask() {
// //     const arrayOfNumbers = [];

// //     // Пишем решение вот тут
// //     for (let i = 5; i <= 10 ; i++){
// //         arrayOfNumbers[i] = i
// //     }
    
// //     // Не трогаем
// //     return arrayOfNumbers;
// // }
// // const lines = 5;
// // let result = '';
// // // Проверяется именно переменная result, формируйте строку в ней
// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";

    
// // }
// // console.log(result); 
// // // Выводим текущую строку






// //  function showFirstMassage(text) {
// //     console.log(text);
// //     let num = 20;

// //  }

// //  showFirstMassage('hello world');


// //  function calc( a , b){
// //     return (a + b);
// //  }
// //  console.log(calc(4 , 5))

// //  const loger = function() {

// //  };

// //  const calk = ( a, b) => a+ b;


// // function getMathResult(num, times) {
// //     if (typeof(times) !== 'number' || times <= 0) {
// //         return num;
// //     }

// //     let str = '';

// //     for (let i = 1; i <= times; i++) {
// //         if (i === times) {
// //             str += `${num * i}`;
// //             // Тут без черточек в конце
// //         } else {
// //             str += `${num * i}---`;
// //             // Это тоже самое, что и
// //             // str = str + num * i + "---"
// //         }
// //     }

// //     console.log(str);
// // }

// // getMathResult(3, 5);

// // let numberOfFilms;



// // let personalMovieDB = {
// //          count: numberOfFilms,

// //         movies:{},
// //          actors:{},
// //          genres: [],
// //          privat:false

// // };

// // function rememberMyFilms(){
    
// // for ( let i =0; i <2; i++){
// //     let a = prompt("один из последних фильмов?", '');

// //     let b = prompt("На сколько вы его оцените?", '');

// //     if ( a != '' && a != null && b != null && b != '' && a.length < 50){
// //         personalMovieDB[a] = b;
// //         console.log('done')
// //     } else {
// //         console.log("error")
// //         i--;
// //     }

// // }
// // }
// // rememberMyFilms();



// // detect()


// // function showMyDB(hidden) {
// //     if( !hidden){
// //         console.log(personalMovieDB);
// //     }
// // }
// // showMyDB(personalMovieDB.privat);





// // writeYourGenres(3);


// // function calculateVolumeAndArea(num) {
// //     let a = num * num * num;
// //     let b = 6 * (num * num);
// //     if ( num == '' || num == null || isNaN(num) ||typeof(num) === "string" || num < 0 ||  num % 1 !== 0){
// //         console.log('При вычислении произошла ошибка!');
// //     } else{
// //          let bb = (`Объем куба: ${a}, площадь всей поверхности: ${b}`);
// //         console.log(bb);

// //     }

    
// // }
// // calculateVolumeAndArea(-15);

// // function calculateVolumeAndArea(length) {
// //     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
// //         return "При вычислении произошла ошибка";
// //     }

// //     let volume = 0,
// //         area = 0;

// //     volume = length * length * length;
// //     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
// //     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
// //     area = 6 * (length * length);

// //     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// // }

// // calculateVolumeAndArea(5);

// // function getTimeFromMinutes(num) {
// //     if ( num != 'number' || num < 0  || !number.isInteger(num)){
// //         return "Ошибка, проверьте данные";
// //     }

// //     let number = parseInt(num / 60);
// //     let minutes =( (num / 60) - number ) * 60;

// //     switch (number){
// //         case 0:
// //             hoursStr = 'часов';
// //             break;
// //         case 1:
// //             hoursStr = 'час';
// //             break;
// //         case 2: 
// //         case 3:
// //         case 4:
// //             hoursStr = 'часа';
// //             break;
// //         default:  
// //             hoursStr = 'часов';
// //     }
// //     return ` Это ${number} ${hourStr} и ${minutes} минут`;
// //     }
// // getTimeFromMinutes(600)

// // function getTimeFromMinutes(num) {
// //     if ( typeof(num) !== 'number' || num < 0  || !Number.isInteger(num)){
// //         return "Ошибка, проверьте данные";
// //     }

// //     let number = Math.floor(num / 60);
// //     let minutes =num % 60;

// //     let = 'hoursStr'
// //     switch (number){
// //         case 0:
// //             hoursStr = 'часов';
// //             break;
// //         case 1:
// //             hoursStr = 'час';
// //             break;
// //         case 2: 
// //         case 3:
// //         case 4:
// //             hoursStr = 'часа';
// //             break;
// //         default:  
// //             hoursStr = 'часов';
// //     }
// //     return ` Это ${number} ${hourStr} и ${minutes} минут`;
// //     }
// // getTimeFromMinutes(600)



// // function getTimeFromMinutes(minutesTotal) {
// //     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
// //         return "Ошибка, проверьте данные";
// //     }

// //     const hours = Math.floor(minutesTotal / 60);
// //     const minutes = minutesTotal % 60;

// //     let hoursStr = '';

// //     switch (hours) {
// //         case 0: 
// //             hoursStr = 'часов';
// //             break;
// //         case 1:
// //             hoursStr = 'час';
// //             break;
// //         case 2:
// //         case 3:
// //         case 4:
// //             hoursStr = 'часа';
// //             break;
// //         default:
// //             hoursStr = 'часов';
// //     }

// //     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// // }

// // getTimeFromMinutes(180)

// // function findMaxNumber( a){
// //     if( a == null || isNaN(a) || a == ''){
// //         return ''
// //     } 
// //     let result = '';
// //     let first = 0;
// //     let second = 1;

// // for (let i = 0; i < num; i++){
// //     if(i+1 === num){
// //         result += `${first}`
// //     }else { // Если это не последнее число
// //         result += `${first} `; // Добавляем число с пробелом
// //     }
// // let third = first + second;
// // first = second;
// // second = third;
// // }
// // return result;
// // }




// // let r = 5;
// // for( let i = 0; i < r ; i++ ){
// //     let c = '';
// //     for(let j =0 ; j<r-i -1; j++){
// //         c += " "
        

// //     }
        
// //     for ( let d = 0; d< 2 * i + 1 ; d++){
// //         c=  c +'*';
    
// //     }
// //     console.log(c)

// // }

// // function fib(num){
// //     let first = 0;
// //     let second = 1;
// //     let result = '';
// //     for( let i =0;i < num ; i++){
// //         if(i +1 === num){
// //             result += `${first
// //             }`
// //         }else{
// //               result += `${first} `
// //         }
// //         let third = first + second;
// //         first =+ second;
// //         second= third
// //     }
   
// // console.log(result)
// // }
// // fib(10)


// // function call(learn , callbak){
// //     console.log(`i learn ${learn}`);
// //     callbak();
// // }
// // function nor(){
// //     console.log('im callbak');
// // }
// // call('js', nor)

// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     height: 1024,
// //     colors: {
// //         border: {
// //             bg: 'red'
// //         },
// //         background: 'red'
// //     }
    
// // };
// // console.log(Object.keys(options).length)
// // let {bg} = options.colors.border;
// // console.log(bg)

// // for (let key in options) {
// //     if (typeof(options[key]) === 'object' ){
// //         for ( let i in options[key]){
// //             console.log(`${i}, ${options[key][i]}`);
// //         } 
// //     }else{
// //         console.log(`${key}, ${options[key]}`);

// //     }
// // }
// // const arr = [1,2,21,4,8,6];

// // // arr.pop();
// // // arr.push(10);
// // // arr.forEach(function(item, i, arr){
// // //     console.log(`${i}: in arr ${item} in ${arr}`)
// // // }
// // // )
// // // const a = prompt('', '')
// // // const prod = a.split(", ")
// // // console.log(prod);
// // arr.sort(qwerty);
// // function qwerty(a, b){
// //     return a - b;
// // }
// // console.log(arr)
// // function copy(mainoObj){
// //     let oblCopy ={}

// //     let key;
// //     for( key in mainoObj) {
// //         oblCopy[key] = mainoObj[key]
// //     }
// // }

// // const personalPlanPeter = {
// //     name: "Peter",
// //     age: "29",
// //     skills: {
// //         languages: ['ru', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%'
// //         },
// //         exp: '1 month'
// //     }
// // };

// // function showExperience(plan) {
// //     let {exp} = plan.skills;
// //     return exp
    
// // }

// // function showProgrammingLangs(plan) {
    
// //     let str ='';
    
// //     let {programmingLangs} = plan.skills;
// //     for (let key in programmingLangs){
// //         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
        
// //     }

// // console.log(str)
// // }
// // showProgrammingLangs(personalPlanPeter)
















// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(obj){
//         let str = '';
//         let {languages} = obj.skills;
//         str += `Мне ${obj.age} и я владею языками:`

//         languages.forEach(function(item){
//             let aa= item.toUpperCase() 
//             str += `${aa} `
//         });
//         console.log(str)
//     }
  
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let str = '';
//     let {programmingLangs} = plan.skills;
//     for ( let i in programmingLangs){
//         str += ` Язык ${i} изучен на ${programmingLangs[i]}\n`

//     }
//     return str


// }
// showProgrammingLangs(personalPlanPeter)




// const arr = [1,2,34,4];
// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i])
// // }


// // for (let j of arr){
// //     console.log(j);
// // }
// // arr.forEach(function(item , i , array) {
// // })

// // let str = prompt('', '');
// // let r = str.split(', ')
// // console.log(r.join(';'))



// function sort(a , b){
//     return a - b;
    

// }
// const favoriteCities = "This is some strange string";
// function d(arr){
  
        



//     console.log(arr.split('').reverse().join(''));


    
    
// }


   
   

// d(favoriteCities)




// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0){
//         return 'Нет доступных валют';
//     }
//     let str =`Доступные валюты:`; 
//     let arrr = arr.join(' ')
//     for( let i of arr){
//         if (i !== missingCurr){
           
//             str+= `${i}\n`
            
            
//         }
//     }
//     return(str)
// }
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')


// let r = 5;

// for (let i = 0; i < r; i++){
//     let str ='';
//     for( let j = 0;j<r-i ; j++){
//         str+= '1';
//     }
//     for(let k = 0; k< 2 * i + 1; k++){
//         str +='*';
//     }
//     console.log(str)
// }




// let obj = {
//     a:1,
//     b:2,
//     c:[1,9]
// }

// let clone ={};
// for (let key in obj){
//     if( typeof(obj[key]) === 'object'){
//         for ( let i in obj[key]){
//                  clone += obj[key][i]

//         } 
//     } else {
//         console.log(obj[key])
//     }

    
    

// }
// console.log(obj)
// console.log(clone)


// let newobj = [1,2,3];

// let rr = [12]
// let aaaa = [...newobj , ...rr];
// aaaa[1]= 6
// console.log(aaaa)
// console.log(newobj)




// let soldat = {
//     health: 100,
//     uron:23
// }

// // let jonh = Object.create(soldat)
// let jonh = {
//     health: 99,

// }

// Object.setPrototypeOf(jonh, soldat)
// // console.log(jonh.health)




// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }


// function isBudgetEnough(data) {

//     let {shops} = shoppingMallData;
//     let width;
//     let length;
//     let SUM =0;
//     let sum
//     shops.forEach(function(item,i){

//  width = (shops[i].width);
//  length = (shops[i].length);

// sum = width * length;

// SUM +=sum


//     });
//     SUM *= data.height;
//     SUM *= data.moneyPer1m3;

//     if (SUM <= data.budget){
//         return 'Бюджета достаточно';
//     } else {
//         return('Бюджета недостаточно')
//     }
    

// }
// isBudgetEnough(shoppingMallData)



// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// function sortStudentsByGroups(arr) {
//    arr.sort();
//   let a = [],
//       b =   [],
//       c =[],
//       rest = [];

//       for (let i = 0; i< arr.length; i++){
//         if(i<3){
//             a.push(arr[i]);
//         }
//         else if( i < 6){
//             b.push(arr[i]);
//         } else if ( i < 9){
//             c.push(arr[i])
//         } else{
//             rest.push(arr[i])
//         }
//       }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }
     


// sortStudentsByGroups(students)



// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let {openNow} = prop
//     let a = openNow === true  ? 'Открыто' : 'Закрыто';

//     return a;
// }

// console.log(isOpen(restorantData))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//   let copy = Object.assign({}, data);
//   copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));


const ig = document.getElementById('ig')
const header = document.getElementsByTagName('header');
const classname = document.getElementsByClassName('right');

const selctor = document.qu
ig.style.backgroundColor = 'blue';
ig.style.width = '50px';
ig.style.height = '45px';

let lefft = document.getElementsByClassName('dark');
let daek = document.querySelectorAll('.dark')

lefft[1].style.backgroundColor = 'red'

// lefft[0].style.cssText = 'background-color: blue; width: 500px';
// for (let i = 0; i < daek.length; i++ ){
//     daek[i].style.backgroundColor = 'blue'
// }

daek[2].style.backgroundColor = 'blue'



const div = document.createElement('div');
// const text = document.createTextNode('i was here');

div.classList.add('dark');
div.style.cssText = 'background-color: red; width: 100px; height: 100px'

let topWrap = document.querySelector('.top-wrap');
let classs = document.querySelector('.right')
classs.append(div);
// topWrap.prepend(div);
// topWrap.before(div)
// topWrap.after(div)
// daek[0].remove()
// daek[0].replaceWith(daek[2])

div.innerHTML='<h1>hello</h1>';
// div.textContent = 'hee'
div.insertAdjacentHTML('beforeend', '<h2>hello</h2>')

const box = document.getElementById('ig');
box.style.backgroundColor = 'black'
box.style.cssText = 'background-color: blue; width: 500px;';

daek[1].style.backgroundColor = 'green';

daek.forEach(function(item){
    console.log(item)
})




daek[1].append(ig);
daek[2].insertAdjacentHTML('beforeend', 'qwertyu');
const menu = document.querySelector('.menu');
const sum = menu.querySelectorAll('.submenu');
console.log(sum);



