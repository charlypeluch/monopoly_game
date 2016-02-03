var modulo=require("./monopoly.js");

describe("Monopoly",function(){
	
	var usuarios = []
	
	for (var i=0; i<10; i++)
	{
		usuarios[i] = new modulo.Usuario("Usuario"+(i+1))
	}
	
	beforeEach(function(){
        juego = new modulo.Juego()
        partida = new modulo.Partida()
		tablero = new modulo.Tablero()
		dados = new modulo.Dados()
    });
    
    describe("TEST DE JUEGO",function(){
        it("Puede crearse el juego",function(){
            expect(juego).toBeDefined();
        });
        it("Puede crearse una partida",function(){
            expect(partida).toBeDefined();
        });
        it("Pueden crearse varias partidas en un juego",function(){
            juego.nuevaPartida()
            juego.nuevaPartida()
            juego.nuevaPartida()
            expect(juego.partidas.length).toEqual(3)
        });
        it("Puede crearse un usuario",function(){
            expect(usuarios[0]).toBeDefined();
        });
        it("Pueden agregarse usuarios a las partidas",function(){
            juego.nuevaPartida()
            juego.partidas[0].agregarParticipante(usuarios[0])
            juego.partidas[0].agregarParticipante(usuarios[1])
            juego.partidas[0].agregarParticipante(usuarios[2])
            expect(juego.partidas[0].fichas.length).toEqual(3)
        });
    });
    
    describe("TEST DE PARTIDA",function(){
        it("Al crear la partida se crea un identificador",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].id_partida).toBeDefined();
        });
        it("Cada partida tiene un tablero",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].tablero).toBeDefined();
        });
        it("Cada partida tiene unos dados",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].dados).toBeDefined();
        });
        it("Cada partida tiene una fase",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].fase).toBeDefined();
        });
        it("Cada partida tiene un conjunto de 8 fichas con figuras diferentes",function(){
            juego.nuevaPartida()
            //Método para eliminar objetos duplicados en un array
            Array.prototype.unique=function(a){
                return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
            });
            expect(juego.partidas[0].tipoFichas.length).toEqual(juego.partidas[0].tipoFichas.unique().length)
        });
        it("Cada partida tiene 32 casas y 12 hoteles",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].casas).toEqual(32)
        });
        it("Cada partida tiene 12 hoteles",function(){
            juego.nuevaPartida()
            expect(juego.partidas[0].hoteles).toEqual(12) 
        });
    });
    
    describe("TES DE PARTIDA: TABLERO",function(){
		it("Debe crearse un tablero",function(){
			expect(tablero).toBeDefined();
		});
		it("Debería existir 40 casillas",function(){
			expect(tablero.casillas.length).toEqual(40);
		});
        
        //Comprobación de las casillas del Tablero
		it("En la casilla[0] debería estar la casilla de Salida ",function(){
			expect(tablero.casillas[0].tema.nombre).toEqual('Salida');
		});
		it("En la casilla[1] debería estar la calle con nombre: Ronda de Valencia",function(){
			expect(tablero.casillas[1].tema.nombre).toEqual('Ronda de Valencia');
			expect(tablero.casillas[1].tema.precio).toEqual(60);
		});
		it("En la casilla[2] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[2].tema.nombre).toEqual('Comunidad');
			expect(tablero.casillas[1].tema.precio).toEqual(60);
		});
		it("En la casilla[3] debería estar la calle con nombre: Plaza Lavapies",function(){
			expect(tablero.casillas[3].tema.nombre).toEqual('Plaza Lavapies');
		});
		it("En la casilla[4] debe haber una casilla de Impuesto con nombre: Impuesto de Capital",function(){
			expect(tablero.casillas[4].tema.nombre).toEqual('Impuesto de Capital');
		});
		it("En la casilla[5] debe haber una casilla de Estación: Estacion de Goya",function(){
			expect(tablero.casillas[5].tema.nombre).toEqual('Estacion de Goya');
		});
		it("En la casilla[6] debería estar la calle con nombre: Glorieta Cuatro Caminos",function(){
			expect(tablero.casillas[6].tema.nombre).toEqual('Glorieta Cuatro Caminos');
		});
		it("En la casilla[7] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[7].tema.nombre).toEqual('Suerte');
		});
		it("En la casilla[8] debería estar la calle con nombre: Avenida Reina Victoria",function(){
			expect(tablero.casillas[8].tema.nombre).toEqual('Avenida Reina Victoria');
		});
		it("En la casilla[9] debería estar la calle con nombre: Calle Bravo Murillo",function(){
			expect(tablero.casillas[9].tema.nombre).toEqual('Calle Bravo Murillo');
		});
		it("En la casilla[10] debería estar la casilla de Carcel",function(){
			expect(tablero.casillas[10].tema.nombre).toEqual('Carcel');
		});
		it("En la casilla[11] debería estar la calle con nombre: Glorieta de Bilbao",function(){
			expect(tablero.casillas[11].tema.nombre).toEqual('Glorieta de Bilbao');
		});
		it("En la casilla[12] debe haber una casilla de Empresa: Compania de Electricidad",function(){
			expect(tablero.casillas[12].tema.nombre).toEqual('Compania de Electricidad');
		});
		it("En la casilla[13] debería estar la calle con nombre: Calle Alberto Aguilera",function(){
			expect(tablero.casillas[13].tema.nombre).toEqual('Calle Alberto Aguilera');
		});
		it("En la casilla[14] debería estar la calle con nombre: Calle Fuencarral",function(){
			expect(tablero.casillas[14].tema.nombre).toEqual('Calle Fuencarral');
		});
		it("En la casilla[15] debe haber una casilla de Estación: Estacion de las Delicias",function(){
			expect(tablero.casillas[15].tema.nombre).toEqual('Estacion de las Delicias');
		});
		it("En la casilla[16] debería estar la calle con nombre: Avenida Felipe II",function(){
			expect(tablero.casillas[16].tema.nombre).toEqual('Avenida Felipe II');
		});
		it("En la casilla[17] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[17].tema.nombre).toEqual('Comunidad');
		});
		it("En la casilla[18] debería estar la calle con nombre: Calle Velazquez",function(){
			expect(tablero.casillas[18].tema.nombre).toEqual('Calle Velazquez');
		});
		it("En la casilla[19] debería estar la calle con nombre: Calle Serrano",function(){
			expect(tablero.casillas[19].tema.nombre).toEqual('Calle Serrano');
		});
		it("En la casilla[20] debería estar la casilla de Parking",function(){
			expect(tablero.casillas[20].tema.nombre).toEqual('Parking Gratuito');
		});
		it("En la casilla[21] debería estar la calle con nombre: Avenida de America",function(){
			expect(tablero.casillas[21].tema.nombre).toEqual('Avenida de America');
		});
		it("En la casilla[22] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[22].tema.nombre).toEqual('Suerte');
		});
		it("En la casilla[23] debería estar la calle con nombre: Calle Maria de Molina",function(){
			expect(tablero.casillas[23].tema.nombre).toEqual('Calle Maria de Molina');
		});
		it("En la casilla[24] debería estar la calle con nombre: Calle Cea Bermudez",function(){
			expect(tablero.casillas[24].tema.nombre).toEqual('Calle Cea Bermudez');
		});
		it("En la casilla[25] debe haber una casilla de Estacion: Estación de Mediodia",function(){
			expect(tablero.casillas[25].tema.nombre).toEqual('Estacion de Mediodia');
		});
		it("En la casilla[26] debería estar la calle con nombre: Avenida de los Reyes Catolicos",function(){
			expect(tablero.casillas[26].tema.nombre).toEqual('Avenida de los Reyes Catolicos');
		});
		it("En la casilla[27] debería estar la calle con nombre: Calle Bailen",function(){
			expect(tablero.casillas[27].tema.nombre).toEqual('Calle Bailen');
		});
		it("En la casilla[28] debe haber una casilla de Empresa: Compania del Agua",function(){
			expect(tablero.casillas[28].tema.nombre).toEqual('Compania del Agua');
		});
		it("En la casilla[29] debería estar la calle con nombre: Plaza de España",function(){
			expect(tablero.casillas[29].tema.nombre).toEqual('Plaza de España');
		});
		it("En la casilla[30] debería estar la casilla de Multa de Carcel",function(){
			expect(tablero.casillas[30].tema.nombre).toEqual('Multa de Carcel');
		});
		it("En la casilla[31] debería estar la calle con nombre: Puerta del Sol",function(){
			expect(tablero.casillas[31].tema.nombre).toEqual('Puerta del Sol');
		});
		it("En la casilla[32] debería estar la calle con nombre: Calle Alcala",function(){
			expect(tablero.casillas[32].tema.nombre).toEqual('Calle Alcala');
		});
		it("En la casilla[33] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[33].tema.nombre).toEqual('Comunidad');
		});
		it("En la casilla[34] debería estar la calle con nombre: Gran Via",function(){
			expect(tablero.casillas[34].tema.nombre).toEqual('Gran Via');
		});
		it("En la casilla[35] debe haber una casilla de Estación: Estacion del Norte",function(){
			expect(tablero.casillas[35].tema.nombre).toEqual('Estacion del Norte');
		});
		it("En la casilla[36] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[36].tema.nombre).toEqual('Suerte');
		});
		it("En la casilla[37] debería estar la calle con nombre: Paseo de la Castellana",function(){
			expect(tablero.casillas[37].tema.nombre).toEqual('Paseo de la Castellana');
		});
		it("En la casilla[38] debe haber una casilla de Impuesto con nombre: Impuesto de Lujo",function(){
			expect(tablero.casillas[38].tema.nombre).toEqual('Impuesto de Lujo');
		});
		it("En la casilla[39] debería estar la calle con nombre: Paseo del Prado",function(){
			expect(tablero.casillas[39].tema.nombre).toEqual('Paseo del Prado');
		});
        
        //Comprobación de los Diferetes Grupos de Casillas
		it("Debe haber 1 barrio Marrón con 2 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Marron")
					color=color+1;
			}
			expect(color).toEqual(2);
		});
		it("Debe haber 1 barrio AzulClaro con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="AzulClaro")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
		it("Debe haber 1 barrio Rosa con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Rosa")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
		it("Debe haber 1 barrio Naranja con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Naranja")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
		it("Debe haber 1 barrio Rojo con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Rojo")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
		it("Debe haber 1 barrio Amarillo con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Amarillo")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
		it("Debe haber 1 barrio Verde con 3 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="Verde")
					color=color+1;
			}
			expect(color).toEqual(3);
		});
        it("Debe haber 1 barrio AzulOscuro con 2 calles",function(){
			var color=0;
			for (var i=0; i<40; i++){
				if (tablero.casillas[i].tema.color=="AzulOscuro")
					color=color+1;
			}
			expect(color).toEqual(2);
		});
        it("Debe haber 4 estaciones",function(){
            var estacion=0
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Estacion)
                    estacion=estacion+1
            }
            expect(estacion).toEqual(4);
        });
        it("Debe haber 2 Empresas",function(){
            var empresa=0
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Empresa)
                    empresa=empresa+1
            }
            expect(empresa).toEqual(2);
        });
        it("Debe haber 2 Casillas de Impuesto",function(){
            var impuesto=0
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Impuesto)
                    impuesto=impuesto+1
            }
            expect(impuesto).toEqual(2);
        });
        it("Debe haber 3 Casillas de Comunidad",function(){
            var comunidad=0
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Comunidad)
                    comunidad=comunidad+1
            }
            expect(comunidad).toEqual(3);
        });
        it("Debe haber 3 Casillas de Suerte",function(){
            var suerte=0
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Suerte)
                    suerte=suerte+1
            }
            expect(suerte).toEqual(3);
        });
        it("Todas las casillas que pueden ser compradas estan Libres al iniciar la partida",function(){
            for( var i=0; i<40; i++){
                if (tablero.casillas[i].tema instanceof modulo.Empresa || tablero.casillas[i].tema instanceof modulo.Estacion || tablero.casillas[i].tema instanceof modulo.Calle)
                    expect(tablero.casillas[i].tema.estado).toEqual(new modulo.EnVenta())
            }
        });
        
        //Comprobación de las tarjetas
        it("El tablero dispone de una caja con las tarjetas del juego",function(){
            expect(tablero.cajaTarjetas).toBeDefined();
        });
        it("En la caja de tarjetas hay 15 tarjetas de suerte",function(){
            expect(tablero.cajaTarjetas.tarjetasSuerte.length).toEqual(15)
        })
        it("En la caja de tarjetas hay 6 tarjetas de comunidad",function(){
            expect(tablero.cajaTarjetas.tarjetasComunidad.length).toEqual(6)
        })
	});
    
    describe("TEST DE PARTIDA: TARJETAS",function(){
        var partida = new modulo.Partida()
        partida.agregarParticipante(usuarios[0])
        partida.comenzarPartida()
        
        it("La tarjeta de premio aumenta el dinero de la ficha",function(){
            var tarjeta = new modulo.TarjetaPremio("Premio",50)
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).toBeGreaterThan(dinero)
        });
        it("La tarjeta de multa disminuye el dinero de la ficha",function(){
            var tarjeta = new modulo.TarjetaMulta("Multa",50)
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).toBeLessThan(dinero)
        });
        it("La tarjeta de avanzar mueve la posicion de la ficha",function(){
            var tarjeta = new modulo.TarjetaAvanzar("Avanzar",5)
            var posicion = partida.fichas[0].posicion
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].posicion).not.toEqual(posicion)
        });
        it("La tarjeta de avanzar mueve la posicion de la ficha y cobra si pasa por la casilla de salida",function(){
            var tarjeta = new modulo.TarjetaAvanzar("Avanzar",40)
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("La tarjeta de avanzar mueve la posicion de la ficha entre los límites del tablero",function(){
            var tarjeta = new modulo.TarjetaAvanzar("Avanzar",45)
            tarjeta.ejecutar(partida.fichas[0])
            expect(dados.dado1).toBeGreaterThan(-1);
	        expect(dados.dado1).toBeLessThan(40);
        });
        it("La tarjeta de retroceder mueve la posicion de la ficha",function(){
            var tarjeta = new modulo.TarjetaRetroceder("Retroceder",5)
            var posicion = partida.fichas[0].posicion
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].posicion).not.toEqual(posicion)
        });
        it("La tarjeta de retroceder mueve la posicion de la ficha y no cobra si pasa por la casilla de salida",function(){
            var tarjeta = new modulo.TarjetaRetroceder("Retroceder",3)
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La tarjeta de retroceder mueve la posicion de la ficha entre los límites del tablero",function(){
            var tarjeta = new modulo.TarjetaRetroceder("Retroceder",45)
            tarjeta.ejecutar(partida.fichas[0])
            expect(dados.dado1).toBeGreaterThan(-1);
	        expect(dados.dado1).toBeLessThan(40);
        });
        it("La tarjeta de ir mueve la posicion de la ficha",function(){
            var tarjeta = new modulo.TarjetaIr("Ir",10)
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].posicion).toEqual(10)
        });
        it("La tarjeta de ir mueve la posicion de la ficha y no cobra si pasa por la casilla de salida",function(){
            var tarjeta = new modulo.TarjetaRetroceder("Ir",0)
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La tarjeta de carcel lleva la ficha a la carcel",function(){
            var tarjeta = new modulo.TarjetaCarcel("Carcel")
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].posicion).toEqual(10)
        });
        it("La tarjeta de carcel lleva la ficha a la carcel y no cobra si pasa por la casilla de salida",function(){
            var tarjeta = new modulo.TarjetaCarcel("Carcel")
            var dinero = partida.fichas[0].dinero
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La tarjeta de salvarCarcel agrega un comodin a las propiedades de la ficha (se puede utilizar para salir de la carcel)",function(){
            var tarjeta = new modulo.TarjetaSalvarCarcel("Salvar Carcel")
            tarjeta.ejecutar(partida.fichas[0])
            expect(partida.fichas[0].propiedades[0]).toEqual(tarjeta)
        });
    });
	
	describe("TEST DE PARTIDA: DADOS",function(){
		
		it("El valor de un dado siempre tiene que estar entre 1 y 6 incluidos (100 lanzamientos)",function(){
			for (var i=0; i<100; i++)
			{
				dados.tirarDados();
				expect(dados.dado1).toBeGreaterThan(0);
				expect(dados.dado1).toBeLessThan(7);
			}
		});
		
		it("La suma de los dos dados siempre tiene que estar entre 2 y 12 includios (100 lanzamientos)",function(){
			for (var i=0; i<100; i++)
			{
				dados.tirarDados();
				expect(dados.resultado).toBeGreaterThan(1);
				expect(dados.resultado).toBeLessThan(13);
			}
		});
        it("Los dados indican correctamente cuando obtienen un resultado doble (50 lanzamientos)",function(){
			for (var i=0; i<50; i++)
			{
				dados.tirarDados();
                if(dados.dado1 == dados.dado2)
                    expect(dados.esDoble()).toEqual(true)
			}
		});
   	});
    
    describe("TEST DE PARTIDA: FASES",function(){
        var partida = new modulo.Partida()
		
        it("Al crear una partida nueva, la fase se encuentra en Inicio",function(){
            expect(partida.fase).toEqual(new modulo.Inicial())	
		});
		it("El juego solo acepta participantes en la fase de Inicio",function(){
			partida.agregarParticipante(usuarios[0])
            expect(partida.fichas.length).toEqual(1)		
		});
        it("En la fase de inicio el usuario/ficha no puede comprar",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].comprar()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("En la fase de inicio el usuario/ficha no puede vender",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].vender(1)
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("En la fase de inicio el usuario/ficha no puede hipotecar",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].hipotecar(1)
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("En la fase de inicio el usuario/ficha no puede deshipotecar",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].deshipotecar(1)
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("En la fase de inicio el usuario/ficha no puede construir",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].construirCasa(1)
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("El juego no puede comenzar si el número de juegadores es inferior a 2",function(){
            partida.comenzarPartida()
            expect(partida.fase).toEqual(new modulo.Inicial())
		});
        it("El juego puede comenazar si el numero de jugadores es igual o suuperior a 2 (max 6)",function(){
            partida.agregarParticipante(usuarios[1])
            partida.comenzarPartida()
            expect(partida.fase).toEqual(new modulo.Jugar())
        });
        it("En la fase de Juego el usuario/ficha puede comprar",function(){
            partida.fichas[0].lanzarDados()
            partida.fichas[0].posicion = 1
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].comprar()
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("En la fase de Juego el usuario/ficha puede hipotecar",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].hipotecar(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("En la fase de Juego el usuario/ficha puede deshipotecar",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].deshipotecar(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("En la fase de Juego el usuario/ficha puede vender",function(){
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].vender(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("El juego no permite agregar participantes a una partida ya comenzada",function(){
            partida.agregarParticipante(usuarios[2])
            expect(partida.fichas.length).toEqual(2)
        });
        it("El juego finaliza si una ficha alcanza más de 3500 pelotis",function(){
            var partida = new modulo.Partida()
            partida.agregarParticipante(usuarios[0])
            partida.agregarParticipante(usuarios[1])
            partida.comenzarPartida()
            partida.modificarFondosFicha(partida.fichas[0],5000)
            partida.fichas[0].turno.estado = new modulo.Lanzado()
            partida.fichas[0].pasarTurno()
            expect(partida.fase).toEqual(new modulo.Final())
        });
        it("El juego finaliza si una ficha tiene saldo positivo y el resto negativo",function(){
            var partida = new modulo.Partida()
            partida.agregarParticipante(usuarios[0])
            partida.agregarParticipante(usuarios[1])
            partida.comenzarPartida()
            partida.modificarFondosFicha(partida.fichas[0],-5000)
            partida.fichas[0].turno.estado = new modulo.Lanzado()
            partida.fichas[0].pasarTurno()
            expect(partida.fase).toEqual(new modulo.Final())
        });
        it("El juego no puede reiniciarse no está en la fase Final",function(){
            var partida = new modulo.Partida()
            var id = partida.id_partida
            partida.reiniciarPartida()
            partida.reiniciarPartida()
            expect(partida.id_partida).toEqual(id)
        });
        it("El juego solo se puede reiniciar si está en la fase Final",function(){
            var partida = new modulo.Partida()
            partida.fase = new modulo.Final()
            var id = partida.id_partida
            partida.reiniciarPartida()
            partida.reiniciarPartida()
            expect(partida.id_partida).not.toEqual(id)
        });
    });
    
    describe("TEST DE PARTIDA -> FASES: TURNOS",function(){
        it("En la fase de Inicio todos los turnos están bloqueados",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            
            for(var j;j<partida.fichas.length;j++)
                expect(partida.fichas[j].turno.constructor.name).toEqual("NoMeToca")
		});
		it("El juego asigna el turno al primer usuario que llegó cuando comienza",function(){
			var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            expect(partida.fichas[0].turno.constructor.name).toEqual("MeToca")
		});
        it("La ficha no puede comprar antes de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].comprar()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La ficha no puede vender antes de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].vender()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La ficha no puede hipotecar antes de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].hipotecar()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La ficha no puede deshipotecar antes de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].deshipotecar()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La ficha no puede construir antes de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].construirCasa()
            expect(partida.fichas[0].dinero).toEqual(dinero)
        });
        it("La ficha puede comprar después de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].lanzarDados()
            partida.fichas[0].posicion = 1
            partida.fichas[0].comprar()
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("La ficha puede comprar después de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            partida.fichas[0].lanzarDados()
            partida.fichas[0].posicion = 1
            partida.fichas[0].comprar()
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].vender(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("La ficha puede hipotecar después de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            partida.fichas[0].lanzarDados()
            partida.fichas[0].posicion = 1
            partida.fichas[0].comprar()
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].hipotecar(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("La ficha puede deshipotecar después de lanzar",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            
            partida.fichas[0].lanzarDados()
            partida.fichas[0].posicion = 1
            partida.fichas[0].comprar()
            partida.fichas[0].hipotecar(1)
            var dinero = partida.fichas[0].dinero
            partida.fichas[0].deshipotecar(1)
            expect(partida.fichas[0].dinero).not.toEqual(dinero)
        });
        it("Cuando la la ficha pasa turno, pierde el turno",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
            partida.comenzarPartida()
            partida.pasarTurno(partida.fichas[0])
            expect(partida.fichas[0].turno.constructor.name).toEqual("NoMeToca")
        });
    });
	
	describe("TEST DE PARTIDA: PARTICIPANTES/FICHAS",function(){
        
        var partida = new modulo.Partida()
        
        it("Todos los usuarios tienen un identificador",function(){
            var partida = new modulo.Partida()
            
            for(var i=0;i<usuarios.length;i++)
                partida.agregarParticipante(usuarios[i])
                
            for(var j;j<partida.fichas.length;j++)
                expect(partida.fichas[j].usuario.id_usuario).ToBeDefined()
        });
		it("El juego permite añadir 6 jugadores como máximo",function(){
			for (var i=0; i<10; i++)
				partida.agregarParticipante(usuarios[i])
			expect(partida.fichas.length).toEqual(6)			
		});
		
        //Comprobación de las fichas asociadas
		it("Todas las fichas tienen asociado un usuario",function(){
			for (var i=0; i<partida.fichas.length; i++)
				expect(partida.fichas[i].usuario).toEqual(usuarios[i]);		
		});
		it("Todas las fichas tienen un saldo inicial de 1500 pelotis",function(){
			for (var i=0; i<partida.fichas.length; i++)
				expect(partida.fichas[i].dinero).toEqual(1500);		
		});
		it("Todas las fichas tienen asociada una figura distinta",function(){
			for (var i=0; i<partida.fichas.length; i++)
				for (var j=0; j<partida.fichas.length; j++)
				{
					if(i==j)
						expect(partida.fichas[i].figura).toEqual(partida.fichas[j].figura);
					else
						expect(partida.fichas[i].figura).not.toEqual(partida.fichas[j].figura);
				}
		});
        it("Cuando se asocia una figura, no se puede volver a seleccionar",function(){
            for (var i=0; i<partida.fichas.lenght; i++)
                for(var j=0; i<partida.tipoFichas.lenght; i++)
                    expect(fichas[i].figura.not.toEqual(partida.tipoFichas[j]))
        })
		it("Una ficha cambia de posición tras lanzar los dados",function(){
            partida.comenzarPartida()
            var pos = partida.fichas[0].posicion
            partida.fichas[0].lanzarDados()
            expect(partida.fichas[0].posicion).not.toEqual(pos)
		});
		
		it("La ficha siempre se mueve dentro de los límites del tablero (lanza 25 veces)",function(){
			for (var i=0; i<25; i++)
			{
                partida.fichas[0].turno.estado = new modulo.NoLanzado()
                partida.fichas[0].estado = new modulo.Libre()
                partida.fichas[0].lanzarDados() 
                
                expect(partida.fichas[0].posicion).toBeGreaterThan(-1)
				expect(partida.fichas[0].posicion).toBeLessThan(40)
			}	
		});
		
		it("Si la ficha lanza 3 dobles seguidos va a la carcel (lanza 250 veces)",function(){
            var cont=0
            
            for (var i=0; i<250; i++)
			{
                partida.comenzarPartida()
				partida.fichas[0].lanzarDados()
                if(partida.dados.esDoble()) {
                    cont++
                }
                else {
                    partida.fichas[0].turno.estado = new modulo.NoLanzado()
                    partida.fichas[0].estado = new modulo.Libre()
                    partida.tiradasDobles=0
                    cont=0
                }
                
                if(cont==3) {
                    expect(partida.fichas[0].posicion).toEqual(10)
                }
			}	
		});
   	});
})

// ToDo
/*
Control de fases:
- Al lanzar el juego, se encuentra en la Fase Inicial
- En la Fase Inicial no se pueden lanzar los dados ni realizar transacciones
- Si un usuario invoca el método empezar() de Juego, la fase cambia a Jugar
- En la fase Jugar no se pueden dar de alta usuarios, se puede lanzar dados y realizar transacciones
- Comprobar que el juego pasa a la fase Final cuando sólo queda un usuario son saldo positivo o bien un usuario alcanza el máximo establecido de pelotis
- En la fase Final solo se puede invocar reset() para volver a lanzar una partida
- Comprobar que el juego termina


Sobre la tirada:
- Si el usuario lanza los dados y le sale un doble, ¿puede volver a tirar?
- Si el usuario lanza y le salen tres dobles, entonces debe ir a la Cárcel
- Comprobar el caso especial en el que el jugador que saque tres dobles seguidos, va a la Cárcel

Control de turnos:
- Al pasar de la fase Inicial a Jugar, se asigna el turno a un jugador (por ejemplo, el primero que llegó)
- El turno cambia al siguiente jugador cuando el jugador que tiene el turno lanza los dados y no obtiene un doble
- El usuario es obligado a lanzar los dados primero, después puede realizar las transacciones (compras, ventas, etc) e indica que ha terminado llamando al método pasarTurno()

Pasar por la casilla de Salida:
- Comprobar que el usuario recibe 200 pelotis si pasa por la casilla de salida

Estaciones:
- Comprobar que las estaciones se pueden comprar
- Comprobar que si un usuario compra dos estaciones, sube el alquiler según el título
- Comprobar que si un usuario compra tres estaciones, sube el alquiler según el título
- Comprobar que si un usuario compra cuatro estaciones, sube el alquiler según el título

Calles:
- Comprobar que un usuario puede comprar una calle y su saldo se decrementa según el precio de la calle
- Comprobar que todas las calles se pueden comprar (comprobar los saldos)

- Comprobar que una calle comprada no se puede volver a comprar
- Comprobar que si un usuario compra todas las calles (saldo teórico suficiente), la lista de propiedades es igual a 22
- Comprobar que un usuario que cae en una calle con propietario, paga el alquiler que toque
- Comprobar que un usuario compra todas las calles, el otro cae en todas las calles y paga lo que corresponda en cada calle

Construir:
- Comprobación de edificación: solo se puede edificar si el usuario tiene todas las calles de un grupo, se edifica en orden (no se pueden poner 2 casas en una calle y 0 en otra del mismo grupo)
- Poner hoteles: solo se puede poner un hotel en una calle que tiene 4 casas

Hipotecar:
- El usuario puede hipotecar una calle que sea de su propiedad
- El usuario puede levantar la hipoteca de una propiedad
- No permitir transacciones si el usuario no tiene saldo

Tarjetas Comunidad y Suerte:
- El usuario que cae en una de esas casillas realiza alguna de estas acciones: multa, premio, avanzar(casillas), retroceder(casillas), ir a la Cárcel, quedas libre de la Cárcel
*/