function Tablero(numeroCasillas) {
	this.casillas=[]
	this.numeroCasillas=numeroCasillas
	
	this.agregarCasilla = function(posicion,casilla) {
		this.casillas[posicion]=casilla
	}
	this.iniciarTablero=function() {
		
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
		this.casillas[32] = new Casilla (new Calle("Naranja","Calle Alcalá",300))
		this.casillas[34] = new Casilla (new Calle("Naranja","Gran Vía",320))
		
		this.casillas[37] = new Casilla (new Calle("AzulOscuro","Paseo de la Castellana",350))
		this.casillas[39] = new Casilla (new Calle("Naranja","Paseo del Prado",400))
		
	}
	this.configurarTablero=function() {
		this.agregarCasilla(0,new Casilla(new Salida));
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
	
	this.setColor = function(color) {this.color = color}
	this.getColor = function() {return color}
	
	this.setNombre = function(nombre) { this.nombre = nombre}
	this.getNombre = function() { return nombre }
	
	this.setPrecio = function(precio) { this.precio = precio}
	this.getPrecio = function() { return precio}
}

function iniJuego() {
	this.tablero = new Tablero(40)
}