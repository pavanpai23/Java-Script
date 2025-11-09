//  'use strict'

//  let hasdriverslisence=false;
//  const passtest=true;

//  if(passtest) hasdriverslisence=true;
//  if(hasdriverslisence) console.log('can drive');
 

// function logger(){
//     console.log('my name is pavan');
// }

// logger();
// logger();

// function fruitprocessor(apples,oranges){    
//  const juice=`juice with ${apples}apples and ${oranges}oranges`
//  return juice;
// }

// const juice=fruitprocessor(5,10);
// console.log(juice);
// function calcage(birthyear){
//     return 2099-birthyear;
// }
// const age1=calcage(2006);
// console.log(age1)

// const calcage2=function(birthyear){
//     return 2099-birthyear;
// }
// const age2=calcage(2006)
// console.log(age2); //arrow function const calage3=birthyear=>2099-birthyear;
// const age3=calage3(2006);
// console.log(age3);

// const yearsleftretirement=(birthyear,name)=>{
//   const age=2099-birthyear;
//   const retirement=60-age;
//   return `${name} retires in ${retirement}years`
// }
// console.log(yearsleftretirement(2006,'pavanm'));
// console.log(yearsleftretirement(2000,'ani'));


const fruitcutter=function(fruit){
  return fruit*5;
}
      
const fruitprocessor=function(apples,oranges){ 
  const applecutter=fruitcutter(apples);
 const orangescutter=fruitcutter(oranges);
  const juice=`juice with ${applecutter}apples and ${orangescutter}oranges`;
 return juice;
}

console.log(fruitprocessor(2,3));


