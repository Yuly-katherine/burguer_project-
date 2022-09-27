
//------------------------------------PRODUCTOS----------------------------------//
//* Tipos de hamburguesas

 function Burguer(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
 }

let queen = new Burguer( "Bulleit Queen", 33500)
let candy = new Burguer( "Candy Crunch", 31900)
let jack = new Burguer( "Jack Philadelphia", 32500)
let tripleX = new Burguer( "Triple X", 32900)
let classic = new Burguer( "Classic", 28900)
let hawaii = new Burguer( "Hawaii", 33500)


//* Tipos de Bebidas

function Bebida(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
 }

let piña = new Bebida( "Jugo fresa", 8500)
let limonada = new Bebida( "Limonada", 7500)
let coco = new Bebida( "Limoada de Coco", 10500)
let gaseosa = new Bebida( "Gaseosa", 5500)
let cerveza = new Bebida( "Cerveza", 11500)
let hatsu = new Bebida( "Hatsu", 5000)



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


//-----------------------COMPRAR BURGER------------------------------------//

function comprarBurger() {

    let cantidadBurguers = parseInt(prompt("Que cantidad de hamburguesas diferentes deseas llevar: "))

    if (cantidadBurguers >= 7) {
        alert ("En el menú no tenemos más de 6 tipos de hamburguesas diferentes.")
    } else {

        for(let i = 0; i< cantidadBurguers; i=i+1 ){

            let burguerSeleccionada = prompt("Ingrese el nombre de la hamburguesa que deseas comprar:  \n  - Queen  \n  - Candy  \n  - Jack  \n  - TripleX  \n  - Classic \n  - Hawaii")
    
             if (burguerSeleccionada.toLocaleLowerCase() === "queen") {
                let cantidadQueen = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(queen.precio, cantidadQueen )
    
            } else if (burguerSeleccionada.toLocaleLowerCase() === "candy") {
                let cantidadCandy = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(candy.precio, cantidadCandy )
    
            } else if (burguerSeleccionada.toLocaleLowerCase() === "jack") {
                let cantidadJack = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(jack.precio, cantidadJack )
    
            } else if (burguerSeleccionada.toLocaleLowerCase() === "triplex") {
                let cantidadTripleX = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(tripleX.precio, cantidadTripleX )
    
            } else if (burguerSeleccionada.toLocaleLowerCase() === "classic") {
                let cantidadClassic = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(classic.precio, cantidadClassic )
    
            } else if (burguerSeleccionada.toLocaleLowerCase() === "hawaii") {
                let cantidadHawaii = parseInt(prompt("Que cantidad de hamburguesa " + burguerSeleccionada + " deseas llevar: "))
                calcularPrecioBurger(hawaii.precio,cantidadHawaii )
    
            } else {
                alert("El nombre escrito no está en la lista, precione cancelar y nuevamente empiece con la solicitud de su compra.")
            }
    
        }

        let continuarCompra = prompt ("Si deseas comprar una bebida, escribe: \n Si \n No")
        if (continuarCompra.toLocaleLowerCase() == "si") {
            comprarBebida()
        } else {
            if (precioTotalBurger != 0){
                domicilio()
            }
        }

    }
}



//-----------------------COMPRAR BEBIDA------------------------------------//

function comprarBebida() {

    
    let cantidadBebidas = parseInt(prompt("Que cantidad de bebidas diferentes deseas llevar: "))

    if (cantidadBebidas >= 7) {
        alert ("En el menú no tenemos más de 6 tipos de bebidas diferentes.")
    } else {

        for(let i = 0; i< cantidadBebidas; i=i+1 ){

            let bebidaSeleccionada = prompt("Ingrese el nombre de la bebida que deseas comprar:  \n - Piña  \n - Limonada  \n - Coco  \n - Gaseosa  \n - Cerveza \n - Hatsu")
    
            if (bebidaSeleccionada.toLocaleLowerCase() === "piña") {
                let cantidadPiña = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(piña.precio, cantidadPiña )
    
            } else if (bebidaSeleccionada.toLocaleLowerCase() === "limonada") {
                let cantidadLimonada = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(limonada.precio, cantidadLimonada )
    
            } else if (bebidaSeleccionada.toLocaleLowerCase() === "coco") {
                let cantidadCoco = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(coco.precio, cantidadCoco )
    
            } else if (bebidaSeleccionada.toLocaleLowerCase() === "gaseosa") {
                let cantidadGaseosa = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(gaseosa.precio, cantidadGaseosa )
    
            } else if (bebidaSeleccionada.toLocaleLowerCase() === "cerveza") {
                let cantidadCerveza = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(cerveza.precio, cantidadCerveza )
    
            } else if (bebidaSeleccionada.toLocaleLowerCase() === "hatsu") {
                let cantidadHatsu = parseInt(prompt("Que cantidad de bebidas de " + bebidaSeleccionada + " deseas llevar: "))
                calcularPrecioBebida(hatsu.precio,cantidadHatsu )
    
            }  else {
                alert("El nombre escrito no está en la lista, precione cancelar y nuevamente empiece con la solicitud de su compra")
            }
    
        }
        if (precioTotalBebidas != 0 ){
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