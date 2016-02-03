//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE TABLERO ---------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Tablero() {
	this.casillas=[]
    this.cajaTarjetas = new Tarjetas()
	
	this.iniciarTablero = function() 
    {
        //http://imgur.com/X2MpjMV - Tablero
        
		this.casillas[0] = new Casilla (new Salida())
		this.casillas[10] = new Casilla (new Carcel())
		this.casillas[20] = new Casilla (new Parking())
		this.casillas[30] = new Casilla (new Multa())
		//CasillasSuerte-------------------------------------------------------------------------
		this.casillas[7] = new Casilla (new Suerte())
		this.casillas[22] = new Casilla (new Suerte())
		this.casillas[36] = new Casilla (new Suerte())
		//CasillasComunidad----------------------------------------------------------------------
		this.casillas[2] = new Casilla (new Comunidad(200))
		this.casillas[17] = new Casilla (new Comunidad(200))
		this.casillas[33] = new Casilla (new Comunidad(200))
		//CasillasImpuesto-----------------------------------------------------------------------
		this.casillas[4] = new Casilla (new Impuesto("Impuesto de Capital",0.1))
		this.casillas[38] = new Casilla (new Impuesto("Impuesto de Lujo",0.15))
		//CasillasEmpresas-----------------------------------------------------------------------
		this.casillas[12] = new Casilla (new Empresa("Compania de Electricidad",150))
		this.casillas[28] = new Casilla (new Empresa("Compania del Agua",150))
		//CasillasEstaciones---------------------------------------------------------------------
		this.casillas[5] = new Casilla (new Estacion("Estacion de Goya",200))
		this.casillas[15] = new Casilla (new Estacion("Estacion de las Delicias",200))
		this.casillas[25] = new Casilla (new Estacion("Estacion de Mediodia",200))
		this.casillas[35] = new Casilla (new Estacion("Estacion del Norte",200))
		//CasillasCalles-------------------------------------------------------------------------
		this.casillas[1] = new Casilla (new Calle("Marron","Ronda de Valencia",60))
		this.casillas[3] = new Casilla (new Calle("Marron","Plaza Lavapies",60))
		
		this.casillas[6] = new Casilla (new Calle("AzulClaro","Glorieta Cuatro Caminos",100))
		this.casillas[8] = new Casilla (new Calle("AzulClaro","Avenida Reina Victoria",100))
		this.casillas[9] = new Casilla (new Calle("AzulClaro","Calle Bravo Murillo",120))
		
		this.casillas[11] = new Casilla (new Calle("Rosa","Glorieta de Bilbao",140))
		this.casillas[13] = new Casilla (new Calle("Rosa","Calle Alberto Aguilera",140))
		this.casillas[14] = new Casilla (new Calle("Rosa","Calle Fuencarral",160))
		
		this.casillas[16] = new Casilla (new Calle("Naranja","Avenida Felipe II",180))
		this.casillas[18] = new Casilla (new Calle("Naranja","Calle Velazquez",180))
		this.casillas[19] = new Casilla (new Calle("Naranja","Calle Serrano",200))
		
		this.casillas[21] = new Casilla (new Calle("Rojo","Avenida de America",220))
		this.casillas[23] = new Casilla (new Calle("Rojo","Calle Maria de Molina",220))
		this.casillas[24] = new Casilla (new Calle("Rojo","Calle Cea Bermudez",240))
		
		this.casillas[26] = new Casilla (new Calle("Amarillo","Avenida de los Reyes Catolicos",260))
		this.casillas[27] = new Casilla (new Calle("Amarillo","Calle Bailen",260))
		this.casillas[29] = new Casilla (new Calle("Amarillo","Plaza de España",280))
		
		this.casillas[31] = new Casilla (new Calle("Verde","Puerta del Sol",300))
		this.casillas[32] = new Casilla (new Calle("Verde","Calle Alcala",300))
		this.casillas[34] = new Casilla (new Calle("Verde","Gran Via",320))
		
		this.casillas[37] = new Casilla (new Calle("AzulOscuro","Paseo de la Castellana",350))
		this.casillas[39] = new Casilla (new Calle("AzulOscuro","Paseo del Prado",400))
	}
    
    this.iniciarTarjetas = function() {
        //Tarjetas de Suerte---------------------------------------------------------------------
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaPremio("Hoy es el dia de tu cumpleanos!!",150))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaPremio("Hay un error en la banca a tu favor!!",100))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaPremio("Has ganado el segundo premio de belleza!!",50))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaMulta("Debes pagar al hospital!!",150))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaMulta("Debes pagar la factura del medico",100))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaMulta("Debes pagar la póliza de tu seguro!!",50))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaAvanzar("Puedes continuar tu camino...!!",5))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaAvanzar("Puedes continuar tu camino...!!",12))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaRetroceder("Debes volver atras...!!",1))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaRetroceder("Debes volver atras...!!",4))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaIr("Vas a la Calle Fuencarral sin pasar por la casilla de salida y sin cobrar",14))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaIr("Vas a la Calle Cea Bermudez sin pasar por la casilla de salida y sin cobrar",24))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaIr("Vas a al Paseo de la Castellana sin pasar por la casilla de salida y sin cobrar",37))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaSalvarCarcel("Tarjeta canjeable para salir de la Carcel"))
        this.cajaTarjetas.agregarTarjetaSuerte(new TarjetaSalvarCarcel("Tarjeta canjeable para salir de la Carcel"))
        
        //Tarjetas de Comunidad------------------------------------------------------------------
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaPremio("Hacienda te devuelve dinero!!",150))
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaPremio("Ganas intereses por los intereses de tu cuenta!!",100))
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaPremio("Cobras una herencia!!",50))
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaMulta("Has perdido dinero en la bolsa!!",150))
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaMulta("Tienes que realizar tareas de mantenimiento en tus propiedades!!",100))
        this.cajaTarjetas.agregarTarjetaComunidad(new TarjetaMulta("Debes pagar una multa de trafico!!",50))
    }
	
	this.obtenerCasilla = function(posicion) {
		return this.casillas[posicion]
	}
    
    this.cae = function(ficha) {
        this.casillas[ficha.posicion].cae(ficha)
    }
    
    this.comprar = function(ficha) {
        this.casillas[ficha.posicion].comprar(ficha)
    }
    
    this.vender = function(ficha,casilla) {
        this.casillas[casilla].vender(ficha)
    }
    
    this.hipotecar = function(ficha,casilla) {
        this.casillas[casilla].hipotecar(ficha)
    }
    
    this.deshipotecar = function(ficha,casilla) {
        this.casillas[casilla].deshipotecar(ficha)
    }
    
    this.construirCasa = function(ficha,casilla) {
        this.casillas[casilla].construirCasa(ficha)
    }
    
    this.derruirCasa = function(ficha,casilla) {
        this.casillas[casilla].derruirCasa(ficha)
    }
    
    this.construirHotel = function(ficha,casilla) {
        this.casillas[casilla].construirHotel(ficha)
    }
    
    this.derruirHotel = function(ficha,casilla) {
        this.casillas[casilla].derruirHotel(ficha)
    }
    
    this.iniciarTablero()
    this.iniciarTarjetas()
}
//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE DADOS -----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Dados()
{
	this.dado1 = 0
	this.dado2 = 0
	this.resultado = 0
	
	//Retorna un entero aleatorio entre min (incluido) y max (excluido)
	this.tirarDados = function ()
	{
		this.dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
		this.dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
		this.resultado = this.dado1 + this.dado2
	}
	
    //Retorna true en caso de que el resultado sea doble
	this.esDoble = function ()
	{
		return (this.dado1 == this.dado2)?true:false;
	}
	
    //Método para testear dados
	this.tirarDadosTest = function (numA,numB)
	{
		this.dado1 = numA
		this.dado2 = numB
		this.resultado = this.dado1 + this.dado2
	}
}
//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE PROPIEDADES -----------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Casilla(tema) {
	this.tema=tema
	
	this.obtenerTema = function() {
		return tema
	}
    
    this.cae = function(ficha) {
        this.tema.cae(ficha)
    }
    
    this.comprar = function(ficha) {
        this.tema.comprar(ficha,this)
    }
    
    this.vender = function(ficha) {
        this.tema.vender(ficha,this)
    }
    
    this.hipotecar = function(ficha) {
        this.tema.hipotecar(ficha,this)
    }
    
    this.deshipotecar = function(ficha) {
        this.tema.deshipotecar(ficha,this)
    }
    
    this.construirCasa = function(ficha) {
        this.tema.construirCasa(ficha,this)
    }
    
    this.derruirCasa = function(ficha) {
        this.tema.derruirCasa(ficha,this)
    }
    
    this.construirHotel = function(ficha) {
        this.tema.construirHotel(ficha,this)
    }
    
    this.derruirHotel = function(ficha) {
        this.tema.derruirHotel(ficha,this)
    }
}

