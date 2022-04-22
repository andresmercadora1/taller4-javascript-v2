
const arreeglo = [];

let continuar = false;

// while (!continuar) {
//     var add = Number(prompt('Digite un valor numerico'));
//     arreeglo.push(add);
//     var resp = Number(prompt('Digite 1 para continuar'));
//     if (resp!==1) {
//         continuar = true;
//     }
// }


// document.write('[');
// arreeglo.forEach(arr => {
//     document.write(`${arr}, `);
// })
// document.write(']');

const arreeglo1 = [1,12,4,3,45,6,7,8,99];

// document.write('Arreglo original[');
// arreeglo1.forEach(arr => {
//     document.write(`${arr}, `);
// })
// document.write(']');

// while (!continuar) {
//     alert('El ultimo elemento del array fue eliminado('+arreeglo1.pop()+')');
//     var resp = Number(prompt('Digite 1 para continuar'));
//     if (resp!==1) {
//         continuar = true;
//     }
// }

// document.write('<br/>Arreglo final[');
// arreeglo1.forEach(arr => {
//     document.write(`${arr}, `);
// })
// document.write(']');

// document.write('Arreglo original[');
// arreeglo1.forEach(arr => {
//     document.write(`${arr}, `);
// })
// document.write(']');

// const posicionIni = Number(prompt('Estraer los valores del array desde la posición: '));
// const posicionFin = Number(prompt('Hasta la posición: '));
// const arrResult = arreeglo1.slice(posicionIni, posicionFin);

// document.write('<br/>Arreglo final[');
// arrResult.forEach(arr => {
//     document.write(`${arr}, `);
// })
// document.write(']');


document.write('Arreglo original[');
arreeglo1.forEach(arr => {
    document.write(`${arr}, `);
})
document.write(']');

const posicionIni = Number(prompt('digite (1: agregar, 2: eliminar) al arreglo'));

document.write('<br/>Arreglo final[');
if (posicionIni === 1) {
    const add = Number(prompt('Digite el valor qque desea agregar'));
    arreeglo1.splice(arreeglo1.length, 0, add);
} else if(posicionIni === 2){
    const posElim = Number(prompt('Digite la posición del elemento que desea eliminar'));
    arreeglo1.splice(posElim, 1);
} else {
    alert("Opcion no valida")
}

document.write(arreeglo1);
document.write(']');




