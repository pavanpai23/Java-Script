// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthyear => 2037 - 1990;

// const calctempAltitude = function (t1,t2) {
//     const temps=t1.concat(t2);
//     console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curtemp=temps[i];
//     if(typeof curtemp!=='number') continue;
//     if (curtemp > max) {
//       max = curtemp;
//     }
//     if (curtemp < min) {
//       min = curtemp;
//     }
//   }
//   console.log(max,min);

//   return max-min;
// };
// const amplitude=calctempAltitude([3, -2, -6, -1],[9, 13, 17, 15, 14, 9, 5]);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',

//     value: Number(prompt('degree celcius')),
//   };

//   console.table([measurement]);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// challange 1
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

console.log(` ...${data1[0]}c ...${data1[1]}c ...${data1[2]}c ...`);

const printforecast = function (arr) {
  let Str = '';
  for (let i = 0; i < arr.length; i++) {
    Str = Str + `${arr[i]}c in ${i+1} days ...`;
  }
  console.log('...'+ Str);
};

printforecast(data1);
 