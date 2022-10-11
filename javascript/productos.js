//------------------------------------PRODUCTOS----------------------------------//


function Producto(nombre, precio, categoria, descripcion, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.descripcion = descripcion || "";
    this.imagen = imagen || "";
 }

let queen = new Producto( "Bulleit Queen", 33500, "Hamburguesa","Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada, queso crema saborizado en Bulleit Bourbon y cristales de azúcar, aros de cebolla apanados artesanalmente, mermelada de vinagre de cidra con panceta ahumada y manzana, mézclum de lechugas frescas", "https://tofuu.getjusto.com/orioneat-prod-resized/mjxgZ2KwZyPBx2aaG-350-350.webp" )

let candy = new Producto( "Candy Crunch", 31900, "Hamburguesa","Pan brioche, mayonesa de la casa, mézclum de lechugas, 150 gms de carne premiun, queso cheddar, tocineta ahumada confitada, dip de queso crema, mermelada de tomate chonto y ojuelas crocantes.", "https://tofuu.getjusto.com/orioneat-local/resized2/H5spRjrMdRX7XwtBJ-350-350.webp")

let classic = new Producto( "Classic", 28900, "Hamburguesa", "Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada, cebolla caramelizada en cerveza,lechuga y tomate.","https://tofuu.getjusto.com/orioneat-prod-resized/4unFA9hhMqsGj6rG3-350-350.webp")

let jack = new Producto( "Jack Philadelphia", 32500, "Hamburguesa", "Pan brioche, 150 grs de carne premium, queso philadelfia, tocineta bañada en BBQ Jack Daniels, cebolla caramelizada en cerveza y mézclum de lechugas.","https://tofuu.getjusto.com/orioneat-prod-resized/tJ4x6AYP3fmbFNTFg-350-350.webp")

let tripleX = new Producto( "Triple X", 32900, "Hamburguesa","Pan brioche, 100 grs de carne premium, 60 grs de bondiola de cerdo en Bbq Sailor, queso philadelfia, tocineta apanada y mezclum de lechugas.", "https://tofuu.getjusto.com/orioneat-prod-resized/m9ZdtkhW7tHhmeMtQ-350-350.webp")

let bufaloCrispy = new Producto( "Búfalo Chicken Crispy", 33000, "Hamburguesa", "Pan brioche, filete de pechuga a la plancha o apanada, queso cheddar, tocineta ahumada, Bbq de sriracha (PICANTE), lechuga, tomate y cebolla fresca.","https://tofuu.getjusto.com/orioneat-local/resized2/gHajRndpyTag2ffHM-1200-1200.webp")

let hawaii = new Producto( "Hawaii", 33500, "Hamburguesa","Pan brioche, 150 grs de carne premium, jamón de york, queso americano, piña asada, BBQ, lechuga y tomate.", "https://tofuu.getjusto.com/orioneat-prod-resized/2CNhPGb63jLWp5b9x-350-350.webp")

let bufaloChicken = new Producto( "Búfalo Chicken", 30900, "Hamburguesa", "Pan brioche, filete de pechuga a la plancha o apanada, queso cheddar, tocineta ahumada, Bbq de sriracha (PICANTE), lechuga, tomate y cebolla fresca.","https://tofuu.getjusto.com/orioneat-prod-resized/szPnPe2oBZLYtAgHP-1200-1200.webp")

let cuate = new Producto( "Búffalo Chicken", 33900, "Hamburguesa", "Pan de finas hierbas, 150 grs de carne premium picante, tortilla de maíz, guacamole, queso cheddar, tocineta ahumada, lechuga, tomate y cebolla fresca.","https://tofuu.getjusto.com/orioneat-local/resized2/esE52Rcm8usEh52gE-1200-1200.webp")

let gaucha = new Producto( "Gaucha", 33900, "Hamburguesa", "Pan campesino 150 grs de carne de res queso cheddar chorizo argentino chimichurri casero lechuga tomate y cebolla fresca.","https://tofuu.getjusto.com/orioneat-local/resized2/AjZQrNqKa42jQs39b-1200-1200.webp")

let glaseada = new Producto( "Gaucha", 31900, "Hamburguesa", "Pan brioche, 75 grs de carne premium, mayonesa griega, pepinillos, 75 grs de carne premium bañada en fondue cheddar, tocineta ahumada y mozzarella rallado.","https://tofuu.getjusto.com/orioneat-local/resized2/GqafLF6Y9K8nhTpKD-1200-1200.webp")

