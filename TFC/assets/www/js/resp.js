
var resp = {
		getCodes : function (data){
			
			var idDiv ="contentSearch"; // UL de destí
			var ul = "";
			for(var i = 0; i <data.vDiag.length; i ++ ){
				var d = data.vDiag[i];
				ul +=	"<li> "+
							"<b>" + d.code + "</b>" + 
							"<p>" + d.desc +"</p>" +
						" </li>";
			}
			$("#" + idDiv).html(ul).listview('refresh');

		}
};

