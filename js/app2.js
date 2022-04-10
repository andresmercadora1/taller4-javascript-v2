'use strict'

const persona = {
    id: 1,
    nombre: 'Andrés Mercado',
    edad: 26,
    pasatiempos: ['Ver anime', 'Programar', 'Ver TV']
}

document.write(`<p>ID: ${persona.id}</p>`);
document.write(`<p>Nombre: ${persona.nombre}</p>`);
document.write(`<p>Edad: ${persona.edad}</p>`);

document.write(`<b>Pasatiempos</b>`);
for(let pasatiempo of persona.pasatiempos) {
    document.write(`<p>${pasatiempo}</p>`);
}