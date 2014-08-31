var _app = new Object();
	_app._dtype = 0;

/**
 * Borra la informació de les possbiles consultes anteriors
 * */
function clearDataSearch(title,subtitle){
	var idDiv ="contentSearch"; 					//Id de la llista
	
	$("#titleSearch").html("");						// reset Title
	$("#titleSearch").html(title);
	$("#subtitleSearch").html("");					// reset SubTitle
	$("#subtitleSearch").html(subtitle);
	$("#searchInput").val("");						// reset Camp Search
	// Ho posem dintre de un Try/Catch per controlar la primera vegada.
	try{
		$("#" + idDiv).html("").listview('refresh'); 
	}catch(e){
		
	}
	// Reset Llista
}
/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgDiagnostics(title, subtitle , dtype){
	
	clearDataSearch(title,subtitle);
	// Setter del tipo que se buscará
	_app._dtype = parseInt(dtype);

	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgProcediments(title, subtitle , dtype){
	
	clearDataSearch(title,subtitle);
	
	// Setter del tipo que se buscará
	_app._dtype = parseInt(dtype);
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}


/**
 * Busca dentro de los códigos V 
 **/
function searchV(){

	clearDataSearch("Codigos V","Buscar codigos V");
	// Setter del tipo que se buscará
	_app._dtype = 40;
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/**
 * Busca dentro de los códigos E
 **/
function searchE(){
	clearDataSearch("Codigos E","Buscar codigos E");
	// Setter del tipo que se buscará
	_app._dtype = 50;
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/**
 * Busca dentro de los códigos M
 **/
function searchM(){
	clearDataSearch("Codigos M","Buscar codigos M");
	// Setter del tipo que se buscará
	_app._dtype = 60;
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}



/***
 * Pagina buscar codigos
 * */
function searchCodes(){
	// Objecte request 
	var _req = req._new("getCodes");
		_req.params = $("#searchInput").val();
		_req._dtype = _app._dtype;
	UTIL.callUc("Codes.getCodes", _req);
}
/**
 * Pàgina favorits 
 **/
function getFavorites(){


	// change Page
	// call
	var _req = req._new("getFavorites");
		_req.params = $("#searchInput").val();
		_req._dtype = 99;
		_req.uuid = device.uuid;
	// Es pot donar l'error de que en un mòbil no es pugui accedir a la UUID
	// En aquest cas no tindrà accés a l'apartat favorits
	if(device.uuid != undefined){
		// Canvia de página
		//alert("uuid : " +device.uuid);
		$.mobile.changePage( "#favorites", { transition: "slide", changeHash: true });
		UTIL.callUc("Codes.getCodes", _req);
	}else{
		alert("L'aplicació no pot accedir a la ID del dispositiu");
	}
	
}
/**
 * Pàgina favorits 
 **/
function getFrequents(){


	// change Page
	// call
	var _req = req._new("getCodisFrequents");
		_req.params = $("#searchInput").val();// "AllFreq";
		_req._dtype = 110;
	// Canvia de página
	$.mobile.changePage( "#codisFrequents", { transition: "slide", changeHash: true });
	UTIL.callUc("Codes.getCodes", _req);

	
}




/**
 * Afegir a favorits el
 * */

function addFavorites(code){


	// change Page
	// call
	var _req = req._new("addToFavorites");	// Resp.AddToFacorties()
		_req.params = code;
		_req._dtype = 999;	// Favorites
		_req.uuid = device.uuid;
	// Es pot donar l'error de que en un mòbil no es pugui accedir a la UUID
	// En aquest cas no tindrà accés a l'apartat favorits
	if(device.uuid != undefined){
		UTIL.callUc("Codes.addToFavorites", _req);
		
	}else{
		alert("L'aplicació no pot accedir a la ID del dispositiu");
	}
	
}

/////////////////////////// EVENTS ///////////////////////

$(function() {
	 $(".search_img_diagnostics").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchImgDiagnostics( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 $(".search_img_procediments").click(function(){
		 //*Passem a la funció searchImg atributs "custom"
		 
		 searchImgProcediments( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 $(".searchV").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchV( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 $(".searchE").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchV( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 $(".searchM").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchV( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 

	 $("#searchButon").click(function(){
		 searchCodes();
	 });
	 
	 $(".toMain").click(function(){
		 $.mobile.changePage( "#main", {transition: "none",changeHash: true });
	 });
	 $(".goBack").click(function(){
		 history.back();
	 });
	 
});
