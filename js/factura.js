const opciones = [
    {
        nombre:'Harina PAN',
        precio:3490,
    },
    {
        nombre:'Chorizo Antioqueño',
        precio:16784,
    },
    {
        nombre:'Tablet Lenovo',
        precio:1079900,
    },
    {
        nombre:'Cámara Canon',
        precio:999900,
    }
]

const registro = []

div = document.getElementById('show');
    div.style.display = 'none';

const producto = document.getElementById('producto')
const unidades = document.getElementById('unidades')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')

const id = document.getElementById('id')
id.addEventListener('change',(e) =>{
    localStorage.setItem('var',e.target.value);
})

const documento = document.getElementById('documento')

const modo = document.getElementById('modo')
modo.addEventListener('change',(e) =>{
    localStorage.setItem('mode',e.target.value);
})

const num = document.getElementById('num')

producto.addEventListener('change',(e) =>{
    e.preventDefault()
    for(i=0;i<opciones.length;i++){
        if(opciones[i].nombre== e.target.value){
           localStorage.setItem('nom',opciones[i].nombre)
           localStorage.setItem('precio',opciones[i].precio)
           break
        }
    }
    
})

const form = document.getElementById('form')
const mostrar = document.getElementById('mostrar')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const product = localStorage.getItem('nom')
    const ide =  localStorage.getItem('var');
    const modo = localStorage.getItem('mode');
    const precio = localStorage.getItem('precio');
    const total = precio * unidades.value;
    const factura = {
        Cliente: nombre.value +" "+ apellido.value,
        Identificacion: ide,
        numero: documento.value,
        Producto: product,
        Pago: modo+" "+num.value,
        Precio_total: total 
    }

    div = document.getElementById('show');
    div.style.display = '';

    registro.splice(0,0,factura)
    localStorage.setItem('cuentas', JSON.stringify(registro));
    

    tbody = document.querySelector('#mostrar tbody')
    let fila = tbody.insertRow(0),
                Cliente = fila.insertCell(0),
                Identificacion = fila.insertCell(1),
                Numero = fila.insertCell(2)
                Producto = fila.insertCell(3),
                Pago = fila.insertCell(4),
                Precio_total = fila.insertCell(5)
                boton = fila.insertCell(6);

                Cliente.innerHTML = factura.Cliente
                Identificacion.innerHTML = factura.Identificacion
                Numero.innerHTML = factura.numero
                Producto.innerHTML = factura.Producto
                Pago.innerHTML = factura.Pago
                Precio_total.innerHTML = factura.Precio_total
                boton.innerHTML ='<button id="btn" name="btn" onclick="delRow(this)" > Delete</button>';

});

function delRow(currElement) {
    var parentRowIndex = currElement.parentNode.parentNode.rowIndex;
    document.getElementById("mostrar").deleteRow(parentRowIndex);
    registro.splice(parentRowIndex-1,1);
    localStorage.setItem('cuentas', JSON.stringify(registro));
}




