'use strict'

const arreglo = [2,4,6,8,10,12,14,16,18,20,22];;

document.write(`<p><b>Arreglo original</b></p>`);
for(let arr of arreglo) {
    document.write(`${arr}, `);
}

document.write(`<p><b>Arreglo aleatoriamente</b></p>`);
document.write(`${arreglo.sort((a,b) => Math.random() - 0.5)}`);

