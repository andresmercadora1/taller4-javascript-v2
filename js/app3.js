'use strict'

const persona = {
    id: 1,
    nombre: 'Andrés Mercado',
    edad: 26,
    pasatiempos: ['Ver anime', 'Programar', 'Ver TV'],
    mostrar: () => {
        alert(`Nombre: ${persona.nombre}\nPasatiempos: ${persona.pasatiempos}`)
    }
}

persona.mostrar();