function Tema() {
    this.cae = function(ficha) {
        console.log("%cCasilla de "+this.nombre+"","color:orange")
    }
    
    this.comprar = function(ficha) {
        console.warn("Esta casilla no se puede comprar!")
    }
    
    this.vender = function(ficha) {
        console.warn("Esta casilla no se puede vender!")
    }
    
    this.hipotecar = function(ficha) {
        console.warn("Esta casilla no se puede hipotecar!")
    }
    
    this.deshipotecar = function(ficha) {
        console.warn("Esta casilla no se puede deshipotecar!")
    }
    
    this.construirCasa = function(ficha) {
        console.warn("En la casilla no se puede construir casas")
    }
    
    this.derruirCasa = function(ficha) {
        console.warn("En la casilla no se puede derruir casas")
    }
    
    this.construirHotel = function(ficha) {
        console.warn("En la casilla no se puede construir un hotel")
    }
    
    this.derrurirHotel = function(ficha) {
        console.warn("En la casilla no se puede derruir un hotel")
    }
    
    this.getObject = function () {}
}

function Salida() {
	this.nombre="Salida"
}
    Salida.prototype = new Tema

function Carcel() {
	this.nombre="Carcel"
}
    Carcel.prototype = new Tema

function Parking() {
	this.nombre="Parking Gratuito"
}
    Parking.prototype = new Tema

function Multa() {
	this.nombre="Multa de Carcel"
}
    Multa.prototype = new Tema
    Multa.prototype.cae = function(ficha) {
        console.log("%cCasilla de "+this.nombre+"","color:orange")
        ficha.partida.encarcelarFicha(ficha)
    }

function Suerte() {
	this.nombre="Suerte"
}
    Suerte.prototype = new Tema
    Suerte.prototype.cae = function(ficha) {
        console.log("%cCasilla de Tarjeta de "+this.nombre+"","color:orange")
        ficha.partida.tablero.cajaTarjetas.seleccionarTarjetaSuerte().ejecutar(ficha)
    }

function Comunidad(coste) {
	this.nombre="Comunidad"
}
    Comunidad.prototype = new Tema
	Comunidad.prototype.cae = function(ficha) {
        console.log("%cCasilla de Tarjeta de "+this.nombre+"","color:orange")
        ficha.partida.tablero.cajaTarjetas.seleccionarTarjetaComunidad().ejecutar(ficha)
    }

function Impuesto(nombre,coste) {
	this.nombre=nombre
    this.coste=coste //Porcentaje
}
    Impuesto.prototype = new Tema
	Impuesto.prototype.cae = function(ficha) {
        console.log("%cCasilla de "+this.nombre+": Debes pagar el "+this.coste*100+"% de tu Dinero","color:orange")
        console.warn("%c"+ficha.figura+" paga "+Math.round(ficha.dinero*this.coste)+" Pelotis","color:red")
        ficha.partida.modificarFondosFicha(ficha,-Math.round(ficha.dinero*this.coste))
    }

function Empresa(nombre,precio) {
	this.nombre=nombre
	this.precio=precio
	this.estado = new EnVenta()
    this.propietario = undefined
    this.titulo = new Titulo(this.precio)
}
    Empresa.prototype = new Tema
    Empresa.prototype.cae = function(ficha) {
        this.estado.cae(ficha,this)
    }
    
    Empresa.prototype.comprar = function(ficha) {
        this.estado.comprar(ficha,this)
    }
    
    Empresa.prototype.vender = function(ficha) {
        this.estado.vender(ficha,this)
    }
    
    Empresa.prototype.hipotecar = function(ficha) {
        this.estado.hipotecar(ficha,this)
    }
    
    Empresa.prototype.deshipotecar = function(ficha) {
        this.estado.deshipotecar(ficha,this)
    }

function Estacion(nombre,precio) {
	this.nombre=nombre
	this.precio=precio
	this.estado = new EnVenta()
    this.propietario = undefined
    this.titulo = new Titulo(this.precio)
}
    Estacion.prototype = new Tema
    Estacion.prototype.cae = function(ficha) {
        this.estado.cae(ficha,this)
    }
    
    Estacion.prototype.comprar = function(ficha) {
        this.estado.comprar(ficha,this)
    }
    
    Estacion.prototype.vender = function(ficha) {
        this.estado.vender(ficha,this)
    }
    
    Estacion.prototype.hipotecar = function(ficha) {
        this.estado.hipotecar(ficha,this)
    }
    
    Estacion.prototype.deshipotecar = function(ficha) {
        this.estado.deshipotecar(ficha,this)
    }

