var array= [];
suma=0;
function sumadenumeros(){

	for (n=0; n<10; n++){
		array.push(parseInt(prompt("Ingrese numero" + (n+1))))
	suma+=array[n]
	}

	resultado = "Suma del array: " + suma;

	alert(resultado) 
}