var fs=require("fs");
var express=require("express");
//var path=require("path");
var monopoly=require("./server/monopoly.js");

var http=require("http");

var config=JSON.parse(fs.readFileSync("./config.json"));
var host=config.host;
var port=config.port;

//var application_root=__dirname;

var app=express();
var server=http.Server(app);
var io = require('socket.io')(server);

    server.listen(port,host);
    console.log("Servidor Iniciado | Puerto: "+port);

var juego = new monopoly.Juego();
var partida = juego.nuevaPartida();                //A modificar a la hora de implementar partidas

app.use("/",express.static(__dirname));

app.get("/",function(request,response){
	var contenido=fs.readFileSync("./client/index.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});

// Funciones: LLamada a Modelo --------------------------------------------------------------------

app.get("/NuevoUsuario/:nombre",function(request,response){
	console.log("Nuevo Usuario: "+request.params.nombre);
	var usuario=new monopoly.Usuario(request.params.nombre);
	var jsonData={"usuario":juego.agregarUsuario(usuario)};
	response.send(jsonData);
});

app.get("/NuevaPartida",function(request,response){
    //A realizar para implementar las partidas
});

app.get("/NuevoParticipante/:id_usuario",function(request,response){
    var usuario = buscarUsuario(request.params.id_usuario);
    partida.agregarParticipante(usuario);
    var ficha = partida.fichas[partida.fichas.length-1];      //Mirar
    console.log("Ficha: "+ficha.id_ficha);
    var jsonData={
        "id_ficha":ficha.id_ficha,
        "id_partida":ficha.partida.id_partida,
        "usuario":request.params.id_usuario,
        "figura":ficha.figura,
        "turno":ficha.turno,
        "dinero":ficha.dinero,
        "posicion":ficha.posicion,
        "estado":ficha.estado,
        "propiedades":ficha.propiedades.length,
        "monopolios":ficha.monopolios.length,
        "turnosEncarcelado":ficha.turnosEncarcelado};
    response.send(jsonData);
});

app.get("/LanzarDados/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.lanzarDados();
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/PasarTurno/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.pasarTurno();
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/Comprar/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.comprar();
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/Vender/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.vender(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/Hipotecar/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.hipotecar(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/Deshipotecar/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.deshipotecar(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/ConstruirCasa/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.construirCasa(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/DerruirCasa/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.derruirCasa(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/ConstruirHotel/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.construirHotel(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/DerruirHotel/:id_ficha/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.derruirHotel(request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/PagarCarcel/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.pagarCarcel();
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/UsarTarjeta/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
    ficha.usarTarjeta();
    io.emit("ok_actualizar");
    response.send(true); 
});

app.get("/ColocarFicha/:id_partida/:casilla",function(request,response){
    var ficha = buscarFicha(request.params.id_partida);
    partida.colocarFicha(ficha,request.params.casilla);
    io.emit("ok_actualizar");
    response.send(true);
});

app.get("/InformacionUsuario/:id_usuario",function(request,response){
	var jsonData={"usuario":buscarUsuario(request.params.id_usuario)};
	response.send(jsonData);
});

app.get("/InformacionFicha/:id_ficha",function(request,response){
    var ficha = buscarFicha(request.params.id_ficha);
	var jsonData={
        "id_ficha":ficha.id_ficha,
        "id_partida":ficha.partida.id_partida,
        "usuario":ficha.usuario.id_usuario,
        "figura":ficha.figura,
        "turno":ficha.turno,
        "dinero":ficha.dinero,
        "posicion":ficha.posicion,
        "estado":ficha.estado,
        "propiedades":ficha.propiedades.length,
        "monopolios":ficha.monopolios.length,
        "turnosEncarcelado":ficha.turnosEncarcelado};
    response.send(jsonData); 
});

app.get("/InformacionPartida/:id_partida",function(request,response){  
	var p = buscarPartida(request.params.id_partida);
    var fichas = [];
    
    for (var i=0;i<p.fichas.length;i++) {
        var jsonDataFicha={
            "id_ficha":p.fichas[i].id_ficha,
            "figura":p.fichas[i].figura,
            "dinero":p.fichas[i].dinero,
            "posicion":p.fichas[i].posicion,
            "estado":p.fichas[i].estado
        }
        fichas.push(jsonDataFicha);
    }
    
	var jsonData={
        "id_partida":p.id_partida,
        //"tablero":p.tablero,
        "dados":p.dados,
        "fase":p.fase,
        "fichas":fichas,
        "tipoFichas":p.tipoFichas,
        "casas":p.casas,
        "hoteles":p.hoteles,
        "tiradasDobles":p.tiradasDobles};
    response.send(jsonData);  
});

app.get("/InformacionPartidaGeneral",function(request,response){ //Modificar para realizar la gestión de partidas
	var p = partida;
    var fichas = [];
    
    for (var i=0;i<p.fichas.length;i++) {
        var jsonDataFicha={
            "id_ficha":p.fichas[i].id_ficha,
            "figura":p.fichas[i].figura,
            "dinero":p.fichas[i].dinero,
            "posicion":p.fichas[i].posicion,
            "estado":p.fichas[i].estado
        }
        fichas.push(jsonDataFicha);
    }
    
	var jsonData={
        "id_partida":p.id_partida,
        //"tablero":p.tablero,
        "dados":p.dados,
        "fase":p.fase,
        "fichas":fichas,
        "tipoFichas":p.tipoFichas,
        "casas":p.casas,
        "hoteles":p.hoteles,
        "tiradasDobles":p.tiradasDobles};
    response.send(jsonData);  
});


// Funciones: LLamada a Modelo -> Auxiliares ------------------------------------------------------

function buscarUsuario (id_usuario) {
    for(var i=0;i<juego.usuarios.length;i++) {
        if (juego.usuarios[i].id_usuario == id_usuario)
            return juego.usuarios[i];
    }
    
    return undefined;
}

function buscarFicha (id_ficha) {
    for(var i=0;i<partida.fichas.length;i++) { 
        if(partida.fichas[i].id_ficha == id_ficha)
            return partida.fichas[i];
    }
    
    return undefined;
}

function buscarPartida (id_partida) {
    for(var i=0;i<juego.partidas.length;i++) {
        if(juego.partidas[i].id_partida == id_partida)
            return juego.partidas[i];
    }

    return undefined;
}


// Funciones: Sockets -----------------------------------------------------------------------------

io.on('connection', function(client){
  client.on("listo",function(data){
      console.log("Nueva conexion");
      io.emit("ok_listo");
  });
  client.on('comenzar',function(data){
      console.log("Comienza la partida");
      io.emit("ok_comenzar");
      partida.comenzarPartida();
  });
  client.on('actualizar',function(data){
      console.log("LLega peticion de actualizar");
      io.emit("ok_actualizar");
  });
 
  // --> Función que permite capturar las salidas del modelo => servidor --------------------------
  var nativeLog = console.log.bind(console);
  var nativeWarn = console.warn.bind(console);

    (function () {
        console.log = function (message) {
            io.emit("mensaje",{tipo:"log",msg:message});
            nativeLog(message)
        }
        console.warn = function (message) {
            io.emit("mensaje",{tipo:"warn",msg:message});
            nativeWarn(message)
        }
    })();
    // <-------------------------------------------------------------------------------------------
});