function Calle(color,nombre,precio)  {
	this.color=color
	this.nombre=nombre
	this.precio=precio
	this.estado = new EnVenta()
    this.propietario = undefined
    this.titulo = new Titulo(this.precio)
    this.casas = 0
    this.hotel = 0
}
    Calle.prototype = new Tema
    Calle.prototype.cae = function(ficha) {
        this.estado.cae(ficha,this)
    }
    
    Calle.prototype.comprar = function(ficha) {
        this.estado.comprar(ficha,this)
    }
    
    Calle.prototype.vender = function(ficha) {
        this.estado.vender(ficha,this)
    }
    
    Calle.prototype.hipotecar = function(ficha) {
        this.estado.hipotecar(ficha,this)
    }
    
    Calle.prototype.deshipotecar = function(ficha) {
        this.estado.deshipotecar(ficha,this)
    }
    
    Calle.prototype.construirCasa = function(ficha) {
        this.estado.construirCasa(ficha,this)
    }
    
    Calle.prototype.derruirCasa = function(ficha) {
        this.estado.derruirCasa(ficha,this)
    }
    
    Calle.prototype.construirHotel = function(ficha) {
        this.estado.construirHotel(ficha,this)
    }
    
    Calle.prototype.derruirHotel = function(ficha) {
        this.estado.derruirHotel(ficha,this)
    }
    
    Calle.prototype.getObject = function() {
        return "Calle"
    }
    
function EstadoPropiedad () {
    this.cae = function (ficha,tema) {}
    
    this.comprar = function (ficha,tema) {
        console.warn("Esta propiedad ya esta comprada!")
    }
    
    this.vender = function (ficha,casilla) {
        console.warn("Esa propiedad no esta comprada!")
    }
    
    this.hipotecar = function (ficha,casilla) {
        console.warn("Esa propiedad no esta comprada!")
    }
    
    this.deshipotecar = function (ficha,casilla) {
        console.warn("Esa propiedad no esta hipotecada!")
    }
    
    this.construirCasa = function(ficha) {
        console.warn("No se puede construir casa")
    }
    
    this.derruirCasa = function(ficha) {
        console.warn("No se puede derruir casa")
    }
    
    this.construirHotel = function(ficha) {
        console.warn("No se puede construir hotel")
    }
    
    this.derruirHotel = function(ficha) {
        console.warn("No se puede derruir hotel")
    }
}

function EnVenta() {}
    EnVenta.prototype = new EstadoPropiedad
    EnVenta.prototype.cae = function (ficha,tema) {
       console.log("%c"+tema.nombre,"color:orange")
    }
    
	EnVenta.prototype.comprar = function(ficha,tema) {
		console.log("%cLa '"+tema.nombre+"' cuesta: "+tema.precio+" pelotis","color:blue")
		console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.precio)
		console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.propietario = ficha
		ficha.propiedades.push(tema)
		tema.estado = new Comprada()
        ficha.partida.comprobarMonopolio(ficha,tema)
	}
		
function Comprada() {}
    Comprada.prototype = new EstadoPropiedad
    Comprada.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.alquiler+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.alquiler)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
	Comprada.prototype.vender = function(ficha,tema) {
        console.log("%cLa '"+tema.nombre+"' tiene un valor de: "+tema.precio+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.precio)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        ficha.propiedades.splice(ficha.propiedades.indexOf(tema),1);
        tema.propietario = undefined
        tema.estado = new EnVenta()
        ficha.partida.comprobarMonopolio(ficha,tema)
	}
	
	Comprada.prototype.hipotecar = function(ficha,tema) {
        console.log("%cLa '"+tema.nombre+"' es hipotecada por: "+tema.titulo.hipoteca+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.hipoteca)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        ficha.propiedades.splice(ficha.propiedades.indexOf(tema),1);
        tema.estado = new Hipotecada()
	}
    
    Comprada.prototype.construirCasa = function(ficha,tema) {
        console.log("%cConstruir una casa en la '"+tema.nombre+"' cuesta: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas++
        ficha.partida.casas--
        tema.estado = new ConstruidaUnaCasa()
    }

function Hipotecada() {}
    Hipotecada.prototype = new EstadoPropiedad
    Hipotecada.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: Hipotecada]","color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
	Hipotecada.prototype.vender = function(ficha,tema) {
        console.log("%cLa '"+tema.nombre+"' (hipotecada) tiene un valor de: "+(tema.precio - tema.titulo.hipoteca)+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,(tema.precio - tema.titulo.hipoteca))
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        ficha.propiedades.splice(ficha.propiedades.indexOf(tema),1);
        tema.estado = new EnVenta()
        ficha.partida.comprobarMonopolio(ficha,tema)
	}
    
    Hipotecada.prototype.hipotecar = function (ficha,tema) {
        console.warn("La propiedad ya esta hipotecada")
    }
	
	Hipotecada.prototype.deshipotecar = function(ficha,tema) {
        console.log("%cLa '"+tema.nombre+"' esta hipotecada por: "+(tema.precio - tema.titulo.hipoteca)+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.hipoteca)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.estado = new Comprada()
	}
    
    Hipotecada.prototype.construirCasa = function (ficha,tema) {
        console.warn("No se puede construir casas si la propiedad esta hipotecada!")
    }

