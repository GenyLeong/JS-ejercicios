var opcion=true;
var resta=0;
var division=0;
var modulo=0;

function operaciones () {

			n1=parseInt(prompt("Ingresa el primer numero"))
			n2=parseInt(prompt("Ingresa el segundo numero"))

			
			if (n2>n1){

				resta=n2-n1;
			 	division=n2/n1;
			 	modulo=n2%n1;
			}

			else {

				resta=n1-n2;
				division=n1/n2;
				modulo=n1%n2;
			}
		

	do{
		ingrese=String(prompt("1. Para sumar" + "\n" +
						"2. Para restar" + "\n" +
						"3.Para dividir" + "\n" +
						"4.Para modulo" + "\n" +
						"5. Para salir"))

		switch (ingrese) {

			case "1":

			sumar();
			 break;

			case "2":

			restar();
			break;

			case "3":

			dividir();
			break;

			case "4":

			modular();
			break;

			case "5":

			opcion=false;

			break;
		}
	}while(opcion)

}

var suma=0;

function sumar (n1,n2){

	suma=n1+n2;
	alert(suma)
}

function restar(n1,n2){

	alert(resta)
}

function dividir(n1,n2){

	alert(division)
}

function modular(n1,n2){

	alert(modulo)
}