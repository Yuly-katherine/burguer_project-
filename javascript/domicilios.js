//-------------VARIABLES----------//

let carritoCompras = []
let totalAPagar = 0
let totalCarrito = document.getElementById('total-carrito-compras')
totalCarrito.innerText =`$${totalAPagar}` 

//-Modal producto-//
let modalProducto = document.getElementById('modal-producto')
let contenedorModalProducto = document.getElementById('contenedor-modal-producto')
let botonCerrar = document.getElementById('modal-producto-cerrar')

carritoFromStorage() 

function carritoFromStorage() {
    if (localStorage.getItem('carrito') !== null){
        carritoCompras = JSON.parse(localStorage.getItem('carrito'))
        agregarAlCarrito()

    }
}


//-------------FILTRAR PRODUCTOS----------//

let botonFiltrar = document.getElementById('filtrarProductos')
botonFiltrar.addEventListener('change', () => { filtrarProductos(botonFiltrar.value) })
let titulo = document.getElementById('titulo')
titulo.innerText = 'Productos'

function filtrarProductos(producto) {
    productoSeleccionado = productos.filter((el) => el.categoria === producto)
    if (productoSeleccionado.length) {
        titulo.innerText = producto
        renderizarProductos(productoSeleccionado)
    } else {
        titulo.innerText = 'Productos'
        renderizarProductos(productos)
    }
}

//-------------PRODUCTOS EN EL HTML----------//

renderizarProductos(productos)

function renderizarProductos(lista) {
    let listaProductos = document.getElementById('productos')
    listaProductos.innerHTML = ''

    for (const producto of lista) {
        // Card
        let card = document.createElement('div')
        card.className = 'card'
        // Imagen
        let cardImg = document.createElement('img')
        cardImg.className = 'card__img'
        cardImg.setAttribute('src', producto.imagen)
        cardImg.setAttribute('alt', producto.nombre)
        // Informacion
        let cardInfo = document.createElement('div')
        cardInfo.className = 'card__info'
        //Informacion titulo
        let cardTitulo = document.createElement('h5')
        cardTitulo.className = 'card-titulo'
        cardTitulo.innerHTML = producto.nombre
        //Informacion descripcion
        let cardDescripcion = document.createElement('div')
        cardDescripcion.className = 'card-descripcion'
        cardDescripcion.innerHTML = producto.descripcion
        //Informacion precio
        let cardPrecio = document.createElement('div')
        cardPrecio.className = 'card-precio'
        cardPrecio.innerHTML = `$${producto.precio}`
        // boton
        let cardBtn = document.createElement('button')
        cardBtn.className = 'card-btn'
        cardBtn.innerHTML = 'Agregar'
        cardBtn.setAttribute('id', 'boton-carrito')
        cardBtn.addEventListener('click', () => {
            if (producto.categoria === "Hamburguesas" || 
                producto.categoria === "Parrilla") {
                modalProducto.classList.add('modal-active')
                ModalProductoSeleccionado(producto)
            } else {
                carritoCompras.push(producto)
                agregarAlCarrito()
            }
        })

        cardInfo.append(cardTitulo)
        cardInfo.append(cardDescripcion)
        cardInfo.append(cardPrecio)
        cardInfo.append(cardBtn)
        card.append(cardImg)
        card.append(cardInfo)

        listaProductos.append(card)
    }
}

//-------------MODAL PRODUCTO SELECCIONADO ----------//


botonCerrar.addEventListener('click', () => {
    modalProducto.classList.remove('modal-active')
})

 //sólo se ejecuta en donde se hace click y no en los elementos del padre
contenedorModalProducto.addEventListener('click', (event) => {
    event.stopPropagation()
})

function ModalProductoSeleccionado(producto) {

    let totalPorProducto = producto.precio

    let bodyModal = document.getElementById('body-modal-producto')
    bodyModal.innerHTML = ''

    // modal header
    let header = document.createElement('div')
    header.className = 'modal-header'
    header.innerHTML = `
    <img class='modal-header__img' src='${producto.imagen}' alt='${producto.nombre}'/>
    <div class='modal-header__descripcion'>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
    </div>`

    // modal opciones
    let opciones = document.createElement('div')
    opciones.className = 'modal-opciones'
    opciones.innerHTML = `
    <hr>
    <div class='modal-opciones__titulo'>
        <h5>Elige tu acompañante</h5>
        <h6> Obligatorio </h6>
    </div>
    <div class='modal-opciones__opciones'>
        <label for='francesas'>
            <input type='radio' name='acompañante' value='Papas francesas' id='acompañante'>
            Papas francesas
        </label>
        <label for='cascos'>
            <input type='radio' name='acompañante' value='Papas cascos' id='acompañante'>
            Papas cascos
        </label>
        <label for='ensalada'>
            <input type='radio' name='acompañante' value='Ensalada' id='acompañante'>
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
    `
    // modal footer
    let footer = document.createElement('div')
    footer.className = 'modal-footer'
    footer.innerHTML = `
    <span id="validacion" class='modal-footer__validacion'>
    </span>
    <div class='modal-footer__opciones'>
        <input type='number' name='cantidad' min="1" pattern="^[0-9]+" inputmode="numeric" id="cantidad" value=1>
        <button id='agregar-seleccionado'>Agregar</button>
        <span id='total-producto'>$${totalPorProducto}</span>
    </div>
    `
    bodyModal.append(header)
    bodyModal.append(opciones)
    bodyModal.append(footer)


    // calcular total por producto 
    document.getElementById('cantidad').addEventListener('change', () => {
        totalPorProducto = cantidad.value * producto.precio
        document.getElementById('total-producto').innerText = `$${totalPorProducto}`
    })

    // agragar al carrito
    
    document.getElementById('agregar-seleccionado').addEventListener('click', () => { 

        let acompañante = document.querySelector('input[name="acompañante"]:checked')
        let salsa = document.querySelector('input[name="salsa"]:checked')
        if (acompañante && salsa){
            let productoEscogido = {...producto}
            productoEscogido.acompañante = acompañante.value
            productoEscogido.salsa = salsa.value
            productoEscogido.precio = totalPorProducto
            carritoCompras.push(productoEscogido)
            modalProducto.classList.remove('modal-active')
            agregarAlCarrito()
        } else {
            document.getElementById('validacion').innerText = "Por favor completa los datos*"
        }
    }) 
}


//-------------MODAL CARRITO ----------//


function agregarAlCarrito() {
    for(let i=0; i<carritoCompras.length; i++) { 
        totalAPagar +=  carritoCompras[i].precio
    }
    totalCarrito.innerText =`$${totalAPagar}` 
    saveCarritoToStorage()

}

function saveCarritoToStorage() {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras))
}