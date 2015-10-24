function Tablero(numeroCasillas) {
	this.casillas=[]
	this.numeroCasillas=numeroCasillas
	
	this.iniciarTablero=function() {
		
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
		this.casillas[4] = new Casilla (new Impuesto("Impuesto de Capital",200))
		this.casillas[38] = new Casilla (new Impuesto("Impuesto de Lujo",100))
		//CasillasEmpresas-----------------------------------------------------------------------
		this.casillas[12] = new Casilla (new Empresa("Compañia de Electricidad",150))
		this.casillas[28] = new Casilla (new Empresa("Compañia del Agua",150))
		//CasillasEstaciones---------------------------------------------------------------------
		this.casillas[5] = new Casilla (new Estacion("Estación de Goya",200))
		this.casillas[15] = new Casilla (new Estacion("Estación de las Delicias",200))
		this.casillas[25] = new Casilla (new Estacion("Estación de Mediodía",200))
		this.casillas[35] = new Casilla (new Estacion("Estación del Norte",200))
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
		this.casillas[18] = new Casilla (new Calle("Naranja","Calle Velázquez",180))
		this.casillas[19] = new Casilla (new Calle("Naranja","Calle Serrano",200))
		
		this.casillas[21] = new Casilla (new Calle("Rojo","Avenida de América",220))
		this.casillas[23] = new Casilla (new Calle("Rojo","Calle María de Molina",220))
		this.casillas[24] = new Casilla (new Calle("Rojo","Calle Cea Bermúdez",240))
		
		this.casillas[26] = new Casilla (new Calle("Amarillo","Avenida de los Reyes Católicos",260))
		this.casillas[27] = new Casilla (new Calle("Amarillo","Calle Bailén",260))
		this.casillas[29] = new Casilla (new Calle("Amarillo","Plaza de España",280))
		
		this.casillas[31] = new Casilla (new Calle("Verde","Puerta del Sol",300))
		this.casillas[32] = new Casilla (new Calle("Verde","Calle Alcalá",300))
		this.casillas[34] = new Casilla (new Calle("Verde","Gran Vía",320))
		
		this.casillas[37] = new Casilla (new Calle("AzulOscuro","Paseo de la Castellana",350))
		this.casillas[39] = new Casilla (new Calle("AzulOscuro","Paseo del Prado",400))
		
	}
	
	this.obtenerCasilla=function(posicion) {
		return this.casillas[posicion]
	}
	
	this.obtenerPosicion=function(tema) {
		
	}
	
	this.iniciarTablero()
}

function Casilla(tema) {
	this.tema=tema // inicializarlo a nada = undefine
	
	this.obtenerTema=function() {
		return tema
	}
}

function Salida() {
	this.nombre="Salida"
}

function Carcel() {
	this.nombre="Carcel"  // Casilla 10
}

function Parking() {
	this.nombre="Parking Gratuito"
}

function Multa() {
	this.nombre="MultaCarcel"
}

function Suerte() {
	this.nombre="Suerte"
}

function Comunidad(coste) {
	this.nombre="Comunidad"
	this.coste=coste
}

function Impuesto(nombre,coste) {
	this.nombre=nombre
	this.coste=coste
	
	this.setNombre = function(nombre) { this.nombre = nombre}
	this.getNombre = function() { return nombre }
	
	this.setCoste = function(coste) { this.coste = coste}
	this.getCoste = function() { return coste}
}

function Empresa(nombre,precio) {
	this.nombre=nombre
	this.precio=precio
	
	this.setNombre = function(nombre) { this.nombre = nombre}
	this.getNombre = function() { return nombre }
	
	this.setPrecio = function(precio) { this.precio = precio}
	this.getPrecio = function() { return precio}
}

function Estacion(nombre,precio) {
	this.nombre=nombre
	this.precio=precio
	
	this.setNombre = function(nombre) { this.nombre = nombre}
	this.getNombre = function() { return nombre }
	
	this.setPrecio = function(precio) { this.precio = precio}
	this.getPrecio = function() { return precio}
}

