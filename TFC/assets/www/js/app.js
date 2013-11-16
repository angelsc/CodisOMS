var _app = new Object();
	_app._type = "";


/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgDiangostics(title, subtitle , dtype){
	$("#titleSearch").html("");				// reset Title
	$("#titleSearch").html(title);
	$("#subtitleSearch").html("");			// reset SubTitle
	$("#subtitleSearch").html(subtitle);
	
	// Setter del tipo que se buscará
	_app._type = dtype;

	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgProcediments(title, subtitle , dtype){
	
	$("#titleSearch").html("");				// reset Title
	$("#titleSearch").html(title);
	$("#subtitleSearch").html("");			// reset SubTitle
	$("#subtitleSearch").html(subtitle);
	
	// Setter del tipo que se buscará
	_app._type = dtype;
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}



/**
 * Busca dentro de los códigos V 
 **/
function searchV(){
	$("#titleSearch").html("");				// reset Title
	$("#titleSearch").html("Codigos V");
	$("#subtitleSearch").html("");			// reset SubTitle
	$("#subtitleSearch").html("Buscar codigos V");
	// Setter del tipo que se buscará
	_app._type = "40";
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/**
 * Busca dentro de los códigos E
 **/
function searchE(){
	$("#titleSearch").html("");				// reset Title
	$("#titleSearch").html("Codigos E");
	$("#subtitleSearch").html("");			// reset SubTitle
	$("#subtitleSearch").html("Buscar codigos E");
	// Setter del tipo que se buscará
	_app._type = "50";
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/**
 * Busca dentro de los códigos M
 **/
function searchM(){
	$("#titleSearch").html("");				// reset Title
	$("#titleSearch").html("Codigos M");
	$("#subtitleSearch").html("");			// reset SubTitle
	$("#subtitleSearch").html("Buscar codigos M");
	// Setter del tipo que se buscará
	_app._type = "60";
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
		_req._type = _app._type;
	UTIL.callUc("Codes.getCodes", _req);
}

/////////////////////////// EVENTS ///////////////////////

$(function() {
	 $(".search_img_diagnostics").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchImgDiangostics( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 $(".search_img_procediments").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchImgProcediments( $(this).attr("titleSearch") , $(this).attr("subtitleSearch") ,  $(this).attr("dtype")  );
	 });
	 
	 
	 $("#searchButon").click(function(){
		 searchCodes();
	 });
	 $(".toMain").click(function(){
		 $.mobile.changePage( "#main", {transition: "none",changeHash: true });
	 });
});
