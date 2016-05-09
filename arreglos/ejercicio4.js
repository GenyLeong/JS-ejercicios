var valores = [true, 5, false, "hola", "adios", 2];

var opcion=true;
function arreglos () {

			var valor1 = valores[0];
			var valor2 = valores[2];

	do{
		palabra=prompt("Ingrese 1 para mostrar palabra mayor" + "\n" +
					"Ingrese 2 para obtener valor true" + "\n" +
					"Ingrese 3 para obtener valor false" + "\n" + "Ingrese 4 para ver resultado de las operaciones matematicas" + "\n" +
					"Ingrese 0 para salir")

		switch (palabra) {

		case "1":
			if (valores[4]<valores[3])

			alert(valores[3])

			break;

		case "2":
		
			var resultado = valor1 || valor2;
			alert(resultado);

			break;

		case "3":

			resultado = valor1 && valor2;
			alert(resultado);

			break;

		case "4":

			var num1 = valores[1];
			var num2 = valores[5];
			 
			var suma = num1 + num2;
			 
			var resta = num1 - num2;
			 
			var multiplicacion = num1 * num2;
						 
			var division = num1 / num2;
				 
			var modulo = num1 % num2;

		resultado= "suma: "+ suma + "\n" +"resta: " + resta + "\n" + "multiplicacion: " + multiplicacion + "\n" + "division: " + division + "\n" + "modulo: " + modulo;

		alert(resultado)

			break;

		case "0":

		opcion=false;

		break;
			
	}

	}while (opcion)

	

}