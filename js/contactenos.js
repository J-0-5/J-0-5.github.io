const nombre1 = document.getElementById('nombre1'),
    nombre2 = document.getElementById('nombre2'),
    apellido1 = document.getElementById('apellido1'),
    apellido2 = document.getElementById('apellido2'),
    fechanac = document.getElementById('fechanac'),
    nodoc = document.getElementById('nodoc'),
    direccion =document.getElementById('direccion'),
    telefono =document.getElementById('telefono'),
    email = document.getElementById('email'),
    form = document.getElementById('form'),
    mostar = document.getElementById('mostrar');
    

const clientes = []; 
 
form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const newclient = {
            nombre1 = nombre1.value,
            nombre2 = nombre2.value,
            apellido1 = apellido1.value,
            apellido2 = apellido2.value,
            fechanac = fechanac.value,
            nodoc = nodoc.value,
            direccion = direccion.value,
            telefono = telefono.value,
            email = email.value 

        }

        clientes.push(newclient);
        localStorage.setItem('clientess', JSON.stringify(users))
        
})

mostrar.addEventListener('click', () => {
    const listUser = JSON.parse(localStorage.getItem('tabla')),
        tbody = document.querySelector('#tabla tbody')
    
    if (listUser == null) {
        mensaje.innerHTML = "No hay clientes registrados"
    } else {
        listUser.map(element => {
            let fila = tbody.insertRow(0),
                nombre1 = fila.insertCell(0),
                nombre2 = fila.insertCell(1),
                apellido1= fila.insertCell(2),
                apellido2 = fila.insertCell(3),
                fechanac = fila.insertCell(4),
                nodoc = fila.insertCell(5),
                direccion = fila.insertCell(6),
                telefono = fila.insertCell(7), 
                email = fila.insertCell(8)

            nombre1.innerHTML = element.nombre1;
            nombre2.innerHTML = element.nombre2;
            apellido1.innerHTML = element.apellido1;
            apellido2.innerHTML = element.apellido2;
            fechanac.innerHTML = element.fechanac;
            nodoc.innerHTML = element.nodoc;
            direccion.innerHTML = element.direccion; 
            telefono.innerHTML = element.telefono; 
            email.innerHTML = element.email;
        })
            
        
    }
})