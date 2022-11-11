
//***-------------OBTENER INFORMACIÓN DE LOS PRODUCTOS ----------***//

let productos = [];

fetch('../productos/productos.json') 
.then( (response) => response.json() )
    .then( (data) => {
        productos = data
        renderizarProductos(productos);
    }) 



//***-------------VARIABLES GENERALES----------***//


//-carrito de compras-//
let carritoCompras = [];
let totalAPagar = 0;
let totalCarrito = document.getElementById("total-carrito-compras");
totalCarrito.innerText = `$${totalAPagar}`;

//-Modificar producto del carrito de compras-//
let ModificarProductoCarrito = false;


//-Modal producto-//
let modalProducto = document.getElementById("modal-producto");
let contenedorModalProducto = document.getElementById(
  "contenedor-modal-producto"
);
let cerrarModal = document.getElementById("modal-producto-cerrar");



//-Sidebar carrito de compras-//
let SidebarCarritoBtn = document.getElementById("cart-btn");
let sidebarCarrito = document.getElementById("sidebar-carrito");
let contenedorSidebarCarrito = document.getElementById("contenedor-sidebar");
let cerrarSidebar = document.getElementById("sidebar-cerrar");




//***-------------MOSTRAR DATOS DESDE LOCALSTORAGE----------***//

carritoFromStorage();

function carritoFromStorage() {
  if (localStorage.getItem("carrito") !== null) {
    carritoCompras = JSON.parse(localStorage.getItem("carrito"));
    calcularTotalCarrito();
  }
}




//***-------------FILTRAR PRODUCTOS----------***//

let botonFiltrar = document.getElementById("filtrarProductos");
botonFiltrar.addEventListener("change", () => {
  filtrarProductos(botonFiltrar.value);
});
let titulo = document.getElementById("titulo");
titulo.innerText = "Productos";

function filtrarProductos(producto) {
  productoSeleccionado = productos.filter((el) => el.categoria === producto);
  if (productoSeleccionado.length) {
    titulo.innerText = producto;
    renderizarProductos(productoSeleccionado);
  } else {
    titulo.innerText = "Productos";
    renderizarProductos(productos);
  }
}




//***------------- CARDS PRODUCTOS ----------***//


function renderizarProductos(lista) {
  let listaProductos = document.getElementById("productos");
  listaProductos.innerHTML = "";

  for (const producto of lista) {
    // Card
    let card = document.createElement("div");
    card.className = "card";
    // Imagen
    let cardImg = document.createElement("img");
    cardImg.className = "card__img";
    cardImg.setAttribute("src", producto.imagen);
    cardImg.setAttribute("alt", producto.nombre);
    // Informacion
    let cardInfo = document.createElement("div");
    cardInfo.className = "card__info";
    //Informacion titulo
    let cardTitulo = document.createElement("h5");
    cardTitulo.className = "card-titulo";
    cardTitulo.innerHTML = producto.nombre;
    //Informacion descripcion
    let cardDescripcion = document.createElement("div");
    cardDescripcion.className = "card-descripcion";
    cardDescripcion.innerHTML = producto.descripcion;
    //Informacion precio
    let cardPrecio = document.createElement("div");
    cardPrecio.className = "card-precio";
    cardPrecio.innerHTML = `$${producto.precio}`;
    // boton
    let cardBtn = document.createElement("button");
    cardBtn.className = "card-btn";
    cardBtn.innerHTML = "Agregar";
    cardBtn.addEventListener("click", () => {
      modalProducto.classList.add("modal-active");
      ModalProductoSeleccionado(producto, false);
    });

    cardInfo.append(cardTitulo);
    cardInfo.append(cardDescripcion);
    cardInfo.append(cardPrecio);
    cardInfo.append(cardBtn);
    card.append(cardImg);
    card.append(cardInfo);

    listaProductos.append(card);
  }
}




//***-------------MODAL PRODUCTO SELECCIONADO ----------***//

// Desactivar ventana modal
cerrarModal.addEventListener("click", () => {
  modalProducto.classList.remove("modal-active");
});

//sólo se ejecuta en donde se hace click y no en los elementos del padre
contenedorModalProducto.addEventListener("click", (event) => {
  event.stopPropagation();
});


