
(function($) {
	var server = "192.168.0.193"; 			// LocalCasa
	//  var server = "192.168.43.72"; 		// MOBIL
	//	var server = "217.8.245.251:8181";		// Producci�

	
	var war = "IC9";
	var servlet ="ctl";
	$.callFast = function(action, params) {
		UTIL.showLoadMessage();
		var rp = "";
		if (typeof(_rp_) != 'undefined'){	
			rp = _rp_ + "/";
		}	
		var urlAction = "http://" + server+ "/"+ war + "/" + servlet + '?_op=' + "appl.uc." + action;
		var data = JSON.stringify(params);
		var objAjaxCall = {
				url: rp + urlAction, 
				type: 'POST', 
				data: '_json=' + data, 
				cache: false,
				timeout:20000,
				async: true	,
				success: function (dataCheck){  // no entra aqui quan remot
					var firstChar = $.trim(dataCheck).substring(0, 1);
					var resp;
					
					if (firstChar == '{' || firstChar == '['){
						  try{

						    resp = eval('(' + dataCheck + ')');
						    UTIL.respAsync(resp);
						    
						  } catch (e) {
							  UTIL.showError("Cannot convert to object");
						  }		
						}else{
//							UTIL.showError("Some error ocurred");
						}
					UTIL.hideLoadMessage();

				},
				error:function(){
					alert("Time Out");
					UTIL.hideLoadMessage();
				}

		};
		$.ajax(objAjaxCall).responseText;	
		
	};

  
})(jQuery);


