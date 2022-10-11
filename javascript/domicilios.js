//------------------------------------PRODUCTOS----------------------------------//

function Producto(nombre, precio, categoria, descripcion, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.descripcion = descripcion || "";
    this.imagen = imagen || "";
 }

let queen = new Producto( "Bulleit Queen", 33500, "Hamburguesa", "Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada.", "https://tofuu.getjusto.com/orioneat-prod-resized/mjxgZ2KwZyPBx2aaG-350-350.webp")

let candy = new Producto( "Candy Crunch", 31900 , "Hamburguesa", "Pan brioche, mayonesa de la casa, mézclum de lechugas, 150 gms de carne premiun", "https://tofuu.getjusto.com/orioneat-local/resized2/HYWPSc3SCBsZg75wd-350-350.webp")

let jack = new Producto( "Jack Philadelphia", 32500 , "Hamburguesa", "Pan brioche, 150 grs de carne premium, queso philadelfia, tocineta bañada en BBQ Jack Daniels.", "https://tofuu.getjusto.com/orioneat-prod-resized/tJ4x6AYP3fmbFNTFg-350-350.webp" )

let tripleX = new Producto( "Triple X", 32900, "Hamburguesa", "Pan brioche, 100 grs de carne premium, 60 grs de bondiola de cerdo en Bbq Sailor, queso philadelfia.", "https://tofuu.getjusto.com/orioneat-prod-resized/m9ZdtkhW7tHhmeMtQ-350-350.webp")

let classic = new Producto( "Classic", 28900, "Hamburguesa", "Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada", "https://tofuu.getjusto.com/orioneat-prod-resized/4unFA9hhMqsGj6rG3-350-350.webp" )

let hawaii = new Producto( "Hawaii", 33500, "Hamburguesa", "Pan brioche, 150 grs de carne premium, jamón de york, queso americano, piña asada, BBQ, lechuga y tomate.", "https://tofuu.getjusto.com/orioneat-prod-resized/2CNhPGb63jLWp5b9x-350-350.webp" )

