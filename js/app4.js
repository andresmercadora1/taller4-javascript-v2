'use strict'

const empleado1 = {
    nombre: 'Luis',
    cargo: 'Gerente',
    salario: 7500000
}

const empleado2 = {
    nombre: 'Lina',
    cargo: 'Analista',
    salario: 2550000
}

const empleado3 = {
    nombre: 'Julian',
    cargo: 'Vigilante',
    salario: 1200000
}

const empleado4 = {
    nombre: 'Fernando',
    cargo: 'Arquitecto',
    salario: 5500000
}

const empleado5 = {
    nombre: 'Santiago',
    cargo: 'Vendedor',
    salario: 1050000
}

const empleados = [empleado1, empleado2, empleado3, empleado4, empleado5];


for(let i = 0; i < empleados.length; i++) {
    document.write(`<b>Empleado ${(1+i)}</b>`);
    document.write(`<p>Nombre: ${empleados[i].nombre}</p>`);
    document.write(`<p>Cargo: ${empleados[i].cargo}</p>`);
    document.write(`<p>Salario: ${empleados[i].salario}</p>`);
}