// HTML de la ventana modal
function ModalProductoSeleccionado(producto, editar) {
  let totalPorProducto = producto.precio;

  let bodyModal = document.getElementById("body-modal-producto");
  bodyModal.innerHTML = "";

  // modal header
  let header = document.createElement("div");
  header.className = "modal-header";
  header.innerHTML = `
    <img class='modal-header__img' src='${producto.imagen}' alt='${producto.nombre}'/>
    <div class='modal-header__descripcion'>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
    </div>`;

  bodyModal.append(header);

  // modal opciones

  // Validación de la categoria del producto, para saber si lleva acompañantes
  if (esHamburguesaOrParrilla(producto)) {
     
    let opciones = document.createElement("div");
    opciones.className = "modal-opciones";
    opciones.innerHTML = `
        <hr>
        <div class='modal-opciones__titulo'>
            <h5>Elige tu acompañante</h5>
            <h6> Obligatorio </h6>
        </div>
        <div class='modal-opciones__opciones'>
            <label for='francesas'>
                <input type='radio' name='acompanante' value='Papas francesas' id='acompanante'>
                Papas francesas
            </label>
            <label for='cascos'>
                <input type='radio' name='acompanante' value='Papas cascos' id='acompanante'>
                Papas cascos
            </label>
            <label for='ensalada'>
                <input type='radio' name='acompanante' value='Ensalada' id='acompanante'>
                Ensalada
            </label>
        </div>
        <hr>
        <div class='modal-opciones__titulo'>
            <h5>Elige tu salsa</h5>
            <h6> Obligatorio </h6>
        </div>
        <div class='modal-opciones__opciones'>
            <label for='ajo'>
                <input type='radio' name='salsa' value='Mayonesa de ajo' id='salsa'>
                Mayonesa de ajo
            </label>
            <label for='chipotle'>
                <input type='radio' name='salsa' value='Mayonesa de chipotle' id='salsa'>
                Mayonesa de chipotle
            </label>
            <label for='albahaca'>
                <input type='radio' name='salsa' value='Mayonesa de albahaca' id='salsa'>
                Mayonesa de albahaca
            </label>
            <label for='pimenton'>
                <input type='radio' name='salsa' value='Mayonesa pimenton' id='salsa'>
                Mayonesa pimenton
            </label>
            <label for='bbq'>
                <input type='radio' name='salsa' value='Bbq Jack Daniels' id='salsa'>
                Bbq Jack Daniels
            </label>
        </div>
        `;
    bodyModal.append(opciones);
  }

  // modal footer
  let footer = document.createElement("div");
  footer.className = "modal-footer";
  footer.innerHTML = `
    <span id="validacion" class='modal-footer__validacion'>
    </span>
    <div class='modal-footer__opciones'>
        <input type='number' name='cantidad' min="1" pattern="^[0-9]+" inputmode="numeric" id="cantidad" value=1>
        <button id='agregar-seleccionado'>Agregar</button>
        <span id='total-producto'>$${totalPorProducto}</span>
    </div>
    `;
  bodyModal.append(footer);

   // Evitar que el usuario pueda escribir números decimales o un caracter númerico "e" en el input type number
   document.getElementById("cantidad").addEventListener("keydown", (event) => {
    if(['.', 'e'].includes(event.key))
    event.preventDefault();
  });


   // Mostrar que inputs radio están checkeados, cuando se está editando el producto
   if (editar === true) {
    checkedInputs('acompanante', producto.acompanante);
    checkedInputs('salsa', producto.salsa);
    cantidad.value = producto.cantidad
  } 
  
  //Validar cuales elementos están checkeados en el input tipo radio, cuando se está editando un producto
  function checkedInputs(name, value) {
    document.querySelectorAll(`input[name="${name}"]`).forEach(element => {
        if(element.value === value) {
            element.checked = true;
        }
    });
  }


  // calcular el total por producto en el modal
  document.getElementById("cantidad").addEventListener("change", () => {
    totalPorProducto = Math.round(cantidad.value) * producto.precio;
    document.getElementById(
      "total-producto"
    ).innerText = `$${totalPorProducto}`;
  });


  // Agregar producto al carrito de compras cuando se da click en botón "agregar"
  let productoEscogido = { ...producto };
  document.getElementById("agregar-seleccionado").addEventListener("click", () => {
    if(editar === false){
      agregarProductoCarrito();
    } else {
      editarProductoCarrito()
    }

  });


  // agregar un nuevo producto al carrito
  function agregarProductoCarrito() {

     if (esHamburguesaOrParrilla(producto)) {
      let acompanante = document.querySelector('input[name="acompanante"]:checked');
      let salsa = document.querySelector('input[name="salsa"]:checked');
      if (acompanante && salsa) {
        productoEscogido.acompanante = acompanante.value;
        productoEscogido.salsa = salsa.value;
        productoEscogido.cantidad = totalPorProducto / producto.precio;
        validarExistentesCarrito(productoEscogido)
        modalProducto.classList.remove("modal-active");
        calcularTotalCarrito();
      } else {
        document.getElementById("validacion").innerText =
          "Por favor completa los datos*";
      }
    } else {
        productoEscogido.cantidad = totalPorProducto / producto.precio;
        validarExistentesCarrito(productoEscogido)
        modalProducto.classList.remove("modal-active");
        calcularTotalCarrito();
    }
    // Animación para el botón del carrito, cuando se agrega un nuevo producto
    SidebarCarritoBtn.classList.add('animate__rubberBand')
    setTimeout(() => {
      SidebarCarritoBtn.classList.remove('animate__rubberBand')
    }, 1500)
  }


  // Editar producto existente del carrito
  function editarProductoCarrito(){
    let indiceProducto = carritoCompras.findIndex((el) => el.id === producto.id)
    let cantidadProducto = parseInt(cantidad.value, 10)
    carritoCompras[indiceProducto].cantidad = cantidadProducto;
    if (esHamburguesaOrParrilla(producto)){
      let acompanante = document.querySelector('input[name="acompanante"]:checked');
      let salsa = document.querySelector('input[name="salsa"]:checked');
      carritoCompras[indiceProducto].acompanante = acompanante.value;
      carritoCompras[indiceProducto].salsa = salsa.value;
    } 
    modalProducto.classList.remove("modal-active");
    calcularTotalCarrito();
    sidebarCarritoCompras();
  }
}


