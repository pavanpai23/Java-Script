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


// const fruitcutter=function(fruit){
//   return fruit*5;
// }
      
// const fruitprocessor=function(apples,oranges){ 
//   const applecutter=fruitcutter(apples);
//  const orangescutter=fruitcutter(oranges);
//   const juice=`juice with ${applecutter}apples and ${orangescutter}oranges`;
//  return juice;
// }

// console.log(fruitprocessor(2,3));


// //challange1
// const calcavg=(a,b,c)=>(a+b+c)/3;
// console.log(calcavg(3,4,5));

// //test1
// const scoreDlopins=calcavg(44,23,71);
// const scorekolas=calcavg(65,54,49);
// console.log(scoreDlopins,scorekolas);

// const checkwinner=function(avgDlopins,avgkolas){
//   if(avgDlopins>=2*avgkolas){
//     console.log(`dlopins wins (${avgDlopins}) vs ${avgkolas})`);
//   }else if(avgkolas>=2*avgDlopins){
//     console.log(`kolas wins (${avgkolas}) vs ${avgDlopins})`);
//   }
//   else{
//     console.log('no team wins');
//   }
// }
// console.log(scoreDlopins,scorekolas);

// checkwinner(576,111 )


//arrays
//  const friend1='pavan';
//  const friend2='ani';
//  const friend3='ayi';

//  const friend=['pavan','ani','ayi'];
//  console.log(friend);
 
//  console.log(friend[0]);
//  console.log(friend[2]);

//  console.log(friend.length);
 
//  console.log(friend[friend.length-1]);
 
// const friend= ['pavan','ani','ayi'];
// const newlength=friend.push("bappa");
// console.log(friend);
// console.log(newlength);

// friend.unshift('ama');
// console.log(friend);

// friend.pop();//last
// console.log(friend);

// friend.shift(); //first
// console.log(friend);

// console.log(friend.indexOf('ani')); //if there return + or -
// console.log(friend.indexOf('bob'));

// console.log(friend.includes('ani'));//if present returns true or flase
// console.log(friend.includes('bob'))


// challange 2

// const caltip=function(bill){
// return bill>=50 && bill<=300 ? bill*0.15 :bill*0.2;
// }

// const bill=[125,555,44];
// const billtips=[caltip(bill[0]),caltip(bill[1]),caltip(bill[2])];
// const total=[bill[0]+billtips[0],bill[1]+billtips[1],bill[2]+billtips[2]]
// console.log(total);

// console.log(billtips);


//objects

// const pavan={
//     firstname:'pavan',
//     lastname:'pai',
//     age:2006-2099,
//     job:'student',
//     friends:['ayi','dada','bappa'],
// };
// console.log(pavan);

// console.log(pavan.lastname);
// console.log(pavan['lastname']);


// const namekey='name';
// console.log(pavan['first'+namekey]);

// const inretsedin=prompt('what do ypu want to know aboutjnas name,age,job');
// console.log(pavan[inretsedin]);


// const friends=['michel','raju','chotu'];
// const length=friends.length;
// const best=friends[0];
// console.log(length);
// console.log(best);
// const friend=`jonas has ${length} friends and his best friend is ${best}`
// console.log(friend);


// console.log(`${pavan.firstname} has ${pavan.friends.length} friends and his best friend is called ${pavan.friends[0]} `);

//object methods

const pavan={
    firstname:'pavan',
    lastname:'pai',
    age:2006,
    job:'student',
    friends:['ayi','dada','bappa'],
    hasdriverslisense:false,

//       calcAge:function(age){
//         return 2099 - age;
//       }

    //  calcAge:function(){
    //     console.log(this);
    //     return 2099-this.age;
       
    //  }
     calcAge:function(){
        this.age= 2099-this.age;
        return this.age;

     },

     summary:function(){
            return `${this.firstname} is a ${this.age}-year old ${pavan.job}, and he has ${this.hasdriverslisense ?'a' : 'no' } driving lisence`
     }
 };

console.log(pavan.calcAge());

console.log(pavan.age);
console.log(pavan.age);
console.log(pavan.age);

//challange
console.log(`${pavan.firstname} is a ${pavan.age}-year old ${pavan.job},and he has a drivinglisence`);

console.log(pavan.summary());
