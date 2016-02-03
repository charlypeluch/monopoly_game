var url="http://127.0.0.1:1337/";
var coord=[];
var iconos_fichas=[];
var msg_notificacion;
iconos_fichas["Coche"]="car.png";iconos_fichas["Barco"]="boat.png";iconos_fichas["Avion"]="aeroplane.png";iconos_fichas["Ordenador"]="computer.png";iconos_fichas["Android"]="android.png";iconos_fichas["Camara"]="camera.png";iconos_fichas["Flor"]="flower.png";iconos_fichas["Reloj"]="watch.png";
    

// Funciones: Sockets -----------------------------------------------------------------------------

var socket = io.connect('http://127.0.0.1:1337');

socket.emit('listo');
socket.on("ok_listo",function(data){
    console.log("El servidor confirma");
});

socket.on("ok_comenzar",function(data){
    actualizar();
});

socket.on("ok_actualizar",function(data){
    actualizar();
});

socket.on("mensaje",function(data){
    if (data.tipo=="log")
        console.log(data.msg);
    else
        console.warn(data.msg)
    
    if(data.msg != msg_notificacion)
        mostrarInformacionInteraccion(data.msg);
});

function comenzarJuego() {
    socket.emit('comenzar');                  //En la implementación de partidas es necesario el id
}

// Funciones: Cliente -----------------------------------------------------------------------------
function guardarCookiesUsuario(usuario) {
	$.cookie("usuario",JSON.stringify(usuario));
}
function guardarCookiesFicha(ficha) {
	$.cookie("ficha",JSON.stringify(ficha));
}

function precarga() {
    if ($.cookie("usuario") == undefined) {
        $('#Login').fadeIn();
    }
    else {
        $('#Login').remove();
        $('#Contenedor').fadeIn();
        inicializarPanelUsuario(JSON.parse($.cookie("usuario")));
        infoFicha(JSON.parse($.cookie("ficha")).id_ficha);
        infoPartida(JSON.parse($.cookie("ficha")).id_partida);
    }
}

function borrarCookies() {
    $.removeCookie('usuario');
    $.removeCookie('ficha');
    location.reload();
}

function acceso() {
    if($("#nombre").val()=="")
        dialogo_info("Debes introducir un nombre!")
    else
        infoPartidaGeneral(comprobar);
    
    function comprobar(datos) {
        if(datos.fichas.length == 6)
            dialogo_info("La partida esta completa, no se puede acceder en este momento!")
        else if(datos.fase.nombre != "Fase Inicial")
            dialogo_info("La partida ya comenzo, no se puede acceder en este momento!")
        else {
            registroUsuario($("#nombre").val())
            $('#Login').remove();
            $('#Contenedor').fadeIn();
        }
    }
}

function actualizar() {
    inicializarPanelUsuario(JSON.parse($.cookie("usuario")));
    infoFicha(JSON.parse($.cookie("ficha")).id_ficha);
    infoPartida(JSON.parse($.cookie("ficha")).id_partida);
}

function op_lanzarDados() {
    lanzarDados(JSON.parse($.cookie("ficha")).id_ficha);
}

function op_pasarTurno() {
    pasarTurno(JSON.parse($.cookie("ficha")).id_ficha);
    //socket.emit('actualizar');
}

function op_comprar() {
    comprar(JSON.parse($.cookie("ficha")).id_ficha);
    //socket.emit('actualizar');
}

