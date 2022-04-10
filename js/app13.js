'use strict'

const arrays = ['tomate','banano','manzana','pera','cebolla','papa','fresas','Ajo','Sandia'];
const frutas = ['banano','manzana','pera','fresas','Sandia'];
const verduras = ['tomate','cebolla','papa','Ajo'];

document.write(`<p>Array original [`);
arrays.forEach(arr => {
    document.write(`${arr}, `);
});
document.write(`]</p>`);

document.write(`<p>Posición de las frutas [`);
arrays.forEach((arr, i) => {

    frutas.forEach(fruta => {
        if(arr == fruta) {
            document.write(`${arr}: ${i}, `);
        }
    });

});
document.write(`]</p>`);

document.write(`<p>Posición de las verduras [`);
arrays.forEach((arr, i) => {

    verduras.forEach(verdura => {
        if(arr == verdura) {
            document.write(`${arr}: ${i}, `);
        }
    });

});
document.write(`]</p>`);