function ConstruidaUnaCasa() {}
    ConstruidaUnaCasa.prototype = new EstadoPropiedad
    ConstruidaUnaCasa.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa  '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.unaCasa+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.unaCasa)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
    ConstruidaUnaCasa.prototype.vender = function (ficha,tema) {
        console.warn("Antes de vender debes derribar las casas")
    }
    
    ConstruidaUnaCasa.prototype.hipotecar = function (ficha,tema) {
        console.warn("Antes de hipotecar debes derribar las casas")
    }
    
    ConstruidaUnaCasa.prototype.construirCasa = function (ficha,tema) {
        console.log("%cConstruir una casa en la '"+tema.nombre+"' cuesta: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas++
        ficha.partida.casas--
        tema.estado = new ConstruidaDosCasas()
    }
    
    ConstruidaUnaCasa.prototype.derruirCasa = function (ficha,tema) {
        console.log("%cEl valor de una casa en la '"+tema.nombre+"' es: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas--
        ficha.partida.casas++
        tema.estado = new Comprada()
    }

function ConstruidaDosCasas() {}
    ConstruidaDosCasas.prototype = new EstadoPropiedad
    ConstruidaDosCasas.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.dosCasas+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.dosCasas)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
    ConstruidaDosCasas.prototype.vender = function (ficha,tema) {
        console.warn("Antes de vender debes derribar las casas")
    }
    
    ConstruidaDosCasas.prototype.hipotecar = function (ficha,tema) {
        console.warn("Antes de hipotecar debes derribar las casas")
    }
    
    ConstruidaDosCasas.prototype.construirCasa = function (ficha,tema) {
        console.log("%cConstruir una casa en la '"+tema.nombre+"' cuesta: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas++
        ficha.partida.casas--
        tema.estado = new ConstruidaTresCasas()
    }
    
    ConstruidaDosCasas.prototype.derruirCasa = function (ficha,tema) {
        console.log("%cEl valor de una casa en la '"+tema.nombre+"' es: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas--
        ficha.partida.casas++
        tema.estado = new ConstruidaUnaCasa()
    }

function ConstruidaTresCasas() {}
    ConstruidaTresCasas.prototype = new EstadoPropiedad
    ConstruidaTresCasas.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.tresCasas+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.tresCasas)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
    ConstruidaTresCasas.prototype.vender = function (ficha,tema) {
        console.warn("Antes de vender debes derribar las casas")
    }
    
    ConstruidaTresCasas.prototype.hipotecar = function (ficha,tema) {
        console.warn("Antes de hipotecar debes derribar las casas")
    }
    
    ConstruidaTresCasas.prototype.construirCasa = function (ficha,tema) {
        console.log("%cConstruir una casa en la '"+tema.nombre+"' cuesta: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas++
        ficha.partida.casas--
        tema.estado = new ConstruidaCuatroCasas()
    }
    
    ConstruidaTresCasas.prototype.derruirCasa = function (ficha,tema) {
        console.log("%cEl valor de una casa en la '"+tema.nombre+"' es: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas--
        ficha.partida.casas++
        tema.estado = new ConstruidaDosCasas()
    }

function ConstruidaCuatroCasas() {}
    ConstruidaCuatroCasas.prototype = new EstadoPropiedad
    ConstruidaCuatroCasas.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.cuatroCasas+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.cuatroCasas)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
    ConstruidaCuatroCasas.prototype.vender = function (ficha,tema) {
        console.warn("Antes de vender debes derribar las casas")
    }
    
    ConstruidaCuatroCasas.prototype.hipotecar = function (ficha,tema) {
        console.warn("Antes de hipotecar debes derribar las casas")
    }
    
    ConstruidaCuatroCasas.prototype.construirCasa = function (ficha,tema) {
        console.warn("Ya tienes 4 casas, no puedes construir mas!")
    }
    
    ConstruidaCuatroCasas.prototype.derruirCasa = function (ficha,tema) {
        console.log("%cEl valor de una casa en la '"+tema.nombre+"' es: "+tema.titulo.costeCasa+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.costeCasa)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas--
        ficha.partida.casas++
        tema.estado = new ConstruidaDosCasas()
    }
    
    ConstruidaCuatroCasas.prototype.construirHotel = function (ficha,tema) {
        console.log("%cConstruir un hotel en la '"+tema.nombre+"' cuesta: "+tema.titulo.costeHotel+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,-tema.titulo.costeHotel)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas=0
        tema.hotel++
        ficha.partida.casas = ficha.partida.casas+3
        ficha.partida.hoteles--
        tema.estado = new ConstruidaUnHotel()
    }
    
function ConstruidaUnHotel() {}
    ConstruidaUnHotel.prototype = new EstadoPropiedad
    ConstruidaUnHotel.prototype.cae = function (ficha,tema) {
        if(tema.propietario != ficha) {
            console.log("%cLa '"+tema.nombre+"' pertenece a : "+tema.propietario.figura+"[Alquiler: "+tema.titulo.hotel+"]","color:blue")
            console.log("%cTienes "+ficha.dinero,"color:blue")
            ficha.partida.modificarFondosFicha(ficha,-tema.titulo.hotel)
            console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        }
        else
            console.log("%c"+tema.nombre+" [En Propiedad]","color:orange")
    }
    
    ConstruidaUnHotel.prototype.vender = function (ficha,tema) {
        console.warn("Antes de vender debes derribar el hotel")
    }
    
    ConstruidaUnHotel.prototype.hipotecar = function (ficha,tema) {
        console.warn("Antes de hipotecar debes derribar el hotel")
    }
    
    ConstruidaUnHotel.prototype.construirHotel = function (ficha,tema) {
        console.warn("Ya tienes un hotel, no puedes construir mas!")
    }
    
    ConstruidaUnHotel.prototype.derruirHotel = function (ficha,tema) {
        console.log("%cEl valor del hotel en la '"+tema.nombre+"' es: "+tema.titulo.costeHotel+" pelotis","color:blue")
        console.log("%cTienes "+ficha.dinero,"color:blue")
        ficha.partida.modificarFondosFicha(ficha,tema.titulo.costeHotel)
        console.log("%cTe quedas con "+ficha.dinero,"color:blue")
        tema.casas=4
        tema.hotel=0
        ficha.partida.casas = ficha.partida.casas-4
        ficha.partida.hoteles++
        tema.estado = new ConstruidaCuatroCasas()
    }
    
function Titulo(precio)
{
	this.alquiler = Math.round(precio*0.06)
	this.hipoteca = Math.round(precio*0.5)
	this.unaCasa = Math.round(precio*0.3)
	this.dosCasas = Math.round(precio*0.9)
	this.tresCasas = Math.round(precio*2.7)
	this.cuatroCasas = Math.round(precio*4)
	this.hotel = Math.round(precio*5.5)
	
	this.costeCasa = Math.round(precio*0.5)
	this.costeHotel = Math.round(precio*2.5)
}
//___________________________________________________________________________________________________________________________________________

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE TARJETAS --------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Tarjetas() {
    this.tarjetasSuerte = []
    this.tarjetasComunidad = []
    
    this.agregarTarjetaSuerte = function(tarjeta) {
        this.tarjetasSuerte.push(tarjeta)
    }
    
    this.agregarTarjetaComunidad = function(tarjeta) {
        this.tarjetasComunidad.push(tarjeta)
    }
    
    this.quitarTarjetaSuerte = function(tarjeta) {
        this.tarjetasSuerte.splice(this.tarjetasSuerte.indexOf(tarjeta),1)
    }
    
    this.quitarTarjetaComunidad = function(tarjeta) {
        this.tarjetasSuerte.splice(this.tarjetasSuerte.indexOf(tarjeta),1)
    }
    
    this.seleccionarTarjetaSuerte = function() { //Aleatoria
        return this.tarjetasSuerte[Math.floor(Math.random() * (this.tarjetasSuerte.length))] 
    }
    
    this.seleccionarTarjetaComunidad = function() { //Aleatoria
        return this.tarjetasComunidad[Math.floor(Math.random() * (this.tarjetasComunidad.length))] 
    }
}

function TarjetaPremio(enunciado,premio) {
    this.enunciado = enunciado
    this.premio = premio
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cRecibes: "+premio+" pelotis","color:purple")
        ficha.partida.modificarFondosFicha(ficha,premio)
    }
}

function TarjetaMulta(enunciado,multa) {
    this.enunciado = enunciado
    this.multa = multa
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cDebes: "+multa+" pelotis","color:purple")
        ficha.partida.modificarFondosFicha(ficha,-multa)
    }
}

function TarjetaAvanzar(enunciado,distancia) {
    this.enunciado = enunciado
    this.distancia = distancia
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cAvanzas: "+distancia+" posiciones","color:purple")
        ficha.partida.moverFicha(ficha,distancia)
    }
}

