var lista_suma;
var lista_total=[];

function listas(){
numeromayor=0;
var cantidad_listas=parseInt(prompt("Ingrese cantidad de listas"))

	for(var n=0; n<cantidad_listas; n++){
		var lista_numerada=parseInt(prompt("Ingrese cantidad de numeros en la lista " + (n+1)))
	
	
	lista_suma=0;

	for(var i=0; i<lista_numerada; i++){
		var lista_numeros=parseInt(prompt("Ingrese numero: " + (i+1) + "de la lista " + (n+1)))

		lista_suma+=lista_numeros;


	document.write("Numero " + (i+1) + ":" + lista_numeros + "<br>")
	

	}
		lista_total.push(lista_suma)
	
	}
	

	sumamayor=0;
	var bandera=0;
	
	for (k=0; k<lista_total.length; k++){

		if(sumamayor<lista_total[k]){
			sumamayor=lista_total[k]
			
			bandera = k+1

		}

	}
	document.write("El mayor es: " + sumamayor + "de la lista " + (bandera))
};


