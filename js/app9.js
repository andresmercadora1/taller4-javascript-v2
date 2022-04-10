'use strict'

const frutas = ['banano','manzana','pera','fresas','Sandia'];

document.write(`<p>Frutas [`);
frutas.forEach((arr, i) => {

    document.write(`${arr}, `);

});
document.write(`]</p>`);