function TarjetaRetroceder(enunciado,distancia) {
    this.enunciado = enunciado
    this.distancia = distancia
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cRetrocedes: "+distancia+" posiciones","color:purple")
        ficha.partida.moverFicha(ficha,distancia)
    }
}

function TarjetaIr(enunciado,posicion) {
    this.enunciado = enunciado
    this.posicion = posicion
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cDebes ir a la casilla: "+posicion,"color:purple")
        ficha.partida.colocarFicha(ficha,posicion)
    }
}

function TarjetaCarcel(enunciado) {
    this.enunciado = enunciado
    
    this.ejecutar = function(ficha) {
        ficha.partida.encarcelarFicha(ficha)
    }
}

function TarjetaSalvarCarcel(enunciado) {
    this.enunciado = enunciado
    
    this.ejecutar = function(ficha) {
        console.log("%c"+enunciado,"color:purple")
        console.log("%cPuedes hacer uso de la tarjeta cuando estes en la Carcel","color:purple")
        console.log("%cEsta tarjeta se ha anadido a tus propiedades","color:purple")
        ficha.propiedades.push(this)
        ficha.partida.tablero.cajaTarjetas.quitarTarjetaSuerte(this)
    }
}


//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE JUEGO Y PARTIDAS ------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Juego() {
	this.partidas=[]
	this.usuarios=[]
	
	this.nuevaPartida = function() {
		this.partidas.push(new Partida())
        return this.partidas[this.partidas.length-1]
	}
	
	this.agregarUsuario = function(user) {
		this.usuarios.push(user)
        return user
	}
}

function Partida() {
    this.id_partida = GenerarIdentificador()
	this.tablero = new Tablero()
	this.dados = new Dados()
    this.fase = new Inicial()
	
	this.fichas=[]	
	this.tipoFichas=["Coche","Barco","Avion","Ordenador","Android","Camara","Flor","Reloj"]
    this.casas=32
    this.hoteles=12
    
    this.tiradasDobles = 0
    
    this.agregarParticipante = function (usuario) {
        this.fase.agregarParticipante(usuario,this)
    }
    this.comenzarPartida = function () {
        this.fase.comenzarPartida(this)
    }
    this.asignarOrdenTurnos = function () {
        //ToDo: Asignar turnos en base a un lanzamiento por cada ficha
        this.fichas[0].turno = new MeToca(this.fichas[0],this)
    }
    this.pasarTurno = function(ficha) {
        var siguienteFicha = this.fichas[((this.fichas.indexOf(ficha))+1) % this.fichas.length]
        
        ficha.turno = new NoMeToca(ficha,this);
        if (!(this.comprobarPartida(ficha)))
            siguienteFicha.turno = new MeToca(siguienteFicha,this)
    }
    
    this.moverFicha = function (ficha,distancia) {
        var posicionAnterior = ficha.posicion
        ficha.posicion = (ficha.posicion + distancia)
		if(ficha.posicion>39) {
            ficha.posicion = ficha.posicion-40
            this.modificarFondosFicha(ficha,200)
            console.log("%cHas pasado por la casilla de Salida: RECIBES 200 PELOTIS!!","color:orange")
        }
        
		console.log("%cAvanzas desde la casilla ["+posicionAnterior+"] => ["+ficha.posicion+"]","color:green")
        this.cae(ficha)
    }
    
    this.colocarFicha = function (ficha,posicion) {
        ficha.posicion = posicion
        this.cae(ficha)
    }
    
    this.encarcelarFicha = function (ficha) {
        ficha.turno.estado = new Lanzado()
        ficha.estado = new Encarcelado()
        this.pasarTurno(ficha)
        this.tiradasDobles = 0
        console.warn("%c"+ficha.figura+" va a la Carcel!","color:red")
        this.colocarFicha(ficha,10)
    }
    
    this.expropiarPropiedades = function (ficha) {
        
        for(var i=0;i<ficha.propiedades.length;i++) 
        {
            if(ficha.propiedades[i] instanceof TarjetaSalvarCarcel) {
                this.tablero.cajaTarjetas.agregarTarjetaSuerte(ficha.propiedades[i])
            }
            else
            {
                this.casas = this.casas + ficha.propiedades[i].casas
                this.hoteles = this.hotel + ficha.propiedades[i].hotel
                ficha.propiedades[i].casas = 0
                ficha.propiedades[i].hotel = 0
                ficha.propiedades[i].estado = new EnVenta()
                ficha.propiedades[i].propietario = undefined
            }
        }
        
        ficha.propiedades = []
    }
    
    this.cae = function (ficha) {
        this.tablero.cae(ficha)
    }
    
    this.comprar = function (ficha) {
        this.tablero.comprar(ficha)
    }
    
    this.vender = function(ficha,casilla) {
        //ToDo: Comprobar antes de vender si es monopolio y hay alguna casa construida
        if(this.tablero.casillas[casilla].tema.propietario == ficha)
            this.tablero.vender(ficha,casilla)
        else
            console.warn("La propiedad indicada no es tuya!")
    }
    
    this.hipotecar = function(ficha,casilla) {
        if(this.tablero.casillas[casilla].tema.propietario == ficha)
            this.tablero.hipotecar(ficha,casilla)
        else
            console.warn("La propiedad indicada no es tuya!")
    }
    
    this.deshipotecar = function(ficha,casilla) {
        if(this.tablero.casillas[casilla].tema.propietario == ficha)
            this.tablero.deshipotecar(ficha,casilla)
        else
            console.warn("La propiedad indicada no es tuya!")
    }
    
    this.construirCasa = function(ficha,casilla) {
        if(this.casa>0) {
            if(this.tablero.casillas[casilla].tema.propietario == ficha) {
                for(var i=0;i<ficha.monopolios.length;i++) {
                    if(ficha.monopolios[i]==this.tablero.casillas[casilla].tema.color) {
                        this.tablero.construirCasa(ficha,casilla)
                        return true
                    }
                }
                console.warn("Necesitas ser propietario de todas las propiedades del mismo color para edificar!")
                return false
            }
            else {
                console.warn("La propiedad indicada no es tuya!")
                return false
            }
        }
        else {
            console.warn("No hay casas en el tablero para construir!")
        }
        
        //Nota: ToDo-->Para restringir la construcción "gradual" utilizar el atributo casas de calle
    }
    
    this.derruirCasa = function(ficha,casilla) {
        if(this.tablero.casillas[casilla].tema.propietario == ficha)
            this.tablero.derruirCasa(ficha,casilla)
        else
            console.warn("La propiedad indicada no es tuya!")
    }
    
    this.construirHotel = function(ficha,casilla) {
        if(this.hoteles>0) {
            if(this.tablero.casillas[casilla].tema.propietario == ficha)
                this.tablero.construirHotel(ficha,casilla)
            else
                console.warn("La propiedad indicada no es tuya!")
        }
        else {
            console.warn("No hay hoteles en el tablero para construir!")
        }
    }
    
    this.derruirHotel = function(ficha,casilla) {
        if(this.tablero.casillas[casilla].tema.propietario == ficha)
            this.tablero.derruirHotel(ficha,casilla)
        else
            console.warn("La propiedad indicada no es tuya!")
    }
    
    this.modificarFondosFicha = function(ficha,cantidad) {
        ficha.dinero = ficha.dinero + cantidad
        
        if(ficha.dinero < 0)
            console.log('%cDebes dinero, si no vendes propiedades antes de finalizar el turno quedaras arruinado y no podras volver a jugar en esta partida', 'background: #222; color:yellow; font-size: 15px');
    }
    
    this.comprobarMonopolio = function(ficha,tema) {
        var monopolioTablero=[]
        var monopolioPropietario=[]
        
        if(tema.getObject == "Calle") {
            for(var i=0;i<this.tablero.casillas.length;i++) {
                if(this.tablero.casillas[i].tema.getObject == "Calle") {
                    if(this.tablero.casillas[i].tema.color == tema.color) {
                        monopolioTablero.push(this.tablero.casillas[i])
                        if(this.tablero.casillas[i].tema.propietario == ficha)
                            monopolioPropietario.push(this.tablero.casillas[i])
                    }
                }
            }
            
            if(monopolioTablero.length == monopolioPropietario.length) {
                console.log("%cEnhorabuena, ahora eres propietario del monopolio "+tema.color+"!","color:orange")
                ficha.monopolios.push(tema.color)
            }
            else {
                for(var j=0;j<ficha.monopolios.length;j++) {
                    if(ficha.monopolios[j]==tema.color) {
                        ficha.monopolios.splice(ficha.monopolios[j],1);
                        console.log("%cHas perdido el monopolio "+tema.color+"!","color:orange")
                        break
                    }
                }
            }
        }
    }
    
    this.comprobarPartida = function(ficha) {
        
        if(ficha.dinero < 0) {
            console.log("%c"+ficha.figura+" ha perdido porque esta arruinado!","color:red")
            ficha.estado = new Arruinado()
            ficha.turno.estado = new Lanzado()
            this.expropiarPropiedades(ficha)
            
            var noArruinados = this.fichas.filter(SinArruinar)
            
            if(noArruinados.length == 1) {
                console.log("%c"+noArruinados[0].figura+" ha ganado la partida!!","background: #222; color: green; font-size: 15px")
                this.fase = new Final()
                return true
            }
        }
        else if(ficha.dinero >= 3500) {
            console.log("%c"+ficha.figura+" ha ganado la partida!!","background: #222; color: green; font-size: 15px")
            ficha.turno.estado = new Lanzado()
            this.fase = new Final()
            return true
        }
        
        return false
        
        function SinArruinar(ficha) {
            if (!(ficha.estado instanceof Arruinado))
                return ficha
        }
    }
    
    this.reiniciarPartida = function () {
        this.fase.reiniciarPartida(this)
    }
}

