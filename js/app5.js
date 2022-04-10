'use strict'

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
for (let i = 0; i < 5; i++) {
    const nombre = prompt("Digite el nombre del producto");
    const presentacion = prompt("Digite la presentacion");
    const valor = prompt("Digite el valor del producto");
    const producto = {
        nombre,
        presentacion,
        valor
    }
    tabla += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.presentacion}</td>
            <td>${producto.valor}</td>
        </tr>`;
}


tabla += `</tbody></table>`;

document.write(tabla);