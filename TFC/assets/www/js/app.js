var _app = new Object();
	_app._type = "";


/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgDiangostics(attr){
	$("#titleSearch").html("");			// reset
	$("#titleSearch").html(attr);
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}

/***
 * Funcion al hacer click sobre una imagen
 * */
function searchImgProcediments(attr){
	$("#titleSearch").html("");			// reset
	$("#titleSearch").html(attr);
	// Canvia de página
	$.mobile.changePage( "#search", { transition: "slide", changeHash: true });
}



/**
 * Busca dentro de los códigos V 
 **/
function searchV(){
	var attr = "";
	$("#titleSearch").html(attr);
	_app._type = "";
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
		 searchImgDiangostics($(this).attr("dtype"));
	 });
	 $(".search_img_procediments").click(function(){
		 // Passem a la funció searchImg atributs "custom"
		 searchImgProcediments($(this).attr("dtype"));
	 });
	 
	 
	 $("#searchButon").click(function(){
		 searchCodes();
	 });
	 $(".toMain").click(function(){
		 $.mobile.changePage( "#main", {transition: "none",changeHash: true });
	 });
});