function Ficha(partida,usuario,figura)
{	
    this.id_ficha = GenerarIdentificador()
	this.partida = partida
	this.usuario = usuario
	this.figura = figura
    this.turno = new NoMeToca(this,partida);
	this.dinero = 1500
	this.posicion = 0
    this.estado = new Libre()
	this.propiedades = []
    this.monopolios=[]
    this.turnosEncarcelado = 0
    
    this.lanzarDados = function() {
        this.turno.lanzarDados(this,partida)
    }
    
    this.pasarTurno = function() {
        this.turno.pasarTurno(this,this.partida)
    }
    
    this.comprar = function() {
        this.turno.comprar(this)
    }
    
    this.vender = function(casilla) {
        this.turno.vender(this,casilla)
    }
    
    this.hipotecar = function(casilla) {
        this.turno.hipotecar(this,casilla)
    }
    
    this.deshipotecar = function(casilla) {
        this.turno.deshipotecar(this,casilla)
    }
    
    this.construirCasa = function(Casilla) {
        this.turno.construirCasa(this,Casilla)
    }
    
    this.derruirCasa = function(Casilla) {
        this.turno.derruirCasa(this,Casilla)
    }
    
    this.construirHotel = function(Casilla) {
        this.turno.construirHotel(this,Casilla)
    }
    
    this.derruirHotel = function(Casilla) {
        this.turno.derruirHotel(this,Casilla)
    }
    
    this.pagarCarcel = function() {
        this.turno.pagarCarcel(this,this.partida)
    }
    
    this.usarTarjeta = function() {
        this.turno.usarTarjeta(this)
    }
}

function Libre() {
    this.nombre="Libre"
    this.indicarEstado = function (ficha) {
        return new NoLanzado()
    }
}

function Encarcelado() {
    this.nombre="Encarcelado"
    this.indicarEstado = function (ficha) {
        return new NoLanzadoEncarcelado()
    }
}

function Arruinado() {
    this.nombre="Arruinado"
    this.indicarEstado = function (ficha) {
        console.log("%s"+ficha.figura+" esta arruinado, salta el turno!","color:red; font-size: 15px");
        return new NoLanzadoArruinado(ficha)
    }
}

function Usuario(nombre) {
    this.id_usuario = GenerarIdentificador()
	this.nombre = nombre
	this.nivel = 0
	this.partidas=[]
	this.partidas["jugadas"] = 0
	this.partidas["ganadas"] = 0
	this.partidas["perdidas"] = 0
	this.partidas["abandonadas"] = 0
}

//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------- FASES -----------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function Fases() {
    this.comenzarPartida = function (partida) {
        console.warn('No se puede volver a empezar la partida!')
    }
    this.agregarParticipante = function (usuario,partida) {
        console.warn("No se pueden anadir participantes!")
    }
    
    this.reiniciarPartida = function (partida)
    {
        console.warn("No se puede reiniciar la partida")
    }
}

