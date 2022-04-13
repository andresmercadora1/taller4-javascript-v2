'use strict'

const arreglo1 = [3,5,9,10,35,42,12,22,25];
const arreglo2 = [9,5,33,12,7,20,22,3,8];

let sumaArr1 = 0;
let sumaArr2 = 0;

for(let i in arreglo1) {
    document.write(`<p>${arreglo1[i]} + ${arreglo2[i]} = ${arreglo1[i] + arreglo2[i]}</p>`);
    sumaArr1 += arreglo1[i];
    sumaArr2 += arreglo2[i];
}

document.write(`<p>${sumaArr1} + ${sumaArr2} = ${sumaArr1 + sumaArr2}</p>`);