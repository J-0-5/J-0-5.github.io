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

div = document.getElementById('show');
    div.style.display = 'none';


const producto = document.getElementById('producto')
const costo = document.getElementById('costo')
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
           costo.innerHTML = `COP$${opciones[i].precio}`
           break
        }
    }
    const resul = opciones[i].precio * unidades.value
    localStorage.setItem('neto',resul)
})

const form = document.getElementById('form')
const mostrar = document.getElementById('mostrar')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const product = localStorage.getItem('nom')
    const ide =  localStorage.getItem('var');
    const modo = localStorage.getItem('mode');
    const total = localStorage.getItem('neto')
    const factura = {
        Cliente: nombre.value +" "+ apellido.value,
        Identidicacion: ide,
        Producto: product,
        Pago: modo+" "+num.value,
        Precio_total: total 
    }

    div = document.getElementById('show');
    div.style.display = '';

    localStorage.setItem('cuentas', JSON.stringify(factura));
    const variables = JSON.parse(localStorage.getItem('cuentas'))

    tbody = document.querySelector('#mostrar tbody')
    let fila = tbody.insertRow(0),
                Cliente = fila.insertCell(0),
                Identidicacion = fila.insertCell(1),
                Producto = fila.insertCell(2),
                Pago = fila.insertCell(3),
                Precio_total = fila.insertCell(4)

                Cliente.innerHTML = factura.Cliente
                Identidicacion.innerHTML = factura.Identidicacion
                Producto.innerHTML = factura.Producto
                Pago.innerHTML = factura.Pago
                Precio_total.innerHTML = factura.Precio_total
    
});