function op_vender(casilla) {
    vender(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_hipotecar(casilla) {
    hipotecar(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_deshipotecar(casilla) {
    deshipotecar(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_construirCasa(casilla) {
    construirCasa(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_derruirCasa(casilla) {
    derruirCasa(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_construirHotel(casilla) {
    construirHotel(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_derruirHotel(casilla) {
    derruirHotel(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

function op_pagarCarcel() {
    pagarCarcel(JSON.parse($.cookie("ficha")).id_ficha);
    //socket.emit('actualizar');
}

function op_usarTarjeta() {
    usarTarjeta(JSON.parse($.cookie("ficha")).id_ficha);
    //socket.emit('actualizar');
}

function op_colocarFicha(casilla) {
    colocarFicha(JSON.parse($.cookie("ficha")).id_ficha,casilla);
    //socket.emit('actualizar');
}

//Funciones: Tablero y Fichas ---------------------------------------------------------------------

function inicializarPanelTablero(fichas){
	var canvas=document.getElementById("canvas_tablero");
    //Limpiar el canvas
    canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
	ctx=canvas.getContext("2d");
    
    cargarCoordenadas();
    
    for(var i=0;i<fichas.length;i++) {
        dibujarFicha(fichas[i]);
    }
}

function dibujarFicha(ficha) {
    
    var imag=new Image();
    imag.src="client/img/"+iconos_fichas[ficha.figura];
    
    var x=coord[ficha.posicion][0];
    var y=coord[ficha.posicion][1];
    imag.onload=function(){
        ctx.drawImage(imag,x,y,64,64);
    }
}

function cargarCoordenadas(){
    for(var i=0;i<40;i++) coord[i]=[];
    
    coord[0].push(1358);
    coord[0].push(1358);
    coord[1].push(1178);
    coord[1].push(1358);
    
    coord[10].push(78);
    coord[10].push(1358);
    coord[11].push(78);
    coord[11].push(1178);
    
    coord[20].push(78);
    coord[20].push(78);
    coord[21].push(258);
    coord[21].push(78);
    
    coord[30].push(1358);
	coord[30].push(78);
    coord[31].push(1358);
    coord[31].push(258);
    
    for(var i=2;i<10;i++) {
        coord[i].push((coord[i-1][0])-115);
        coord[i].push((coord[i-1][1]));
    }
    for(var i=12;i<20;i++) {
        coord[i].push((coord[i-1][0]));
        coord[i].push((coord[i-1][1]-115));
    }
    for(var i=22;i<30;i++) {
        coord[i].push((coord[i-1][0]+115));
        coord[i].push((coord[i-1][1]));
    }
    for(var i=32;i<40;i++) {
        coord[i].push((coord[i-1][0]));
        coord[i].push((coord[i-1][1]+115));
    }
}


// Funciones: Modificación HTML -------------------------------------------------------------------

function inicializarPanelUsuario(usuario) {
    $('#nombre_usuario').html(usuario.nombre);
    $('#nivel').html("Nivel "+usuario.nivel);
    //$('#partidas_jugadas').html('Partidas Jugadas: '+usuario.partidas['jugadas']);
    //$('#partidas_ganadas').html('Partidas Ganadas: '+usuario.partidas["ganadas"]);
    //$('#partidas_perdidas').html('Partidas Perdidas '+usuario.partidas["perdidas"]);
    //$('#partidas_abandonadas').html('Partidas Abandonadas '+usuario.partidas["abandonadas"]);
    //---Problema array asociativo---
}

function inicializarPanelFicha(ficha) {
    var iconos=[]
    iconos["Coche"]="directions_car";iconos["Barco"]="directions_boat";iconos["Avion"]="flight";iconos["Ordenador"]="desktop_windows";iconos["Android"]="android";iconos["Camara"]="photo_camera";iconos["Flor"]="local_florist";iconos["Reloj"]="watch"
    
    //Informacion--------------------------------
    $('#ficha_figura').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>"+iconos[ficha.figura]+"</i>"+ficha.figura);
    $('#ficha_dinero').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>attach_money</i>"+ficha.dinero+" Pelotis");
    $('#ficha_posicion').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>my_location</i>Posicion ["+ficha.posicion+"]");
    
    if(ficha.turno.nombre == "Me Toca")
        $('#ficha_turno').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>play_circle_outline</i>"+ficha.turno.nombre);
    else
        $('#ficha_turno').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>block</i>"+ficha.turno.nombre);
    
    if(ficha.estado.nombre == "Libre")
        $('#ficha_estado').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>accessibility</i>Estado "+ficha.estado.nombre);
    else if (ficha.estado.nombre == "Encarcelado")
        $('#ficha_estado').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>vpn_key</i>Estado "+ficha.estado.nombre);
    else
        $('#ficha_estado').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>report</i>Estado "+ficha.estado.nombre);
    
    $('#ficha_encarcelado').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>account_balance</i>Turnos Carcel: "+ficha.turnosEncarcelado);
    
    //Propiedades (Falta Mostrarlas)
    $('#ficha_propiedades').html("<i class='mdl-color-text--blue-grey-50 material-icons' role='presentation'>local_offer</i>Propiedades: "+ficha.propiedades);
    
    
    //Botones------------------------------------
    if(ficha.turno.nombre == "Me Toca") {
        $('#boton_lanzar_dados').replaceWith('<a id="boton_lanzar_dados" class="mdl-button mdl-js-button mdl-js-ripple-effect" onClick="op_lanzarDados()">Lanzar Dados</a>');
        mostrarBotonAcciones();
    }
    else if(ficha.turno.nombre == "No me Toca") {
        $('#boton_lanzar_dados').replaceWith('<a id="boton_lanzar_dados" class="mdl-button mdl-js-button mdl-js-ripple-effect" onClick="op_lanzarDados()" style="pointer-events: none;" disabled>Lanzar Dados</a>');
        eliminarBotonAcciones();
    }
}

function inicializarPanelDados(dados) {
    console.log("Dado1: "+dados.dado1);
    console.log("Dado2: "+dados.dado2);
    mostrarDados(dados.dado1,dados.dado2);
}

function inicializarPanelPartida(partida) {
    
    //Informacion--------------------------------
    $('#id_partida').html("<i class='mdl-color-text--blue-grey-800 material-icons'>format_shapes</i>Identificador: "+partida.id_partida);
    $('#participantes_partida').html("<i class='mdl-color-text--blue-grey-800 material-icons'>group</i>Participantes: "+partida.fichas.length);
    $('#fase_partida').html("<i class='mdl-color-text--blue-grey-800 material-icons'>donut_large</i>"+partida.fase.nombre);
    $('#casas_partida').html("<i class='mdl-color-text--blue-grey-800 material-icons'>home</i>Casas: "+partida.casas);
    $('#hoteles_partida').html("<i class='mdl-color-text--blue-grey-800 material-icons'>location_city</i>Hoteles: "+partida.hoteles);
    
    //Botones------------------------------------
    if(partida.fase.nombre == "Fase Inicial") {
        mostrarBotonComenzar();
        eliminarBotonFinalizar();
    }
    else if(partida.fase.nombre == "Fase Jugar") {
        eliminarBotonComenzar();
        eliminarBotonFinalizar()
    }
    else if(partida.fase.nombre == "Fase Final") {
        eliminarBotonComenzar();
        mostrarBotonFinalizar()
    }
}

function mostrarDados(dado1,dado2){
    //Escondemos todas las imágenes
    $("#dado1 img").hide();
    $("#dado2 img").hide();
    //Mostramos los dados correspondientes
    $("#dado1 img").eq(dado1).fadeIn();
    $("#dado2 img").eq(dado2).fadeIn();
}

function mostrarBotonComenzar() {
    $("#espacio_comienzo").fadeIn();
}
function eliminarBotonComenzar() {
    $("#espacio_comienzo").fadeOut();
}

function mostrarBotonFinalizar() {
    $("#espacio_fin").fadeIn();
}
function eliminarBotonFinalizar() {
    $("#espacio_fin").fadeOut();
}

function mostrarBotonAcciones() {
    $('#espacio_acciones_v').fadeIn();
    $('#espacio_acciones_h').fadeIn();
}

function eliminarBotonAcciones() {
    $('#espacio_acciones_v').fadeOut();
    $('#espacio_acciones_h').fadeOut();
}

function mostrarInformacionInteraccion(mensaje) {
    $('#info_interaccion').append(mensaje.replace("%c","") +"\n");
    //Mueve el scroll hacia abajo
    $('#info_interaccion').scrollTop($('#info_interaccion').height());
    msg_notificacion = mensaje;
}


// Funciones: Comunicación Servidor ---------------------------------------------------------------

function registroUsuario(nombre){
	$.getJSON(url+"NuevoUsuario/"+nombre,function(data){
        guardarCookiesUsuario(data.usuario);
        inicializarPanelUsuario(data.usuario);
        registroParticipante(data.usuario);  //Necesita modificación cuando se implementen partidas
	})
}

function crearPartida() {
	$.getJSON(url+"NuevaPartida",function(data){
		//A realizar para impelementar las partidas
	})
}

function registroParticipante(usuario){
    $.getJSON(url+"NuevoParticipante/"+usuario.id_usuario,function(data){
        guardarCookiesFicha(data);
        inicializarPanelFicha(data);
        infoPartida(data.id_partida);
	})
}

// Funciones: Comunicación Servidor -> Acciones Ficha ---------------------------------------------
function lanzarDados(id_ficha) {
	$.getJSON(url+"LanzarDados/"+id_ficha,function(data){
        return true;
    })
}

function pasarTurno(id_ficha) {
    $.getJSON(url+"PasarTurno/"+id_ficha,function(data){})
}

function comprar(id_ficha) {
    $.getJSON(url+"Comprar/"+id_ficha,function(data){})
}

function vender(id_ficha,casilla) {
    $.getJSON(url+"Vender/"+id_ficha+"/"+casilla,function(data){})
}

function hipotecar(id_ficha,casilla) {
    $.getJSON(url+"Hipotecar/"+id_ficha+"/"+casilla,function(data){})
}

function deshipotecar(id_ficha,casilla) {
    $.getJSON(url+"Deshipotecar/"+id_ficha+"/"+casilla,function(data){})
}

function construirCasa(id_ficha,casilla) {
    $.getJSON(url+"ConstruirCasa/"+id_ficha+"/"+casilla,function(data){})
}

function derruirCasa(id_ficha,casilla) {
    $.getJSON(url+"derruirCasa/"+id_ficha+"/"+casilla,function(data){})
}

function construirHotel(id_ficha,casilla) {
    $.getJSON(url+"ConstruirHotel/"+id_ficha+"/"+casilla,function(data){})
}

function derruirHotel(id_ficha,casilla) {
    $.getJSON(url+"DerruirHotel/"+id_ficha+"/"+casilla,function(data){})
}

function pagarCarcel(id_ficha) {
    $.getJSON(url+"PagarCarcel/"+id_ficha,function(data){})
}

function usarTarjeta(id_ficha) {
    $.getJSON(url+"UsarTarjeta/"+id_ficha,function(data){})
}

function colocarFicha(id_ficha,casilla) {
    $.getJSON(url+"ColocarFicha/"+id_ficha+"/"+casilla,function(data){})
}

// Funciones: Comunicación Servidor -> Información ------------------------------------------------
function infoUsuario(id_usuario) {
    $.getJSON(url+"InformacionUsuario/"+id_usuario,function(data){
        //sreturn data;
	})
}

function infoFicha(id_ficha) {
    $.getJSON(url+"InformacionFicha/"+id_ficha,function(data){
        inicializarPanelFicha(data);
	})
}

function infoPartida(id_partida) {
    $.getJSON(url+"InformacionPartida/"+id_partida,function(data){
        inicializarPanelTablero(data.fichas);
        inicializarPanelDados(data.dados);
        inicializarPanelPartida(data);
	})
}

function infoPartidaGeneral(callback) { //A eliminar en la implementación de partidas
    $.getJSON(url+"InformacionPartidaGeneral")
	.done(function(data) {
        console.log("Info: "+data.fichas);
		callback(data);
	});
}


// Funciones: Dialogos ----------------------------------------------------------------------------
function dialogo_info(mensaje) {
    showDialog({
        title: 'Informacion',
        text: mensaje,
        positive: {
            title: 'Aceptar'
        }
    });
};

function dialogo_resp(mensaje,operacion) {
    showDialog({
        title: 'Operacion '+mensaje,
        text: 'Introduce el numero de casilla para realizar la operacion'+
              "<div class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'><input class='mdl-textfield__input' type='text' id='input_posicion'/><label class='mdl-textfield__label' for='input_posicion'>Posicion</label></div>",
        negative: {
            title: 'Cancelar'
        },
        positive: {
            title: 'Aceptar',
            onClick: function () {
                operacion($("#input_posicion").val());
            }
        }
    });
};

function dialogo_img(ruta) {
    showDialog({
        title: 'Operacion Imagen',
        text: 'Introduce el numero de casilla para realizar la operacion'+
              "<img src="+ruta+">",
        positive: {
            title: 'Aceptar',
            onClick: function () {
            }
        }
    });
};