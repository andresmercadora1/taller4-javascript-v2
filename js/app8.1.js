'use strict'

const arreeglo = [
    {
        id: 1,
        usuario: 'amercad',
        email: 'andres@test.com'
    }
];

let tabla = '<table class="table table-hover table-striped table-bordered text-center">';

tabla += '<thead><tr>';
tabla += '<th>ID</th>';
tabla += '<th>Usuario</th>';
tabla += '<th>Email</th>';
tabla += '<th>Accion</th>';
tabla += '</tr></thead>';


tabla += '<tbody><tr>';
tabla += `<td>${arreeglo[0].id}</td>`;
tabla += `<td>${arreeglo[0].usuario}</td>`;
tabla += `<td>${arreeglo[0].email}</td>`;
tabla += `<td><button>Eliminar</button></td>`;
tabla += '</tr></tbody>';

tabla += '</table>';

document.write(tabla)