let greek = new Producto( "Greek", 34500, "Hamburguesa", "Pan campesino, mayonesa griega, 150 grs de carne premium rellena de queso feta, cebolla caramelizada en cerveza, tocineta ahumada, aguacate y mézclum de lechugas.","https://tofuu.getjusto.com/orioneat-local/resized2/AAfdvvnxogyxyoGF5-1200-1200.webp")

let guavajelly = new Producto( "Guavajelly", 33900, "Hamburguesa", "Pan brioche, mayonesa artesanal griega, lechuga, tomate, 150 gms de carne premium, queso costeño de búfala frito, tocineta ahumada y crocante de plátano.","https://tofuu.getjusto.com/orioneat-local/resized2/BZECpnpNqdtTNwXRM-350-350.webp")

let holanda = new Producto( "Holanda", 32900, "Hamburguesa", "Pan campesino, 150 grs de carne premium rellena de queso cheddar, guacamole, tocineta ahumada, lechuga, tomate y cebolla fresca.","https://tofuu.getjusto.com/orioneat-prod-resized/qbjgKFtCH2JE3cjjN-1200-1200.webp")

let KidRes = new Producto( "Kid Burguer de Res", 18900, "Hamburguesa", "Pan mini campesino, 75 grs de carne premium, o pollo krispi, queso cheddar, tomate, lechuga y papas a la francesa","https://tofuu.getjusto.com/orioneat-local/resized2/huhtxwrRH3XBb2k6N-1200-1200.webp")

let oficinera = new Producto( "La Oficinera", 26900, "Hamburguesa", "Pan brioche, 120 grs de carne premium, queso cheddar, lechuga, tomate, cebolla fresca, o caramelizada.","https://tofuu.getjusto.com/orioneat-local/resized2/BwzZamFSuhCs3YHSM-1200-1200.webp")

let newYork = new Producto( "New York", 32900, "Hamburguesa", "Pan campesino,150 grs de carne premium, queso cheddar, aros de cebolla artesanales,tocineta ahumada, bbq, lechuga y tomate.","https://tofuu.getjusto.com/orioneat-local/resized2/wMeLMyr6CGWh4suJR-1200-1200.webp")

let officeDate = new Producto( "Office Date", 33900, "Hamburguesa", "Pan brioche nevado y sellado con mantequilla mayonesa de la casa a base de ají amarillo y cilantro, 150 grs de carne premium, queso philadelphia, mermelada de tomate chonto, tocineta ahumada, hojuelas crujientes y mézclum de lechugas hidropónicas.","https://tofuu.getjusto.com/orioneat-prod-resized/93xuzRcj6HnWFGDgR-1200-1200.webp")

let officeFestival = new Producto( "Office Festival", 34900, "Hamburguesa", "Pan brioche, salsa Office de la casa, doble carne premium, queso cheddar, tocineta glaseada en BBQ Jack Daniels, cebolla caramelizada en frutos rojos, queso filadelfia y mezclum de lechugas.","https://tofuu.getjusto.com/orioneat-local/resized2/DwDhutTzk3P7sBB2a-1200-1200.webp")

let officeCarronza = new Producto( "Office en Carronza", 34900, "Hamburguesa", "Pan brioche, 150 grs de carne premium glaseada en BBQ de uchuva, queso mozzarella apanado, tocineta ahumada y mézclum de lechugas.","https://tofuu.getjusto.com/orioneat-local/resized2/RxATmbMvfHFWcn4he-1200-1200.webp")

let ribSailor = new Producto( "Rib Sailor", 33900, "Hamburguesa", "Pan campesino, pepinillos, 120 grs de costilla glaseada en Bbq Sailor, tocineta ahumada, queso philadelfia y mézclum de lechugas.","https://tofuu.getjusto.com/orioneat-local/resized2/ZT55ZvwPWPScP3qzc-1200-1200.webp")

let officeB = new Producto( "The office B", 32900, "Hamburguesa", "Pan campesino,150 grs de carne premuim, aderezo de queso azul, peras glaseadas, tocineta, mézclum de lechugas y bbq de Jack Daniels.","https://tofuu.getjusto.com/orioneat-local/resized2/25f7op3vjDxAXFRTQ-1200-1200.webp")