// Validar si el producto escogido es una hamburguesa o tipo parrilla, para que el cliente seleccione los acompañantes
function esHamburguesaOrParrilla(producto) {
    if (producto.categoria === "Hamburguesas" || producto.categoria === "Parrilla"){
        return true;
    } 
    return false;
}

// Validar si el producto escogido ya existe dentro del carrito de compras
function validarExistentesCarrito(producto) {
  let indiceProductoRepetido = -1;
  if (esHamburguesaOrParrilla(producto)) {
    indiceProductoRepetido = carritoCompras.findIndex((el) => el.id === producto.id && el.acompanante ===  producto.acompanante && el.salsa === producto.salsa);
  } else {
    indiceProductoRepetido = carritoCompras.findIndex((el) => el.id === producto.id);
  }
  indiceProductoRepetido === -1
  ? carritoCompras.push(producto)
  : carritoCompras[indiceProductoRepetido].cantidad += producto.cantidad
}



//***-------------SIDEBAR CARRITO DE COMPRAS ----------***//


//Activar ventana sidebar
SidebarCarritoBtn.addEventListener("click", () => {
  sidebarCarrito.classList.add("active");
  sidebarCarritoCompras()
});

//Desactivar ventana sidebar
cerrarSidebar.addEventListener("click", () => {
  sidebarCarrito.classList.remove("active");
});

//sólo se ejecuta en donde se hace click y no en los elementos del padre
contenedorSidebarCarrito.addEventListener("click", (event) => {
  event.stopPropagation();
});



