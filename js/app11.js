'use strict'

const arreglo = [3,5,9,10,35,42,12,22,25];

let array = 'Arreglo [';
const valorCentro = Math.floor(arreglo.length / 2);

arreglo.forEach(arr => {
    array += `${arr}, `;
});

array += ']';

document.write(`<p>${array}</p>`);
document.write(`<p>Ultimo valor del vector: ${arreglo[arreglo.length - 1]}</p>`);
document.write(`<p>Valor central del vector: ${arreglo[valorCentro]}</p>`);
