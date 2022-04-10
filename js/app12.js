'use strict'

const numeros = [3,5,9,10,35,42,12,22,25];
let pares = '';
let impares = '';
let arrOrg = '';


numeros.forEach(arr => {
    arrOrg += `${arr}, `;
    if(arr % 2 == 0) {
       pares += `${arr}, `;
    } else {
        impares += `${arr}, `;
    }
});
document.write(`<p>Array original [${arrOrg}]</p>`);
document.write(`<p>Numeros pares [${pares}]</p>`);
document.write(`<p>Numeros impares [${impares}]</p>`);