//HTML del sidebar
function sidebarCarritoCompras() {
  let bodySidebar = document.getElementById("body-sidebar");
  bodySidebar.innerHTML = "";

  //Titulo
  let titulo = document.createElement("div");
  titulo.className = "sidebar-titulo";
  titulo.innerHTML = `
    <h3> Mi pedido</h3>
    <hr>
    `;
  bodySidebar.append(titulo); 

  //Produtos carrito
  let productosCarrito = document.createElement("div");
  productosCarrito.className = "sidebar-productos";

    //Validación si el carrito de compras tiene productos
  if (!carritoCompras.length) {
    productosCarrito.innerHTML = `
        <span class='sidebar-productos__sin-productos'>
            Cuando agregues productos se verán aquí.
        </span>
        `
        bodySidebar.append(productosCarrito);     

  } else {
    //Mostrar detalle de los prodcutos del carrito
    carritoCompras.forEach((producto) => {

      let headerProducto = document.createElement("div");
      headerProducto.className = 'sidebar-productos__productos'
      headerProducto.innerHTML =`
      <div class='sidebar-productos__productos--left'>
        (${producto.cantidad}) ${producto.nombre}
      </div>
      `;

      let descripcionProducto = document.createElement("div");
      descripcionProducto.className = 'sidebar-productos__productos--right'

      // Precio producto
      let precio = document.createElement("span");
      precio.innerHTML = `$${producto.cantidad*producto.precio}`;

      // boton Editar del carrito
      let editarBtn = document.createElement("button");
      editarBtn.className = "editar";
      editarBtn.dataset.product = JSON.stringify(producto)
      editarBtn.innerHTML = "Editar";
      editarBtn.addEventListener('click', editarProducto)

      // boton eliminar del carrito
      let eliminarBtn = document.createElement("button");
      eliminarBtn.className = "eliminar";
      eliminarBtn.dataset.productoId = producto.id
      eliminarBtn.innerHTML = "Eliminar";
      eliminarBtn.addEventListener("click", eliminarProducto);
      
      descripcionProducto.append(precio)
      descripcionProducto.append(editarBtn)
      descripcionProducto.append(eliminarBtn)
      headerProducto.append(descripcionProducto)
      productosCarrito.append(headerProducto);
      
      // Validación de la categoria del producto, para saber si lleva acompañantes
      if(esHamburguesaOrParrilla(producto)){
          let descripcionAcompanante = document.createElement("div");
          descripcionAcompanante.className = "sidebar-acompanante";
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
          productosCarrito.append(descripcionAcompanante); 
      } 
        let hr = document.createElement("hr");
        productosCarrito.append(hr);

    })
    
    bodySidebar.append(productosCarrito);
  }

  //Total carrito en el sidebar
  let footer = document.createElement("div");
  footer.className = "sidebar-footer";
  footer.innerHTML = `
  <div class="sidebar-footer__total">
    <span> Total</span>
    <span id='total-sidebar'> $${totalAPagar} </span>
  </div>
  <button id="continuar-pedido 
  "class="sidebar-footer__btn"><a href="../pages/pedido.html">Continuar Pedido</a></button>
  `;
  bodySidebar.append(footer); 

  

}

//***-------------EDITAR, ELIMINAR Y CALCULAR TOTAL DEL CARRITO DE COMPRAS----------***//


//-------------ELIMINAR PRODUCTO DEL CARRITO DE COMPRAS ----------//


function eliminarProducto(event) {
  let id = parseInt(event.target.dataset.productoId, 10);
  let indexProducto = carritoCompras.findIndex((el) => el.id === id);
  carritoCompras.splice(indexProducto,1);
  calcularTotalCarrito();
  sidebarCarritoCompras();
}

//-------------EDITAR PRODUCTO DEL CARRITO DE COMPRAS ----------//


function editarProducto(event) {
  let productSeleccionado = JSON.parse(event.target.dataset.product)
  modalProducto.classList.add("modal-active");
  ModalProductoSeleccionado(productSeleccionado, true)
}




//-------------CALCULAR TOTAL EN EL CARRITO DE COMPRAS ----------//

function calcularTotalCarrito() {
  totalAPagar = 0;
  carritoCompras.forEach((el) => {
    totalAPagar += el.precio * el.cantidad
  })

  totalCarrito.innerText = `$${totalAPagar}`;
  saveCarritoToStorage();
}


//-------------ALMACENAR DATOS DEL CARRITO DE COMPRAS EN LOCALSTORAGE ------///


function saveCarritoToStorage() {
  localStorage.setItem("carrito", JSON.stringify(carritoCompras));
}
