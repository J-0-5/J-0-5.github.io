window.onload = function (){
    div = document.getElementById('show');
    div.style.display = 'none';

    const form = document.getElementById("form"),
    nombre1 = document.getElementById("nombre1"),
    apellido1 = document.getElementById("apellido1"),
    direccion = document.getElementById("direccion"), 
    cedula = document.getElementById("nodoc"),
    telefono = document.getElementById("telefono"),
    mostrar = document.getElementById("mostrar"); 
    const clientes = []



    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const nuevocliente = {
            nombre1 : nombre1.value,
            apellido1: apellido1.value, 
            cedula: cedula.value,
            direccion : direccion.value, 
            telefono: telefono.value,
            
    } 
    div = document.getElementById('show');
    div.style.display = '';

    clientes.splice(0,0,nuevocliente)
    localStorage.setItem('listclientes', JSON.stringify(clientes))

    tbody = document.querySelector('#mostrar tbody')
    mostrar.addEventListener('click', () => {
    let fila = tbody.insertRow(0),
    nombre1 = fila.insertCell(0),
    apellido1 = fila.insertCell(1),
    cedula = fila.insertCell(2), 
    direccion = fila.insertCell(3),
    telefono = fila.insertCell(4)
    eliminar = fila.insertCell(5)


    nombre1.innerHTML = nuevocliente.nombre1;
    apellido1.innerHTML = nuevocliente.apellido1;
    cedula.innerHTML = nuevocliente.cedula;
    direccion.innerHTML = nuevocliente.direccion;
    telefono.innerHTML = nuevocliente.telefono;
    eliminar.innerHTML ='<button id="btn" name="btn" onclick="delRow(this)" > Delete</button>';
    }); 

 
    function delRow(currElement) {
        var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
        document.getElementById("mostrar").deleteRow(parentRowIndex);
        clientes.splice(parentRowIndex-1,1);
        localStorage.setItem('table', JSON.stringify(clientes));
    } 
    
})
} 

