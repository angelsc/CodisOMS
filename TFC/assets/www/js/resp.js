/**
 * gestió manual del resultat de la consulta i la conversió a objectes    
 */
var resp = {
		getCodes : function (data){
			
			var idDiv ="contentSearch"; 					// UL de destí
			var ul = "";
			for(var i = 0; i <data.vDiag.length; i ++ ){
				var d = data.vDiag[i];
				ul +=	"<li code='" + d.code + "' class='addFav'>"+
							"<p>" + d.code +"</p>" + 					 
							"<b>" + d.desc +"</b>"  +

						" </li>";
				 
			}
			$("#" + idDiv).html(ul).listview('refresh');
			// WorkArround para capturar el evento
			 $(".addFav").click(function(){
				 
				 var code = $(this).attr('code');
				 alert(code);
				 addFavorites(code);
			 });
			
			
		},
		getCodisFrequents : function (data){
			
			var idDiv ="frequentsList"; 					// UL de destí ()
			var ul = "";
			for(var i = 0; i <data.vDiag.length; i ++ ){
				var d = data.vDiag[i];
				ul +=	"<li>"+
							"<p>" + d.code +"</p>" + 					 
							"<b>" + d.desc +"</b>"  +
												 
						" </li>";
				 
			}
			$("#" + idDiv).html(ul).listview('refresh');
		},
		getFavorites : function (data){
			
			var idDiv ="favoritesSearch"; 					// UL de destí ()
			var ul = "";
			for(var i = 0; i <data.vDiag.length; i ++ ){
				var d = data.vDiag[i];
				ul +=	"<li>"+
							"<p>" + d.code +"</p>" + 					 
							"<b>" + d.desc +"</b>"  +
												 
						" </li>";
				 
			}
			$("#" + idDiv).html(ul).listview('refresh');
		},
		addToFavorites : function (data){
			
			if(data.process){
				alert("Codi insertat correctament");
			}else{
				alert("Error inesperat");
			}
		}
		
};

