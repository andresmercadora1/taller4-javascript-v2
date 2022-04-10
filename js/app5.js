'use strict'

const producto1 = {
    nombre: 'Computador',
    presentacion: 'presentacion 1',
    valor: 2300000
}

const producto2 = {
    nombre: 'Silla',
    presentacion: 'presentacion 2',
    valor: 150000
}

const producto3 = {
    nombre: 'Teclado',
    presentacion: 'presentacion 3',
    valor: 98000
}

const producto4 = {
    nombre: 'Mause',
    presentacion: 'presentacion 4',
    valor: 65000
}

const producto5 = {
    nombre: 'Escritorio',
    presentacion: 'presentacion 5',
    valor: 350000
}

const productos = [producto1, producto2, producto3, producto4, producto5];

let tabla = `<table class="table table-hover table-striped table-bordered">
    <thead>
        <tr>
            <th>Producto</th>
            <th>Presentación</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>
`;
for(let i = 0; i < productos.length; i++) {
    tabla += `
    <tr>
    <td>${productos[i].nombre}</td>
    <td>${productos[i].presentacion}</td>
    <td>${productos[i].valor}</td>
    </tr>`;
    
}

tabla += `</tbody></table>`;

document.write(tabla);