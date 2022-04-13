'use strict'

const numeros = [3,5,9,10,35,42,12,22,25];
let pares = '', numPares = 0;
let impares = '', numImpares = 0;
let arrOrg = '';


numeros.forEach(arr => {
    arrOrg += `${arr}, `;
    if(arr % 2 == 0) {
       pares += `${arr}, `;
       numPares++;
    } else {
        impares += `${arr}, `;
        numImpares++;
    }
});
document.write(`<p>Array original [${arrOrg}]</p>`);
document.write(`<p>Numeros pares [${pares}], hay ${numPares} numeros pares</p>`);
document.write(`<p>Numeros impares [${impares}], hay ${numImpares} numero impares</p>`);