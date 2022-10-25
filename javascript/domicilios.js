
//-------------FILTRAR PRODUCTOS----------//

let botonFiltrar = document.getElementById('filtrarProductos')
botonFiltrar.addEventListener('change', () => {filtrarProductos(botonFiltrar.value)})
let titulo = document.getElementById('titulo')
titulo.innerText = 'Productos'

function filtrarProductos(producto){
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
        card.className ='card'
        // Imagen
        let cardImg = document.createElement('img')
        cardImg.className ='card__img'
        cardImg.setAttribute('src', producto.imagen)
        // Informacion
        let cardInfo = document.createElement('div')
        cardInfo.className ='card__info'
        //Informacion titulo
        let cardTitulo = document.createElement('h5')
        cardTitulo.className ='card-titulo' 
        cardTitulo.innerHTML = producto.nombre
        //Informacion descripcion
        let cardDescripcion = document.createElement('div')
        cardDescripcion.className ='card-descripcion' 
        cardDescripcion.innerHTML = producto.descripcion
        //Informacion precio
        let cardPrecio = document.createElement('div')
        cardPrecio.className ='card-precio' 
        cardPrecio.innerHTML = `$${producto.precio}` 
        // boton
        let cardBtn = document.createElement('button')
        cardBtn.className ='card-btn' 
        cardBtn.innerHTML = 'Agregar'
        cardBtn.setAttribute('id', 'boton-carrito')
        cardBtn.addEventListener('click', ()=>{ modalProducto.classList.add('modal-active')} )
        cardBtn.addEventListener('click', ()=>{ModalProductoSeleccionado(producto)})

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


let modalProducto = document.getElementById('modal-producto')
let contenedorModalProducto = document.getElementById('contenedor-modal-producto')
let botonCerrar = document.getElementById('modal-producto-cerrar')

botonCerrar.addEventListener('click', ()=>{
    modalProducto.classList.remove('modal-active')
})

contenedorModalProducto.addEventListener('click', (event) => {
    event.stopPropagation() 
    //sólo se ejecuta en donde se hace click y no en los elementos del padre
})

function ModalProductoSeleccionado(producto){
    console.log(producto)
    
    let bodyModal = document.getElementById('body-modal-producto')
    bodyModal.innerHTML = ''
    // modal header
    let header = document.createElement('div')
    header.className ='modal-header'
    header.innerHTML = `
    <img class='modal-header__img' src='${producto.imagen}'/>
    <div class='modal-header__descripcion'>
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    </div>`

    bodyModal.append(header)

    
}