function Inicial() {
    this.nombre='Fase Inicial'
}
    Inicial.prototype = new Fases
    Inicial.prototype.comenzarPartida = function (partida) {
        if(partida.fichas.length>=2) {
            partida.fase = new Jugar()
            partida.asignarOrdenTurnos()                                        //Establece el orden de los turnos
            console.log("Comienza la Partida [Numero de Usuarios: "+partida.fichas.length+"]")
        }
        else
            console.warn("Se necesitan al menos 2 participantes!")
    }

    Inicial.prototype.agregarParticipante = function (usuario,partida) {
        if (partida.fichas.length < 6)
        {
            var x = Math.floor(Math.random() * (partida.tipoFichas.length))        //Obtiene una figura aleatoria
            partida.fichas.push(new Ficha(partida,usuario,partida.tipoFichas[x]))  //Crea una ficha con la figura aleatoria
            partida.tipoFichas.splice(x,1);                                        //Quita un elemento de la posición x y reindexa el array
        }
        else
            console.warn("No se pueden agragar mas de 6 participantes a la partida")
    }


function Jugar() {
    this.nombre='Fase Jugar'
}
    Jugar.prototype = new Fases

function Final() {
    this.nombre='Fase Final'
    
    console.log('%cLa partida ha finalizado!!', 'background: #222; color: orange; font-size: 15px');
}
    Final.prototype = new Fases
    Final.prototype.reiniciarPartida = function (partida) {
        var p = new Partida()
        
        for(var ficha in partida.fichas)
            p.agregarParticipante(ficha.usuario)
        
        partida.id_partida = p.id_partida
        partida.tablero = p.tablero
        partida.dados = p.dados
        partida.fase = p.fase
        partida.fichas = p.fichas
        partida.tipoFichas = p.tipoFichas
        partida.casas = p.casas
        partida.hoteles = p.hoteles
        partida.tiradasDobles = p.tiradasDobles
    }
//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GESTION DE TURNOS ----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
function MeToca (ficha,partida) {
    this.nombre = "Me Toca"
    this.estado = ficha.estado.indicarEstado(ficha)
    
    this.lanzarDados = function (ficha,partida) {
        ficha.turno.estado.lanzarDados(ficha,partida)
    }
    
    this.pasarTurno = function (ficha,partida) {
        ficha.turno.estado.pasarTurno(ficha,partida)
    }
    
    this.comprar = function (ficha) {
        ficha.turno.estado.comprar(ficha,partida)
    }
    
    this.vender = function (ficha,casilla) {
        ficha.turno.estado.vender(ficha,casilla,partida)
    }
    
    this.hipotecar = function (ficha,casilla) {
        ficha.turno.estado.hipotecar(ficha,casilla,partida)
    }
    
    this.deshipotecar = function (ficha,casilla) {
        ficha.turno.estado.deshipotecar(ficha,casilla,partida)
    }
    
    this.construirCasa = function(ficha,casilla) {
        ficha.turno.estado.construirCasa(ficha,casilla,partida)
    }
    
    this.derruirCasa = function(ficha,casilla) {
        ficha.turno.estado.derruirCasa(ficha,casilla,partida)
    }
    
    this.construirHotel = function(ficha,casilla) {
        ficha.turno.estado.construirHotel(ficha,casilla,partida)
    }
    
    this.derruirHotel = function(ficha,casilla) {
        ficha.turno.estado.derruirHotel(ficha,casilla,partida)
    }
    
    this.pagarCarcel = function(ficha,partida) {
        ficha.turno.estado.pagarCarcel(ficha,partida)
    }
    
    this.usarTarjeta = function(ficha) {
        ficha.turno.estado.usarTarjeta(ficha,partida)
    }
}

function NoMeToca (ficha,partida) {
    this.nombre = "No me Toca"
    this.lanzarDados = function (ficha,partida) {
        console.warn("No puedes lanzar dados!")
    }
    this.pasarTurno = function (ficha,partida) {
        console.warn("No puedes pasar turno!")
    }
    
    this.comprar = function (ficha,partida) {
        console.warn("No puedes comprar!")
    }
    
    this.vender = function (ficha,casilla,partida) {
        console.warn("No puedes vender!")
    }
    
    this.hipotecar = function (ficha,casilla,partida) {
        console.warn("No puedes hipotecar!")
    }
    
    this.deshipotecar = function (ficha,casilla,partida) {
        console.warn("No puedes deshipotecar!")
    }
    
    this.construirCasa = function(ficha,casilla,partida) {
        console.warn("No puedes construir una casa!")
    }
    
    this.derruirCasa = function(ficha,casilla,partida) {
        console.warn("No puedes derruir una casa!")
    }
    
    this.construirHotel = function(ficha,casilla,partida) {
        console.warn("No puedes construir un hotel!")
    }
    
    this.derruirHotel = function(ficha,casilla,partida) {
        console.warn("No puedes derruir un hotel!")
    }
    
    this.pagarCarcel = function(ficha,partida) {
        console.warn("No puedes pagar la carcel, no es tu turno!")
    }
    
    this.usarTarjeta = function(ficha) {
        console.warn("No puedes usar la tarjeta de carcel, no es tu turno!")
    }
}

