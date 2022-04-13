'use strict'

const array = [2, 7, 6];

for(let i = 0; i < 2; i++) {
    const agregar = Number(prompt('Digite un valor'));
    array.push(agregar);
}

document.write(`<p>Vector [`);
array.forEach(arr => {
    document.write(`${arr}, `);
});
document.write(`]</p>`);
