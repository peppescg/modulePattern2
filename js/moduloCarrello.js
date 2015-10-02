/**
 * 
 */

var modulo = (function() {

	// var,function,array private
	var _carrello = [];
	// add to cart
	var _add = function(item) {
		if (item instanceof Articolo) {
			if (item.id == 0) {
				// console.log("prova "+_registro.length);
				// questa funzione prende il numero maggiore all'interno di un array
				// di oggetti;
				var pippo = Math.max.apply(Math, _carrello.map(function(o) {
					return parseInt(o.id);
				})) + 1;
				// console.log(pippo);
				item.id = pippo;
			}
			_carrello.push(item);
		} else {
			alert("Errore inseirmento carrello!");
		}
	};
	// quantity type of products in the cart
	var _size = function() {
		return _carrello.length;
	};
	var _remove = function(id) {
		for (var i = 0; i < _carrello.length; i++) {
			if (_carrello[i].id == id) {
				_carrello.splice(i, 1);
			}
		}
	};
	var _totqta = function() {
		var somma = 0;
		for(var i=0;i<_carrello.length; i++){
			somma += _carrello[i].qta;
		}
		return somma;
	};
	var _totimp = function() {
		var importo = 0;
		for(var i=0;i<_carrello.length; i++){
			importo += _carrello[i].qta * _carrello[i].prezzo;
		}
		return importo;
	};
	var _render = function(destinazione) {
		if (!document.getElementById(destinazione)) {
			alert(destinazione + " non esiste");
		}
		document.getElementById(destinazione).innerHTML = "";

		if (_carrello == null) {
			return;
		}

		var table = document.createElement("table");
		table.setAttribute("class", "table table-striped");

		var thead = document.createElement("thead");

		for ( var i in _carrello[0]) {
			var th = document.createElement("th");
			th.innerHTML = i;
			thead.appendChild(th);
			console.log(i);
		}
		var th = document.createElement("th");
		th.innerHTML = "Elimina";
		thead.appendChild(th);
		table.appendChild(thead);
		var tbody = document.createElement("tbody");
		table.appendChild(tbody);

		for (var i = 0; i < _carrello.length; i++) {
			var tr = document.createElement("tr");
			for ( var j in _carrello[i]) {
				var td = document.createElement("td");
				td.innerHTML = _carrello[i][j] || -"";
				tr.appendChild(td);

			}
			var td = document.createElement("td");
			var span = document.createElement("span");
			span.setAttribute("onclick", "rimuovi('" + _carrello[i].id + "')");
			span.setAttribute("class", "rimuovi glyphicon glyphicon-trash");
			td.appendChild(span);
			tr.appendChild(td);
			tbody.appendChild(tr);
		}
	  
	  var tfoot = table.createTFoot();
	  var tr = document.createElement("tr");
	  var td = document.createElement("td");
	  td.innerHTML = _totimp();
	  console.log(_totimp());
	  tr.appendChild(td);
	  
	  
	  
	  var tr = document.createElement("tr");
	  
	  
	  var td = document.createElement("td");
	  tr.appendChild(td);
	  var td = document.createElement("td");
	  td.innerHTML = "Tot";
	  tr.appendChild(td);
	  var td = document.createElement("td");
	  td.innerHTML = _totimp();
	  tr.appendChild(td);
	  tfoot.appendChild(tr);
	  var td = document.createElement("td");
	  td.innerHTML = _totqta();
	  tr.appendChild(td);
	  tfoot.appendChild(tr);
	 
	  
	  table.appendChild(tfoot);
	  
		document.getElementById(destinazione).appendChild(table);
	};

	return {
		add : _add,
		size : _size,
		render : _render,
		remove : _remove,
		totqta : _totqta,
		totimp : _totimp
	}

})();