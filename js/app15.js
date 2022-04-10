'use strict'

const arreglo = [29,5,40,10,35,42,12,22,25,1,3];

document.write(`<p><b>Arreglo original</b></p>`);
for(let arr of arreglo) {
    document.write(`${arr}, `);
}

document.write(`<p><b>Arreglo decendente</b></p>`);
for(let arr of arreglo.sort((a, b) => b-a)) {
    document.write(`${arr}, `);
}
