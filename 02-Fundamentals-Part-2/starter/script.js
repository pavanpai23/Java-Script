//  'use strict'

//  let hasdriverslisence=false;
//  const passtest=true;

//  if(passtest) hasdriverslisence=true;
//  if(hasdriverslisence) console.log('can drive');
 

function logger(){
    console.log('my name is pavan');
}

logger();
logger();

function fruitprocessor(apples,oranges){    
 const juice=`juice with ${apples}apples and ${oranges}oranges`
 return juice;
}

const juice=fruitprocessor(5,10);
console.log(juice);
