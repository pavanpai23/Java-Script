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
function calcage(birthyear){
    return 2099-birthyear;
}
const age1=calcage(2006);
console.log(age1);

const calcage2=function(birthyear){
    return 2099-birthyear;
}
const age2=calcage(2006)
console.log(age2); //arrow function const calage3=birthyear=>2099-birthyear;
const age3=calage3(2006);
console.log(age3);
