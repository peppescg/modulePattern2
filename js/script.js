/**
 * 
 */

modulo.add(new Articolo(1,"pane",2,2));
modulo.add(new Articolo(2,"vino",1,1));
modulo.render("tabella");
function rimuovi(id) {
	   modulo.remove(id);
	   modulo.render("tabella");
	} 

function aggiungi(){
	
	modulo.add(new Articolo(0,document.getElementById("desc").value,parseInt(document.getElementById("prezzo").value),parseInt(document.getElementById("qta").value)));
	modulo.render("tabella");
	
}