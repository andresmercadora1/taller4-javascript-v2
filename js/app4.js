'use strict'

for (let i = 0; i < 5; i++) {
    const nombre = prompt("Digite el nombre");
    const cargo = prompt("Digite el cargo");
    const salario = prompt("Digite el salario");
    const empleados = {
        nombre,
        cargo,
        salario
    }

    document.write(`<b>Empleado ${(1+i)}</b>`);
    document.write(`<p>Nombre: ${empleados.nombre}</p>`);
    document.write(`<p>Cargo: ${empleados.cargo}</p>`);
    document.write(`<p>Salario: ${empleados.salario}</p>`);
}