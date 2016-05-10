var menor;

function menornumero(){
	var n1=parseInt(prompt("Ingrese numero 1"))
	var n2=parseInt(prompt("Ingrese numero 2"))
	var n3=parseInt(prompt("Ingrese numero 3"))

menor=n1;

if (n2<menor)

	menor=n2;

else if (n3<menor) {

	menor=n3;

}

resultado="El numero menor es: " + menor;

alert(resultado)
}