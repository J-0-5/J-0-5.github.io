const registro = [
    {
        nombre: 'Jose',
        apellido: 'Villlarreal',
        correo: 'jevillarreal@itsa.edu.co',
        contraseña: 'admin',
        tipo: 'Administrador'
    },
    {
        nombre: 'Gricel',
        apellido: 'Barrera',
        correo: 'gcbarrera@itsa.edu.co',
        contraseña: 'user',
        tipo: 'Usuario'
    }
]

alert("Aun no has iniciado seccion. \nEstas navegando como invitado.")

localStorage.setItem('cuentas', JSON.stringify(registro));
const usuarios =  JSON.parse(localStorage.getItem('cuentas'));

const user = document.getElementById('user') 
const password = document.getElementById('password')
const form = document.getElementById('form')
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    
    for(i=0;i<usuarios.length;i++){
        if(usuarios[i].correo==user.value &&usuarios[i].contraseña==password.value){
            alert("Bienvenido: "+usuarios[i].tipo+" "+usuarios[i].nombre+" "+usuarios[i].apellido )
            var div = document.getElementById('log');
            div.style.display = 'none';
        }else{
            error.innerHTML = `Datos erroneos`;
        }
    }
});

function hide() {
    var div = document.getElementById('log');
    div.style.display = 'none';
}

function show() {
    div = document.getElementById('log');
    div.style.display = '';
}