

/**
@class accessors
*/
(function($) {

	/**
	setter(param/s)<br><br>
	Generic setter accessor for standard DOM browser UI controls
	@function setter
	@param  data (individual or array)
	*/
	$.fn.setter = function(val) {
		var self = $(this);

		if (self.length == 0)
			return;
		
		switch (self[0].type) {
			case 'text':
			case 'hidden':
			case 'password':
			case 'textarea':
			case 'select-one':
			case 'select-multiple':
				self.val(val);
//				self.selectmenu('refresh');
				break;
				
			case 'checkbox':
				self.attr('checked', val);
				break;
				
			case 'radio':
				if (val == undefined)
					self.attr('checked', false); 
				else
					self.attr('checked', val); 
				
				break;
		}
		
		switch (self[0].tagName.toLowerCase()) {
			case 'fieldset':
				
				if (val == undefined)
					self.find('input:checked').attr('checked', false); 
				else
					self.find('input[value=' + val + ']').attr('checked', val); 
				
				break;
		
			case 'div':
			case 'span':
				self.html(val); 
				break;
				
			case 'form':
				self._obj2Form(val);
				break;				
		}
		
		return self;
	};
	
	/**
	getter(<br><br>
	Generic getter accessor for standard DOM browser UI controls
	@function getter
	@param  getter type:  'optionText', 'queryString'
	@return Value of the control (individual or array)
	*/
	$.fn.getter = function(mode) {
		var res = '';
		var self = $(this);

		if (self.length == 0)
			return;
		
		switch (self[0].type) {
			case 'text':
			case 'hidden':
			case 'password':
			case 'textarea':
			case 'select-one':
				var val = self.val();
				if (mode == 'optionText'){
					res = self.find('option[value=' + val + ']').text();
				}else{
					res = val;
				}
				break;

			case 'select-multiple':
				var vals;
				if (mode == 'optionText'){
					vals = self.find('option[selected=true]').text();
				}else{
					vals = self.val();
				}
				res = (vals == null ? [] : vals);
				break;
				
			case 'checkbox':
				res = self.is(':checked');
				break;
				
			case 'radio':
				res = self.val(); 
				break;
				
			case 'number':
				res=self.val();
				break;
		}
		
		switch (self[0].tagName.toLowerCase()) {
			case 'fieldset':
				
				res = self.find('input:checked').val(); 
				break;
		
			case 'div':
			case 'span':
				res = self.html(); 
				break;
				
			case 'form':
				res = self._form2Obj();
				break;
				
		}
		
		return res;
	};

	
	/**
	getOptions()<br><br>
	Get the options of Lists or DropDowns
	@function getterList
	@param  data( )
	@return Value of the control (individual or array)
	*/
	$.fn.getterList = function() {
		var self = $(this);
		var options = self.find("option");
		var n = options.length;
		var res = [];
		var jOpt;
		
		for (var i = 0; i < n; i++){
			opt = options.eq(i);
			jOpt = {};
			jOpt.value = opt.attr('value');
			jOpt.text = opt.text();
			res.push(jOpt);
		}
		return res;
	};
	
	
	
	
	//////////////////////////////////////  GETTERS ESPECIALS DE ICONSUMMER ////////////////////////////////////////////
	/**
	getter(<br><br>
	Generic getter accessor for standard DOM browser UI controls
	@function getterTrueName
	@param  getter type:  'optionText', 'queryString'
	@return Value of the control if is True (individual )
	*/
	$.fn.getterIMG = function(mode) {
		var res = '';
		var self = $(this);

		if (self.length == 0)
			return;
	
		if(self[0].type == 'checkbox' && self[0].checked == true){
			res=self[0].name;
		}
		
		return res;
	};
	
	/**
	getOptions()<br><br>
	Get the name of all CheckBoxes
	@function getterListCheckBoxesName
	@param  data( )
	@return Value of the control (String concat)
	*/
	$.fn.getterListCheckBoxesName = function() {
		
		var selectClass= this.selector.slice(1);
		var self = $("input[type='checkbox']").filter("input[checked='checked']").filter("." + selectClass);
		var n = self.length;
		var res = "";
		var lengthRes = 0;
		
		var jOpt;
		
		for (var i = 0; i < n; i++){
			
			jOpt = self[i].name;
				if(jOpt != ""){
					lengthRes += 1;
					if(lengthRes == 1 ){
						res += jOpt;
					}else{
						res += " ; " + 	jOpt;
					}
				}else{
					res +="";
				}
			
		}
		return res;
	};
	
	/**
	getOptions()<br><br>
	Get the name of all CheckBoxes
	@function getterListCheckBoxesName
	@param  data( )
	@return Value of the control (String concat)
	*/
	$.fn.getterCheckBoxesCheckedContact = function() {
		
		var selectClass= this.selector.slice(1);
		var self = $("input[type='checkbox']").filter("input[checked='checked']").filter("." + selectClass);
		var n = self.length;
		var res = "";
		var lengthRes = 0;
		
		var jOpt;
		
		for (var i = 0; i < n; i++){
			
			jOpt = self[i].name;
				if(jOpt != ""){
					lengthRes += 1;
					if(lengthRes == 1 ){
						res += jOpt;
					}else{
						res += " ; " + 	jOpt;
					}
				}else{
					res +="";
				}
			
		}
		return res;
	};
	
	
	
	////////////////////////////////////// END GETTERS ESPECIALS DE ICONSUMMER ////////////////////////////////////////////
	
	$.fn.setterList = function(options) {
		var self = $(this);
		
		// empty
		var opts = self.find("option");
		var n = opts.length;
		
		var opt;
		for (var i = 0; i < n; i++){
			opt = opts.eq(i);
			opt.remove();
		}

		// add
		if (options){
			n = options.length;
			for (var i = 0; i < n; i++){
				self.append('<option value="' + options[i].value + '">' + options[i].text + '</option>');
			}
		}
		return self;
	};
	
	
	
	
	/*
		Basat en http://blueb.net/blog/attach/1/980547.txt
		Justificació:  .serializeArray() de jQuery omiteix els checkbox not checked
	*/
	$.fn._form2Obj = function() {
		var docForm = $(this)[0];
		var formElem;
		var obj = {};
		var n = docForm.elements.length;
		
		for (i = 0; i < n; i++) {
			formElem = docForm.elements[i];
			switch (formElem.type) {
				case 'text':
				case 'hidden':
				case 'password':
				case 'textarea':
				case 'select-one':
//					obj[formElem.name] = formElem.value;
					obj[formElem.id] = formElem.value;
					break;
					
				case 'radio':
					if (formElem.checked) {
//						obj[formElem.name] = formElem.value;
						obj[formElem.id] = formElem.value;
					}
					break;
					
				case 'checkbox':
//					obj[formElem.name] = formElem.checked;
					obj[formElem.id] = formElem.checked;
					break;
			}
		}
		return obj;
	}

	
	$.fn._obj2Form = function(obj) {
		if (!obj){
			return;
		}
		var self = $(this);
		var docForm = $(this)[0];
		var formElem;
		var n = docForm.elements.length;
		
		for (i = 0; i < n; i++) {
			formElem = docForm.elements[i];
			switch (formElem.type) {
				case 'text':
				case 'hidden':
				case 'password':
				case 'textarea':
				case 'select-one':
//					formElem.value = obj[formElem.name];
					formElem.value = obj[formElem.id] == undefined ? "" : obj[formElem.id];
					break;
					
				case 'radio':
					if (formElem.checked) {
//						formElem.value = obj[formElem.name];
						formElem.value = obj[formElem.id] == undefined ? "" : obj[formElem.id];
					}
					break;
					
				case 'checkbox':
//					formElem.checked = obj[formElem.name];
					formElem.checked = obj[formElem.id] == undefined ? "" : obj[formElem.id];
					break;
			}
		}
		return self;
	}
	
})(jQuery);