function Calle(color,nombre,precio)  {
	this.color=color
	this.nombre=nombre
	this.precio=precio
	this.titulo = new Titulo(this.precio)							//Creamos el título
	this.estado = libre(this)
	
	function libre (calle) {
		this.comprar = function(ficha)
		{
			console.log("La calle '"+calle.nombre+"' cuesta: "+this.precio+" pelotis")
			console.log("Tienes "+ficha.dinero)
			ficha.dinero = ficha.dinero - this.precio
			console.log("Te quedas con "+ficha.dinero)
			ficha.propiedades.push(calle)
			this.estado = comprada(calle)
		}
	}
		
	function comprada (calle)
	{
		this.vender = function(ficha)
		{
			console.log("La calle '"+calle.nombre+"' cuesta: "+this.precio+" pelotis")
			console.log("Tienes "+ficha.dinero)
			ficha.dinero = ficha.dinero + this.precio
			ficha.propiedades.splice(ficha.propiedades.indexof(calle),1);
		}
	}
		
	this.setColor = function(color) {this.color = color}
	this.getColor = function() {return color}
	
	this.setNombre = function(nombre) { this.nombre = nombre}
	this.getNombre = function() { return nombre }
	
	this.setPrecio = function(precio) { this.precio = precio}
	this.getPrecio = function() { return precio}
	
	this.setEstado = function(estado) {this.estado = estado}
	this.getEstado = function() { return precio}
}

function Titulo(precio)
{
	this.alquiler = precio*0.06
	this.hipoteca = precio*0.5
	this.unaCasa = precio*0.3
	this.dosCasas = precio*0.9
	this.tresCasas = precio*2.7
	this.cuatroCasas = precio*4
	
	this.costeCasa = precio*0.5
	this.costeHotel = precio*2.5
}

function Juego() {
	this.partidas=[]
	this.usuarios=[]
	
	this.nuevaPartida = function() {
		this.partidas.push(new Partida())
	}
	
	this.agregarUsuario = function(user) {
		this.usuarios.push(user)
	}
}

function Partida() {
	this.tablero = new Tablero(40)
	this.dados = new Dados()
	
	this.fichas=[]	
	this.tipoFichas=["Coche","Barco","Sombrero","Zapato","Dedal","Plancha","Carretilla","Perro"]
	
	this.agregarParticipante = function(user) {
		if(this.fichas.length < 6 )
		{
			//Comprobar si el participante es usuario del juego	y no es un participante del juego ya
			var x = Math.floor(Math.random() * (this.tipoFichas.length))//Obtiene una figura aleatoria
			this.fichas.push(new Ficha(this,user,this.tipoFichas[x],1500,0))
			this.tipoFichas.splice(x,1);//Quita un elemento de la posición x y reindexa el array
		}
		else
			console.log("No se pueden agragar más de 6 participantes a la partida")
	}
}

function Ficha(partida,usuario,figura,dinero,posicion)
{	
	var cont = 0
	
	this.partida = partida
	this.usuario = usuario
	this.figura = figura
	this.dinero = dinero
	this.posicion = posicion
	this.propiedades = []
	
	this.lanzar = function()
	{
		var pos = this.posicion
		partida.dados.tirarDados()
		console.log("Has sacado un: "+partida.dados.resultado)
		this.posicion = (this.posicion + this.partida.dados.resultado)
		if(this.posicion>39)
				this.posicion = this.posicion-40
		console.log("Avanzas desde la casilla ["+pos+"] => ["+this.posicion+"]")
		
		if (partida.dados.esDoble()) {
			console.log("Has sacado doble!!")
			if (cont<2) {
				console.log("Vuelves a Tirar")
				cont++
			}
			else {
				this.posicion = 10
				cont = 0
				console.log("Vas a la Carcel!! => ["+this.posicion+"]")
			}
		}
		else
			cont = 0
	}
}

function Usuario(nombre) {
	this.nombre = nombre
	this.nivel = 0
	this.partidas=[]
	this.partidas["jugadas"] = 0
	this.partidas["ganadas"] = 0
	this.partidas["perdidas"] = 0
	this.partidas["abandonadas"] = 0
}