const productos = [
    { 
        id: 1,   
        nombre: 'Bulleit Queen',
        precio: 33500,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada, queso crema saborizado en Bulleit Bourbon y cristales de azúcar, aros de cebolla apanados artesanalmente, mermelada de vinagre de cidra con panceta ahumada y manzana, mézclum de lechugas frescas',
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/mjxgZ2KwZyPBx2aaG-350-350.webp'
    },
    { 
        id: 2, 
        nombre: 'Candy Crunch',
        precio: 31900,
        categoria: 'Hamburguesas',
        descripcion:"Pan brioche, mayonesa de la casa, mézclum de lechugas, 150 gms de carne premiun, queso cheddar, tocineta ahumada confitada, dip de queso crema, mermelada de tomate chonto y ojuelas crocantes.",
        imagen: 'https://tofuu.getjusto.com/orioneat-local/resized2/H5spRjrMdRX7XwtBJ-350-350.webp'
    },
    { 
        id: 3, 
        nombre: 'Classic',
        precio: 28900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 150 grs de carne premium, queso cheddar, tocineta ahumada, cebolla caramelizada en cerveza,lechuga y tomate.',
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/4unFA9hhMqsGj6rG3-350-350.webp'
    },
    { 
        id: 4, 
        nombre: 'Jack Philadelphia',
        precio: 32500,
        categoria: 'Hamburguesas',
        descripcion: 'an brioche, 150 grs de carne premium, queso philadelfia, tocineta bañada en BBQ Jack Daniels, cebolla caramelizada en cerveza y mézclum de lechugas.',
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/tJ4x6AYP3fmbFNTFg-350-350.webp'
    },
    { 
        id: 5, 
        nombre: 'Triple X',
        precio: 32900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 100 grs de carne premium, 60 grs de bondiola de cerdo en Bbq Sailor, queso philadelfia, tocineta apanada y mezclum de lechugas.',
        imagen: 'https://tofuu.getjusto.com/orioneat-prod-resized/m9ZdtkhW7tHhmeMtQ-350-350.webp'
    },
    { 
        id: 6, 
        nombre: 'Búfalo Chicken Crispy',
        precio: 33000,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, filete de pechuga a la plancha o apanada, queso cheddar, tocineta ahumada, Bbq de sriracha (PICANTE), lechuga, tomate y cebolla fresca.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/TtcrLzNQt9oJTuocs-B%C3%BAfalo%20Chicken%20crispy%20cuad.jpeg'
    },
    { 
        id: 7, 
        nombre: 'Hawaii',
        precio: 33500,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 150 grs de carne premium, jamón de york, queso americano, piña asada, BBQ, lechuga y tomate.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/2CNhPGb63jLWp5b9x-350-350.webp'
    },
    { 
        id: 8, 
        nombre: 'Búfalo Chicken',
        precio: 33500,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, filete de pechuga a la plancha o apanada, queso cheddar, tocineta ahumada, Bbq de sriracha (PICANTE), lechuga, tomate y cebolla fresca.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/vz95MxS5JS5EqewCW-350-350.webp'
    },
    { 
        id: 9, 
        nombre: 'Cuate',
        precio: 33900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan de finas hierbas, 150 grs de carne premium picante, tortilla de maíz, guacamole, queso cheddar, tocineta ahumada, lechuga, tomate y cebolla fresca.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/JTEcnXkyZ9WSDRRsp-350-350.webp'
    },
    { 
        id: 10, 
        nombre: 'Gaucha',
        precio: 33900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino 150 grs de carne de res queso cheddar chorizo argentino chimichurri casero lechuga tomate y cebolla fresca.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/pXhKWPCWRqKHXDXFm-350-350.webp'
    },
    { 
        id: 11, 
        nombre: 'Glaseada',
        precio: 31900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 75 grs de carne premium, mayonesa griega, pepinillos, 75 grs de carne premium bañada en fondue cheddar, tocineta ahumada y mozzarella rallado.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/8xLDyWe5pTE3adN7N-350-350.webp'
    },
    { 
        id: 12, 
        nombre: 'Greek',
        precio: 34500,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino, mayonesa griega, 150 grs de carne premium rellena de queso feta, cebolla caramelizada en cerveza, tocineta ahumada, aguacate y mézclum de lechugas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/8xLDyWe5pTE3adN7N-350-350.webp'
    },
    { 
        id: 13, 
        nombre: 'Guavajelly',
        precio: 33900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, mayonesa artesanal griega, lechuga, tomate, 150 gms de carne premium, queso costeño de búfala frito, tocineta ahumada y crocante de plátano.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/ftXtkTnZdymjMsF6b-Sin%20t%C3%ADtulo-1_Mesa%20de%20trabajo%201.png'
    },
    { 
        id: 14, 
        nombre: 'Holanda',
        precio: 32900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino, 150 grs de carne premium rellena de queso cheddar, guacamole, tocineta ahumada, lechuga, tomate y cebolla fresca.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/oc6eqamKGbdevqTx9-350-350.webp'
    },
    { 
        id: 15, 
        nombre: 'Kid Burger de Res',
        precio: 18900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan mini campesino, 75 grs de carne premium, o pollo krispi, queso cheddar, tomate, lechuga y papas a la francesa',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/bFWQkjegZXXvunG6y-kid%20burger%20res%20cuad.png'
    },
    { 
        id: 16, 
        nombre: 'La Oficinera',
        precio: 26900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 120 grs de carne premium, queso cheddar, lechuga, tomate, cebolla fresca, o caramelizada.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/CAM25hLE87m7oHvEe-Oficinera%20Cuadrada.png'
    },
    { 
        id: 17, 
        nombre: 'New York',
        precio: 32900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino,150 grs de carne premium, queso cheddar, aros de cebolla artesanales,tocineta ahumada, bbq, lechuga y tomate.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/p6vjxka9x44TodZ4z-350-350.webp'
    },
    { 
        id: 18, 
        nombre: 'Office Date',
        precio: 32900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche nevado y sellado con mantequilla mayonesa de la casa a base de ají amarillo y cilantro, 150 grs de carne premium, queso philadelphia, mermelada de tomate chonto, tocineta ahumada, hojuelas crujientes y mézclum de lechugas hidropónicas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/W6fz7SksZbC4F3jM6-350-350.webp'
    },
    { 
        id: 19, 
        nombre: 'Office Festival',
        precio: 34900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, salsa Office de la casa, doble carne premium, queso cheddar, tocineta glaseada en BBQ Jack Daniels, cebolla caramelizada en frutos rojos, queso filadelfia y mezclum de lechugas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/wxWhco7CdpBgMr5r3-Sin%20t%C3%ADtulo-1-02.png'
    },
    { 
        id: 20, 
        nombre: 'Office en Carroza',
        precio: 34900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan brioche, 150 grs de carne premium glaseada en BBQ de uchuva, queso mozzarella apanado, tocineta ahumada y mézclum de lechugas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/tY3ZDjzPEPKz2ch4j-350-350.webp'
    },
    { 
        id: 21, 
        nombre: 'Rib Sailor',
        precio: 33900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino, pepinillos, 120 grs de costilla glaseada en Bbq Sailor, tocineta ahumada, queso philadelfia y mézclum de lechugas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/fddMyKvxgwBxN936B-350-350.webp'
    },
    { 
        id: 22, 
        nombre: 'The Office B',
        precio: 32900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan campesino,150 grs de carne premuim, aderezo de queso azul, peras glaseadas, tocineta, mézclum de lechugas y bbq de Jack Daniels.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/n22wHEcHM8nHo3wkA-350-350.webp'
    },
    { 
        id: 23, 
        nombre: 'Veggie Burger',
        precio: 30900,
        categoria: 'Hamburguesas',
        descripcion: 'Pan de finas hierbas, portobello a la parrilla, tomates frescos, cebollas caramelizadas en cerveza, aguacate, queso camembert y mézclum de lechugas.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/JgfH6Ffp9JaFggnJr-350-350.webp'
    },
    { 
        id: 24, 
        nombre: 'Aros de Cebolla',
        precio: 21000,
        categoria: 'Entradas',
        descripcion: 'Aros de cebolla artesanales súper crujientes, servidos con guacamole.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/pTD4QRbZEHEXp3RMm-350-350.webp'
    },
    { 
        id: 25, 
        nombre: 'Blue Cheese Fries',
        precio: 21500,
        categoria: 'Entradas',
        descripcion: 'Papas a la francesa, servidas con tocineta ahumada, bites de queso azul, salsa sriracha y cilantro.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/DLM2NwB4ABnatd5sZ-350-350.webp'
    },
    { 
        id: 26, 
        nombre: 'Chicken Tenders',
        precio: 24900,
        categoria: 'Entradas',
        descripcion: 'Deliciosos y crujientes deditos de pollo apanados artesanalmente, acompañados de papas a la francesa y miel.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/5XXkureS9hLHXS47T-Tenders%20de%20pollo%20cuadrada%20cuad.png'
    },
    { 
        id: 27, 
        nombre: 'Chilly Bacon',
        precio: 23900,
        categoria: 'Entradas',
        descripcion: 'Tocineta apanada en panko, chilly dulce, cascos de papas y queso sour cream.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod/EfgqL5vngb78L8mnR-Chilly%20Bacon%20cuad.png'
    },
    { 
        id: 28, 
        nombre: 'Dedos de Mozzarella',
        precio: 17900,
        categoria: 'Entradas',
        descripcion: 'Crujientes trozos de queso apanados artesanalmete, acompañados con salsa de frutos rojos.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/vpzsqWsRwYQF8nvTP-350-350.webp'
    },
    { 
        id: 29, 
        nombre: 'Pulled Pork Fries',
        precio: 24900,
        categoria: 'Entradas',
        descripcion: 'Crujientes trozos de queso apanados artesanalmete, acompañados con salsa de frutos rojos.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/5aQaDBfodKSX6MrAS-350-350.webp'
    },
    { 
        id: 30, 
        nombre: 'Baby Beef',
        precio: 50900,
        categoria: 'Parrilla',
        descripcion: '250 grs del mas tierno y jugoso corte de solomito madurado, servido con papas de tu elección y ensalada.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/ZtS4LbD96FbREFQr4-350-350.webp'
    },
    { 
        id: 31, 
        nombre: 'Churrasco',
        precio: 47900,
        categoria: 'Parrilla',
        descripcion: 'Tierno corte de 250 grs de carne de res madurada, para disfrutar con papas de tu elección y ensalada.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/2xBTArX2gKBhxn3zF-350-350.webp'
    },
    { 
        id: 32, 
        nombre: 'Costillas Office Bbq',
        precio: 45900,
        categoria: 'Parrilla',
        descripcion: 'Deliciosas costillas preparadas en cocción lenta (25 horas), selladas a la parrilla y bañadas en salsa Bbq de la casa, acompañadas de papas de tu elección y ensalada.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/kGN8nAFF4SpdkDqA5-350-350.webp'
    },
    { 
        id: 33, 
        nombre: 'Pollo a la Parrilla',
        precio: 35900,
        categoria: 'Parrilla',
        descripcion: '300 grs de filete de pechuga a la parrilla, perfectamente adobada, servida con papas de tu elección y ensalada.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/8sorT3mZcBGtTqDgN-350-350.webp'
    },
    { 
        id: 34, 
        nombre: 'Blue Cheese Salad',
        precio: 33900,
        categoria: 'Ensaladas',
        descripcion: 'Lechuga verde crespa, tocineta ahumada crocante, solomito madurado a la parrilla, bites de queso azul, cebolla caramelizada en cerveza, tomate fresco, aderezo ranch y aguacate.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/q93ZaAhKJ5QpTa5C7-350-350.webp'
    },
    { 
        id: 35, 
        nombre: 'Office B Salad',
        precio: 30900,
        categoria: 'Ensaladas',
        descripcion: 'Mézclum de lechugas, aguacate, tender de pollo a la parrilla, quinua, filetes de mandarina, cintas de pepino, tocineta crocante, queso pecorino servido con glacé de panela y balsámico.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/7wkFhDMDZyRneNjcs-350-350.webp'
    },
    { 
        id: 36, 
        nombre: 'Limonada Natural',
        precio: 7500,
        categoria: 'Jugos',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/NSCvvxpPDfgkseWgT-350-350.webp'
    },
    { 
        id: 37, 
        nombre: 'Limonada de coco',
        precio: 10500,
        categoria: 'Jugos',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/G8c2EML7GvYQwY6sD-350-350.webp'
    },
    { 
        id: 38, 
        nombre: 'Piña',
        precio: 8500,
        categoria: 'Jugos',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/kDBaFx8G8PjwqLGdm-350-350.webp'
    },
    { 
        id: 39, 
        nombre: 'Aguila',
        precio: 6500,
        categoria: 'Cervezas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/BsoHoHpjcNsZKEE3q-350-350.webp'
    },
    { 
        id: 40, 
        nombre: 'Aguila Light',
        precio: 6500,
        categoria: 'Cervezas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/khWWyjvmtuQ2kRcDF-350-350.webp'
    },
    { 
        id: 41, 
        nombre: 'Corona',
        precio: 11500,
        categoria: 'Cervezas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/7ywaE4FmQ7Ch2rXZ5-350-350.webp'
    },
    { 
        id: 42, 
        nombre: 'Stella Artois',
        precio: 11500,
        categoria: 'Cervezas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/ukWjyhaAhKsefBvao-350-350.webp'
    },
    { 
        id: 43, 
        nombre: 'Coca-Cola',
        precio: 5500,
        categoria: 'Gaseosas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/wYedtgMwWKWPqn3gR-350-350.webp'
    },
    { 
        id: 44, 
        nombre: 'Coca-Cola Sin Azúcar',
        precio: 5500,
        categoria: 'Gaseosas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/y33cD4ox3fbAo6vmW-350-350.webp'
    },
    { 
        id: 45, 
        nombre: 'Hatsu',
        precio: 8900,
        categoria: 'Gaseosas',
        descripcion: '',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/EELNyvGRFS5oQhatZ-350-350.webp'
    },
    { 
        id: 46, 
        nombre: 'Brownie con Helado',
        precio: 14900,
        categoria: 'Postres',
        descripcion: 'Brownie, con helado de vainilla y salsa de frutos rojos.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/kfWSCuBAbK2hfHNtr-350-350.webp'
    },
    { 
        id: 47, 
        nombre: 'Blondie y Helado',
        precio: 14900,
        categoria: 'Postres',
        descripcion: 'Blondie con chips de chocolate, helado de vainilla y salsa de frutos rojos.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/nfW4u8Ht38edvffWC-350-350.webp'
    },
    { 
        id: 48, 
        nombre: 'Volcán con Helado',
        precio: 14900,
        categoria: 'Postres',
        descripcion: 'Volcán de chocolate, con helado de vainilla y salsa de frutos rojos.',
        imagen:'https://tofuu.getjusto.com/orioneat-prod-resized/2f6bWx5Mgyfzz8uQE-350-350.webp'
    },
]