let veggie = new Producto( "Veggie Burguer", 30900, "Hamburguesa", "Pan de finas hierbas, portobello a la parrilla, tomates frescos, cebollas caramelizadas en cerveza, aguacate, queso camembert y mézclum de lechugas.","https://tofuu.getjusto.com/orioneat-local/resized2/RnQGgbGBowdsxPSSD-1200-1200.webp")

let arosCebollas = new Producto( "Aros de Cebolla",21000, "Entradas", "Aros de cebolla artesanales súper crujientes, servidos con guacamole.","https://tofuu.getjusto.com/orioneat-local/resized2/eoJFbTm6vgp2rhCdM-1200-1200.webp")

let cheeseFries = new Producto( "Blue Cheese Fries",21500, "Entradas", "Papas a la francesa, servidas con tocineta ahumada, bites de queso azul, salsa sriracha y cilantro.","https://tofuu.getjusto.com/orioneat-local/resized2/FgyD7jjgtNGB63sff-1200-1200.webp")

let chickenTenders = new Producto( "Chicken Tenders",24500, "Entradas", "Deliciosos y crujientes deditos de pollo apanados artesanalmente, acompañados de papas a la francesa y miel.","https://tofuu.getjusto.com/orioneat-prod/5XXkureS9hLHXS47T-Tenders%20de%20pollo%20cuadrada%20cuad.png")

let chillyBacon = new Producto( "Chilly Bacon",23900, "Entradas", "Tocineta apanada en panko, chilly dulce, cascos de papas y queso sour cream.","https://tofuu.getjusto.com/orioneat-local/resized2/Z2GTkKGYxBdvpBceu-1200-1200.webp")

let dedosMozzarella = new Producto( "Dedos de Mozzarella",17900, "Entradas", "Crujientes trozos de queso apanados artesanalmete, acompañados con salsa de frutos rojos.","https://tofuu.getjusto.com/orioneat-local/resized2/m5wN7La7ycnzzn5BQ-1200-1200.webp")

let pulledPork = new Producto( "Pulled Pork Fries",24900, "Entradas", "Papas a la francesa, servidas con crema agria, guacamole, costilla cocida en Bbq Jack Daniels y cebollín.","https://tofuu.getjusto.com/orioneat-local/resized2/feu3YgAYCXPLwwXhm-1200-1200.webp")

let babyBeef = new Producto( "Baby Beef",50900, "Parrilla", "250 grs del mas tierno y jugoso corte de solomito madurado, servido con papas de tu elección y ensalada.","https://tofuu.getjusto.com/orioneat-local/resized2/dTs3S7KStM2GvDgNP-1200-1200.webp")

let churrasco = new Producto( "Churrasco",47900, "Parrilla", "Tierno corte de 250 grs de carne de res madurada, para disfrutar con papas de tu elección y ensalada.","https://tofuu.getjusto.com/orioneat-local/resized2/nDpBwb3j4hXjqaKmE-1200-1200.webp")

let costillas = new Producto( "Costillas Office Bbq",45900, "Parrilla", "Deliciosas costillas preparadas en cocción lenta (25 horas), selladas a la parrilla y bañadas en salsa Bbq de la casa, acompañadas de papas de tu elección y ensalada.","https://tofuu.getjusto.com/orioneat-local/resized2/5zKJDJAMmktZNZcm7-1200-1200.webp")

let polloParrilla = new Producto( "Pollo a la Parrilla",35900, "Parrilla", "300 grs de filete de pechuga a la parrilla, perfectamente adobada, servida con papas de tu elección y ensalada.","https://tofuu.getjusto.com/orioneat-prod-resized/yTAyHZeJL9xTwn8eB-1200-1200.webp")

let cheeseSalad = new Producto( "Blue Cheese Salad",33900, "Ensaladas", "Lechuga verde crespa, tocineta ahumada crocante, solomito madurado a la parrilla, bites de queso azul, cebolla caramelizada en cerveza, tomate fresco, aderezo ranch y aguacate.","https://tofuu.getjusto.com/orioneat-prod-resized/kTyZrBwsYCvDHHgu4-1200-1200.webp")

let officeBSalaad = new Producto( "Office B Salad",30900, "Ensaladas", "Mézclum de lechugas, aguacate, tender de pollo a la parrilla, quinua, filetes de mandarina, cintas de pepino, tocineta crocante, queso pecorino servido con glacé de panela y balsámico.","https://tofuu.getjusto.com/orioneat-local/resized2/A2fsMb8hhBusfNmDZ-1200-1200.webp")

