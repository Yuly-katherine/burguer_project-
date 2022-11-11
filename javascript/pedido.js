//***-------------VARIABLES GENERALES----------***//

//-carrito de compras-//
let carritoCompras = [];
let totalAPagar = 0;



//***-------------MOSTRAR DATOS DESDE LOCALSTORAGE----------***//

carritoFromStorage();

function carritoFromStorage() {
  if (localStorage.getItem("carrito") !== null) {
    carritoCompras = JSON.parse(localStorage.getItem("carrito"));
    detalleCarrito(carritoCompras);
  }
}


//***------------- CALCULAR TOTAL CARRITO----------***//

function calcularTotalCarrito() {
    totalAPagar = 0;
    carritoCompras.forEach((el) => {
      totalAPagar += el.precio * el.cantidad
    })
}



//***------------- PRODUCTOS CARRITO----------***//

function detalleCarrito(lista) {
    console.log(lista);  
    let detalleProducto = document.getElementById("detalle-carrito")
    detalleProducto.className="detalle-carrito"


    //Header
    let headerProducto = document.createElement("div");
        headerProducto.className = 'detalle-carrito__header'
        headerProducto.innerHTML =`
        <div>
            PRODUCTO
        </div>
        <div>
            PRECIO
        </div>
        <div>
            CANTIDAD
        </div>
        <div>
            TOTAL
        </div>
        `
    detalleProducto.append(headerProducto);

    let hr = document.createElement("hr");
    hr.className="linea-horizontal"
    detalleProducto.append(hr);

    lista.forEach((producto) => {
    
        let bodyProducto = document.createElement("div");
        bodyProducto.className = 'detalle-carrito__body'


        //PRODUCTO
        let imagenProducto = document.createElement("div");
        imagenProducto.className = 'detalle-imagen'
        imagenProducto.innerHTML =`
        <img src="${producto.imagen}" alt="${producto.nombre}" />`;


        if(esHamburguesaOrParrilla(producto)){
            let descripcionAcompanante = document.createElement("div");
            descripcionAcompanante.className = "detalle-acompanante";
            descripcionAcompanante.innerHTML = `
            <div class='sidebar-acompanante__option'>
              <span>Elige tu acompañante</span>
              <span>-${producto.acompanante}</span>
            </div>
            <div class='sidebar-acompanante__option'>
              <span>Elige tu salsa</span>
              <span>-${producto.salsa}</span>
            </div>
            `;
            imagenProducto.append(descripcionAcompanante); 
        } 
        bodyProducto.append(imagenProducto)
    
        //PRECIO
        let precioProducto = document.createElement("div");
        precioProducto.className = 'detalle-producto'
        precioProducto.innerHTML =`
        <span>${producto.precio}</span>`;
    
        bodyProducto.append(precioProducto)

        //CANTIDAD
        let cantidadProducto = document.createElement("div");
        cantidadProducto.className = 'detalle-producto'
        cantidadProducto.innerHTML =`
        <span>${producto.cantidad}</span>`;
    
        bodyProducto.append(cantidadProducto)
    
        //TOTAL
        let totalProducto = document.createElement("div");
        totalProducto.className = 'detalle-producto'
        totalProducto.innerHTML =`
        <span>$${producto.cantidad*producto.precio}</span>`;
    
        bodyProducto.append(totalProducto);
        detalleProducto.append(bodyProducto)
    
      })

      //FOOTER

      let hr2 = document.createElement("hr");
        hr2.className="linea-horizontal"
        detalleProducto.append(hr2);

        calcularTotalCarrito()
        let footer = document.createElement("div");
        footer.className = "detalle-carrito__footer";
        footer.innerHTML = `
        <div class="detalle-total">
          <span> Subtotal</span>
          <span> $${totalAPagar} </span>
        </div>
        <span class="detalle-total__info"> IVA incluido y envíos calculados en el checkout.</span>
        <button id="pasarela-pago" class="detalle-total__btn">CHECKOUT</button>
        `;

        detalleProducto.append(footer);    
        
        document.getElementById("pasarela-pago").addEventListener("click", pasarelaPago)
    }

    function pasarelaPago(){
        Swal.fire({
            text: "Te redirigiremos a un lugar seguro para continuar con el pago",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#ffce12',
            cancelButtonColor: '#000',
        })
    }

    // Validar si el producto escogido es una hamburguesa o tipo parrilla, para que el cliente vea los acompañantes
    function esHamburguesaOrParrilla(producto) {
        if (producto.categoria === "Hamburguesas" || producto.categoria === "Parrilla"){
            return true;
        } 
        return false;
    }   
    