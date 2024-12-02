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

let user = ['Ваня', 'Иштван', ];
user.push('ola');
user[1] = "Петя";
user.shift();
console.log(user);
user.unshift("Маша" , "Паша");

console.log(user);
// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);
// Заменяем элементы


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
let nurta = {
    nurta: "navigator",
}

nurta['namee'] = 'nurtalap';
console.log(nurta)

let nurtalap = [1,23,34,45]
nurtalap[5] = 12;
console.log(nurtalap)

let as = 8
console.log(as++)