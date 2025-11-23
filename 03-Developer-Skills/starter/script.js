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

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    value: Number(prompt('degree celcius')),
  };

  console.table([measurement]);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
