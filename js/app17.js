'use strict'

const arreglo1 = [3,5,9,10,35,42,12,22,25,163];
const arreglo2 = [9,5,33,12,7,20,22,3,8, 119];

for(let i in arreglo1) {
    document.write(`<p>${arreglo1[i]} + ${arreglo2[i]} = ${arreglo1[i] + arreglo2[i]}</p>`);
}