let piña = new Producto( "Jugo fresa", 8500, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/kDBaFx8G8PjwqLGdm-350-350.webp" )

let limonada = new Producto( "Limonada", 7500, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/NSCvvxpPDfgkseWgT-350-350.webp")

let coco = new Producto( "Limoada de Coco", 10500, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/G8c2EML7GvYQwY6sD-350-350.webp")

let gaseosa = new Producto( "Gaseosa", 5500, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/wYedtgMwWKWPqn3gR-350-350.webp")

let cerveza = new Producto( "Cerveza", 11500, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/7ywaE4FmQ7Ch2rXZ5-350-350.webp")

let hatsu = new Producto( "Hatsu", 5000, "Bebida", "", "https://tofuu.getjusto.com/orioneat-prod-resized/EELNyvGRFS5oQhatZ-350-350.webp")


listaDeProductos = [queen,candy, jack, tripleX, classic, hawaii, piña, limonada, coco, gaseosa, cerveza, hatsu]

let hamburguesas = listaDeProductos.filter((item) => item.categoria === "Hamburguesa")
let bebidas = listaDeProductos.filter((item) => item.categoria === "Bebida")
let listaBurguerNombres = hamburguesas.map((item) => item.nombre)
let listaBebidasNombres = bebidas.map((item) => item.nombre)

//-------------------------EN CONSTRUCCIÓN---------------------------// 

// function renderizarProducto(lista, categoria) {
//     for (const producto of lista) {
//         let card = document.createElement("div")
//         card.className ="card"
//         card.innerHTML = 
//         `<img class="card__img" src="${producto.imagen}"/>
//          <div class="card__descripcion">
//             <p>${producto.nombre}</p>
//             <span>${producto.descripcion}</span>
//             <span class="precio">$${producto.precio}</span>
//             <button>Agregar</button>
//          </div>`
//         categoria.append(card) 
//     }
// }
// let getHamburguesas = document.getElementById("burguer")
// renderizarProducto(hamburguesas, getHamburguesas)

// let getBebidas = document.getElementById("bebidas")
// renderizarProducto(bebidas, getBebidas)

//---------------------------------------------------------------------------//

let precioTotalBurger = 0
let precioTotalBebidas = 0
let precioDomicilio = 0


function calcularPrecioBurger ( precio, cantidad ) {
    precioTotalBurger +=  (precio * cantidad) 
}

function calcularPrecioBebida ( precio, cantidad ) {
    precioTotalBebidas +=  (precio * cantidad) 
}


alert("¡Bienvendo a Burger Chips! En este lugar somos buena onda, creemos que lo bueno se comparte, nos gusta dejarla toda en la parrilla.\n Si deseas realizar una compra da click en el botón 'Comprar'.")


//-----------------------COMPRAR HAMBURGUESA------------------------------------//

function comprarBurguer() {

    let burguerSeleccionada = prompt("Ingrese el número de la hamburguesa que deseas comprar:  \n0  - Queen  \n1  - Candy  \n2  - Jack  \n3  - TripleX  \n4  - Classic \n5  - Hawaii")

    if (burguerSeleccionada >= 1 || burguerSeleccionada <6 ) {

        for(let i = 0; i< hamburguesas.length ; i=i+1 ) {
             if (burguerSeleccionada == i) {
                let cantidad = parseInt(prompt("Que cantidad de hamburguesa " 
                + hamburguesas[i].nombre + " deseas llevar: "))
                calcularPrecioBurger(hamburguesas[i].precio, cantidad )
             }
        }
    } else {
        alert("El número ingresado no es válido")
    }
    
    let continuarCompra = prompt ("Deseas comprar una bebida, escribe: \n1- Si \n2- No")

        if (continuarCompra.toLocaleLowerCase() == "si" || continuarCompra == 1) {
            comprarBebida()
        } else {
            if (precioTotalBurger != 0){
                domicilio()
            }
        }
}

//-----------------------COMPRAR BEBIDA------------------------------------//

function comprarBebida() {

    let bebidaSeleccionada = prompt("Ingrese el número de la bebida que deseas comprar:  \n0 - Piña  \n1 - Limonada  \n2 - Coco  \n3 - Gaseosa  \n4 - Cerveza \n5 - Hatsu")

    if (bebidaSeleccionada >= 1 || bebidaSeleccionada <6 ) {

        for(let i = 0; i< bebidas.length ; i=i+1 ) {
             if (bebidaSeleccionada == i) {
                let cantidad = parseInt(prompt("Que cantidad de " 
                + bebidas[i].nombre + " deseas llevar: "))
                calcularPrecioBebida(bebidas[i].precio, cantidad )
             }
        }
    } else {
        alert("El número ingresado no es válido")
    }

    let otraCompra = prompt ("Deseas comprar otra hamburguesa, escribe: \n1- Si \n2- No")

        if (otraCompra.toLocaleLowerCase() == "si"  || otraCompra == 1) {
            comprarBurguer()
        } else {
            if (precioTotalBebidas != 0){
                domicilio()
            }
        }
        if (precioTotalBurger != 0){
            domicilio()
        }    
}

//-----------------------DOMICILIO------------------------------------//

function domicilio() {
    let direccion = prompt("Por favor, ingresa la dirección de tu residencia, para calcular el costo del domicilio")
    if (direccion.length <5) {
        precioDomicilio = 5000
    } else  {
        precioDomicilio = 10000
    }
    let totalCompra = precioTotalBurger + precioTotalBebidas + precioDomicilio

    alert("Resumen:  \n Total hamburguesas: $" + precioTotalBurger + "COP \n Total Bebidas: $" + precioTotalBebidas + "COP  \n Domicilio:$" + precioDomicilio + "COP \n Total:$"+ totalCompra +"COP \n ¡Gracias por tu compra!" );
    vaciarCarrito()
}  

function vaciarCarrito() {
    precioTotalBurger = 0
    precioTotalBebidas = 0
    precioDomicilio = 0
}