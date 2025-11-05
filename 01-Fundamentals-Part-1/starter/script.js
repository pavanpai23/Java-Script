//  let js='amazing';
//       if(js==='amazing')alert("javascript is for fun");


//math operator
// const now=2040;

// const agepav=now-2006;
// const ageani=now-2016;
// console.log(agepav,ageani);


// console.log(agepav*2, ageani/10,2**3);
// //2**3 means 2 to the power 3=2*2*2

// const firstname='pavan'
// const lastname='pai'
// console.log(firstname+' '+lastname)

// //assignment operator
// let x = 10 + 5; // x=15
// x+=10;  //x=x+10=25
// x*=4;  //x=x*4=100
// x++;       //x=x+1
// x--;    //x=x-1
// x--;
// console.log(x);


// //comparision operator
// console.log(agepav>ageani);



// challenge 1

// const markweight=78;
// const jhonsweight=92;
// const markheight=1.69;
// const jhonheight=1.95;

// bmimark=markweight/markheight**2;

// bmijhon=jhonsweight/(jhonheight*jhonheight);

// console.log(bmijhon,bmimark);



// if(bmimark>bmijhon){
//     console.log('true');
// }else{
//     console.log('flase');
    
// }


//template litrals

// const firstname="pavan";
// const job="student";
// const birthyear="2006";
// const year="2025";

// const pavan=" I'm " + firstname + ' ,a' + (year-birthyear) + " yearold "+ job+ " !";
// console.log(pavan);

// const pavannew= `I'm ${firstname}, a ${year-birthyear} yearsold ${job}`
// console.log(pavannew);

//challenge 2


// const markweight=78;
// const jhonsweight=92;
// const markheight=1.69;
// const jhonheight=1.95;

// bmimark=markweight/markheight**2;

// bmijhon=jhonsweight/(jhonheight*jhonheight);

// console.log(bmijhon,bmimark);

// if(bmimark>bmijhon){
//     console.log(`Mark's BMI ${bmimark}is higher than John's!`);
// }
// else{
//     console.log(`"John's BMI is higher than Mark's!`);
    
// }


//type converstion

// const inputyear='1991'
// console.log(Number(inputyear),inputyear);
// console.log(Number(inputyear)+18);

// console.log(Number('pavan'));
// console.log(typeof NAN);

// console.log(String(23),23);


//truly and falsly values
 //5 flasly values: 0,'',undefind,null,nan

//  console.log(Boolean(0));
//  console.log(Boolean(''));
//  console.log(Boolean(undefined));
//  console.log(Boolean('pavan'));
 

// const age=18;
// if(age===18){
//     console.log('you just become an adult');
    
// }
 
//  const scoredlophin=(97+112+101)/3;
//  const scorekolas=(109+95+123)/3

//  console.log(scoredlophin,scorekolas);
 
//  if(scoredlophin>scorekolas && scoredlophin>=100){
//     console.log('tropy win by dlophin');
//  }
// else if(scorekolas>scoredlophin && scorekolas>=100){
//     console.log('tropy win by kolas');
// }
// else if(scoredlophin===scorekolas && scoredlophin>=100 && scorekolas>=100){
//     console.log('both win thropy');
    
// }

//switch

// const day='monday';

// switch(day){
// case'monday':
// console.log('hi');
// break;
// case'tuesaday':
// console.log('hello');
// break;
// case'wensaday':
// console.log('how ar eu');
// break;
// case'thursaday':
// console.log('abachs');
// break;
// case'friday':
// break;
// console.log('asjjhd');
// break;
// default:
//     console.log('good bye');
// }


//ternary operator
//  const age=23;
//   age>=18 ? console.log('we can drink wine🍷') :
//   console.log('we can drink water💧');
  
//   const drink=age>=18 ? 'wine' : 'water';
//   console.log(drink);
  
 //assignment4

 const bill=400;
 const tip=bill<=300 & bill>=50 ? bill*0.15 : bill*0.2;
 console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill+tip}`);
 