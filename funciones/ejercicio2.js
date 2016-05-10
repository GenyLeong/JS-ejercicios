var opcion=true;

function paroimpar(){
	do {
		numero=parseInt(prompt("Ingrese numero"))



	switch (numero) {
		case 0:
			opcion=false;
		break;
	}

	if (numero%2==0)
		resultado= "par"

	else 
		resultado = "impar"

	alert(resultado)

}while(opcion)

}