let fresa = new Producto( "Fresa",8500, "Bebidas", "", "../img/juice(1).jpg")

let fresaMandarina = new Producto( "Fresa-Mandarina ",8500, "Bebidas" ,"", "../img/juice(1).jpg")

let limonada = new Producto( "Limonada Natural ",7500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/NSCvvxpPDfgkseWgT-350-350.webp")

let coco = new Producto( "Limonada de Coco", 10500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/G8c2EML7GvYQwY6sD-350-350.webp")

let mandarina = new Producto( "Mandarina",8500, "Bebidas", "", "../img/juice(2).jpg")

let piña = new Producto( "Piña y Yerbabuena", 8500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/kDBaFx8G8PjwqLGdm-350-350.webp")

let aguila = new Producto( "Cerveza Aguila", 6500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/BsoHoHpjcNsZKEE3q-350-350.webp")

let aguilaLight = new Producto( "Cerveza Aguila Light", 6500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/khWWyjvmtuQ2kRcDF-350-350.webp")

let bbcArtesanal = new Producto( "Cerveza BBC Artesanal", 9900, "Bebidas", "", "../img/beer.jpg")

let clubColombia = new Producto( "Cerveza Club Colombia", 7900, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/oCGknPXS9typnJ8jE-350-350.webp")

let corona = new Producto( "Cerveza Corona", 11500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/7ywaE4FmQ7Ch2rXZ5-350-350.webp")

let stellaArtois = new Producto( "Cerveza Stella Artois", 11500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/ukWjyhaAhKsefBvao-350-350.webp")

let cocacola = new Producto( "Coca-cola", 5500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/wYedtgMwWKWPqn3gR-350-350.webp")

let cocacolaLight = new Producto( "Coca-cola sin azucar", 5500, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/y33cD4ox3fbAo6vmW-350-350.webp")

let hatsu = new Producto( "Hatsu", 8900, "Bebidas", "", "https://tofuu.getjusto.com/orioneat-prod-resized/EELNyvGRFS5oQhatZ-350-350.webp")


let listaProductos = [queen, candy, classic, jack, tripleX, bufaloCrispy, hawaii, bufaloChicken, cuate, gaucha, glaseada, greek, guavajelly, holanda, KidRes, oficinera, newYork, officeDate, officeFestival, officeCarronza, ribSailor, officeB, veggie, arosCebollas, cheeseFries, chickenTenders, chillyBacon, dedosMozzarella, pulledPork, babyBeef, churrasco, costillas, polloParrilla, cheeseSalad, officeBSalaad, fresa, fresaMandarina, limonada, coco, mandarina, piña, aguila, aguilaLight, bbcArtesanal, clubColombia, corona, stellaArtois, cocacola, cocacolaLight, hatsu ]


let hamburguesas = listaProductos.filter((item) => item.categoria === "Hamburguesa")
let entradas = listaProductos.filter((item) => item.categoria === "Entradas")
let parrilla = listaProductos.filter((item) => item.categoria === "Parrilla")
let ensaladas = listaProductos.filter((item) => item.categoria === "Ensaladas")
let bebidas = listaProductos.filter((item) => item.categoria === "Bebidas")

function renderizarProducto(lista, categoria) {
    for (const producto of lista) {
        let card = document.createElement("div")
        card.className ="card"
        card.innerHTML = 
        `<img class="card__img" src="${producto.imagen}"></img>
         <div class="card__descripcion">
            <p>${producto.nombre}</p>
            <span>${producto.descripcion}</span>
            <span class="precio">$${producto.precio}</span>
            <button>Agregar</button>
         </div>`
        categoria.append(card) 
    }
}
let getHamburguesas = document.getElementById("burguer")
renderizarProducto(hamburguesas, getHamburguesas)

let getEntradas = document.getElementById("entradas")
renderizarProducto(entradas, getEntradas)

let getParrilla = document.getElementById("parrilla")
renderizarProducto(parrilla, getParrilla)

let getEnsaladas = document.getElementById("ensaladas")
renderizarProducto(ensaladas, getEnsaladas)

let getBebidas = document.getElementById("bebidas")
renderizarProducto(bebidas, getBebidas)