function NoLanzado() {
    this.lanzarDados = function (ficha,partida) {
        partida.dados.tirarDados()
        console.log("%cHas sacado un: "+partida.dados.resultado+" [Dado1: "+partida.dados.dado1+"|Dado2: "+partida.dados.dado2+"]","color:green")
        
        if(!partida.dados.esDoble()) {
            ficha.turno.estado = new Lanzado()
            partida.tiradasDobles = 0
            partida.moverFicha(ficha,partida.dados.resultado)
        }
        else {
            partida.tiradasDobles++
            console.log("%cHas sacado doble!!","color:green")
            ficha.turno.estado = new LanzadoDoble()
            partida.moverFicha(ficha,partida.dados.resultado)
        }
    }
    
    this.pasarTurno = function (ficha,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.comprar = function (ficha,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.vender = function (ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.hipotecar = function (ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.deshipotecar = function (ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.construirCasa = function(ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.derruirCasa = function(ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.construirHotel = function(ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.derruirHotel = function(ficha,casilla,partida) {
        console.warn("Primero debes lanzar!")
    }
    
    this.pagarCarcel = function(ficha,partida) {
        console.warn("No estas encarcelado!")
    }
    
    this.usarTarjeta = function(ficha,partida) {
        console.warn("No estas encarcelado!")
    }
}

function Lanzado() {
    this.lanzarDados = function (ficha,partida) {
        console.warn("Ya has lanzado!")
    }
    
    this.pasarTurno = function (ficha,partida) {
        partida.pasarTurno(ficha)
    }
    
    this.comprar = function (ficha,partida) {
        partida.comprar(ficha)
    }
    
    this.vender = function (ficha,casilla,partida) {
        partida.vender(ficha,casilla)
    }
    
    this.hipotecar = function (ficha,casilla,partida) {
        partida.hipotecar(ficha,casilla)
    }
    
    this.deshipotecar = function (ficha,casilla,partida) {
        partida.deshipotecar(ficha,casilla)
    }
    
    this.construirCasa = function(ficha,casilla,partida) {
        partida.construirCasa(ficha,casilla)
    }
    
    this.derruirCasa = function(ficha,casilla,partida) {
        partida.derruirCasa(ficha,casilla)
    }
    
    this.construirHotel = function(ficha,casilla,partida) {
        partida.construirHotel(ficha,casilla)
    }
    
    this.derruirHotel = function(ficha,casilla,partida) {
        partida.derruirHotel(ficha,casilla)
    }
    
    this.pagarCarcel = function(ficha,partida) {
        console.warn("Ya has lanzado!")
    }
    
    this.usarTarjeta = function(ficha,partida) {
        console.warn("Ya has lanzado!")
    }
}

function LanzadoDoble() {}
    LanzadoDoble.prototype = new Lanzado
    LanzadoDoble.prototype.lanzarDados = function (ficha,partida) {
        partida.dados.tirarDados()
        console.log("%cHas sacado un: "+partida.dados.resultado+" [Dado1: "+partida.dados.dado1+"|Dado2: "+partida.dados.dado2+"]","color:green")
        
        if(!partida.dados.esDoble()) {
            ficha.turno.estado = new Lanzado()
            partida.tiradasDobles = 0
            partida.moverFicha(ficha,partida.dados.resultado)
        }
        else {
            partida.tiradasDobles++
            console.log("%cHas sacado doble!!","color:green")
            if(partida.tiradasDobles<3) {
                ficha.turno.estado = new LanzadoDoble()
                partida.moverFicha(ficha,partida.dados.resultado)
            }
            else {
                partida.encarcelarFicha(ficha)
            }
        }
    }
    
    LanzadoDoble.prototype.pasarTurno = function (ficha,partida) {
        console.warn("Has sacado doble, debes volver a tirar!")
    }
    
function NoLanzadoEncarcelado() {}
    NoLanzadoEncarcelado.prototype = new NoLanzado
    NoLanzadoEncarcelado.prototype.lanzarDados = function (ficha,partida) {
        ficha.turnosEncarcelado++
        partida.dados.tirarDados()
        console.log("%cHas sacado un: "+partida.dados.resultado+" [Dado1: "+partida.dados.dado1+"|Dado2: "+partida.dados.dado2+"]","color:green")
        
        if(ficha.turnosEncarcelado<3)
        {
            if(partida.dados.esDoble())
            {
                console.log("%cSales de la Carcel","color:green")
                ficha.turnosEncarcelado = 0
                ficha.estado = new Libre()
                ficha.turno.estado = new Lanzado()
                partida.moverFicha(ficha,partida.dados.resultado)
            }
            else
                console.warn("Continuas en la Carcel")
        }
        else {
            ficha.partida.modificarFondosFicha(ficha,-100)
            console.warn("Has tenido que pagar 100 pelotis para salir de la Carcel")
            ficha.turnosEncarcelado = 0
            ficha.estado = new Libre()
            ficha.turno.estado = new Lanzado()
            partida.moverFicha(ficha,partida.dados.resultado)
        }
    }
    
    NoLanzadoEncarcelado.prototype.pagarCarcel = function (ficha,partida) {
        ficha.partida.modificarFondosFicha(ficha,-100)
        console.warn("Has pagado 100 pelotis para salir de la Carcel")
        ficha.turnosEncarcelado = 0
        ficha.estado = new Libre()
        ficha.turno.estado = new NoLanzado()
    }
    
    NoLanzadoEncarcelado.prototype.usarTarjeta = function (ficha,partida) {
        
        var tarjeta = undefined
        
        for(var i=0;i<ficha.propiedades.length;i++){
            if(ficha.propiedades[i] instanceof TarjetaSalvarCarcel) {
                tarjeta = ficha.propiedades[i]
                break
            }
        }
        
        if(tarjeta != undefined) {
            console.warn("Has utilizado tu tarjeta para salir de la Carcel")
            ficha.turnosEncarcelado = 0
            ficha.estado = new Libre()
            ficha.turno.estado = new NoLanzado()
            ficha.propiedades.splice(ficha.propiedades.indexOf(tarjeta),1);
            partida.tablero.cajaTarjetas.agregarTarjetaSuerte(tarjeta)
        }
        else
        {
            console.warn("No tienes ninguna tarjeta para utilizar!")
        }
    }

function NoLanzadoArruinado(ficha) {
    ficha.turno.estado = new Lanzado()
    ficha.turno.estado.pasarTurno(ficha,ficha.partida)
}
//___________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- GENERADOR DE IDENTIFICADORES -----------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//http://goo.gl/Ce8hOv
function GenerarIdentificador() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}
//___________________________________________________________________________________________________________________________________________



//LEYENDA------------------------------------------------------------------------------------------------------------------------------------
//Mensajes negros -> Interacción con el juego
//Mensajes verdes -> Interacción con el tablero
//Mensajes naranjas -> Interacción con las casillas
//Mensajes azules -> Interacción con transacciones
//Mensajes violetas -> Interaccion con las tarejtas
//Mensajes rojos -> Penalizaciones (Cárcel,Pago dinero,...)
//___________________________________________________________________________________________________________________________________________


//ToDo---------------------------------------------------------------------------------------------------------------------------------------
// - Guardar partidas participadas,ganadas,perdidas y puntuación...


//Exportar Objetos---------------------------------------------------------------------------------------------------------------------------
module.exports.Juego = Juego;
module.exports.Usuario = Usuario;
module.exports.Partida = Partida;
module.exports.Tablero = Tablero;
module.exports.Dados = Dados;
module.exports.Estacion = Estacion;
module.exports.Empresa = Empresa;
module.exports.Impuesto = Impuesto;
module.exports.Comunidad = Comunidad;
module.exports.Suerte = Suerte;
module.exports.Calle = Calle;
module.exports.TarjetaPremio = TarjetaPremio;
module.exports.TarjetaMulta = TarjetaMulta;
module.exports.TarjetaAvanzar = TarjetaAvanzar;
module.exports.TarjetaRetroceder = TarjetaRetroceder;
module.exports.TarjetaIr = TarjetaIr;
module.exports.TarjetaCarcel = TarjetaCarcel;
module.exports.TarjetaSalvarCarcel = TarjetaSalvarCarcel;
module.exports.Inicial = Inicial;
module.exports.Jugar = Jugar;
module.exports.Final = Final;
module.exports.Libre = Libre;
module.exports.Lanzado = Lanzado;
module.exports.NoLanzado = NoLanzado;
module.exports.EnVenta = EnVenta;