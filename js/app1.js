'use strict'

const persona = {
    id: 1,
    nombre: 'Andrés Mercado',
    edad: 26,
    pasatiempos: ['Ver anime', 'Programar', 'Ver TV']
}

document.write(`<p>Persona{${Object.keys(persona)}}</p>`);