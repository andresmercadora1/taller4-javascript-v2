'use strict'

const arreglo = [2,4,6,8,10,12,14,16,18,20,22];
const arri = [];

document.write(`<p><b>Arreglo original</b></p>`);
for(let arr of arreglo) {
    document.write(`${arr}, `);
}

document.write(`<p><b>Arreglo aleatoriamente</b></p>`);

for(let i in arreglo) {
    let random= Math.floor(Math.random() * arreglo.length);
   
    document.write(`${arreglo[random]}, `);
}
