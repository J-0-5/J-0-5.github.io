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
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

var domicilio = 0

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        domicilio = 15000;
    } else {
        domicilio = 0;
    }
  }



const form = document.getElementById('form')
const mostrar = document.getElementById('mostrar')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    
    const product = localStorage.getItem('nom')
    const modo = localStorage.getItem('mode');
    const precio = localStorage.getItem('precio');
    const total = precio * unidades.value + domicilio;
    const factura = {
        numero: documento.value,
        Producto: product,
        cantidad: unidades.value,
        Pago: modo+" "+num.value,
        Precio_total: total 
    }

    
    div = document.getElementById('show');
    div.style.display = '';

    registro.splice(0,0,factura)
    localStorage.setItem('cuentas', JSON.stringify(registro));
    

    tbody = document.querySelector('#mostrar tbody')
    let fila = tbody.insertRow(0),
               
                Numero = fila.insertCell(0)
                Producto = fila.insertCell(1),
                Cantidad = fila.insertCell(2)
                Pago = fila.insertCell(3),
                Precio_total = fila.insertCell(4)
                boton = fila.insertCell(5);

                Numero.innerHTML = factura.numero
                Producto.innerHTML = factura.Producto
                Cantidad.innerHTML = factura.cantidad
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