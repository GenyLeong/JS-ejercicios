var resultado="";
var n;
function repetirtexto(){
	texto=prompt("Ingresa un texto")
	n=parseInt(prompt("¿Cuantas veces se debe repetir?"))

	for (i=0; i<n; i++){
		resultado+=texto + "\n"
	}

	alert(resultado)
}