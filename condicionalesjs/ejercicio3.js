function pedirdosnumeros(){

    n1 = Number(prompt("Ingresa el número 1"));
    n2 = Number(prompt("Ingresa el número 2"));

    if (n2>n1){
    	suma=n2+n1;
    	resta=n2-n1;

    	alerta= "La suma es: " + suma + "\n" + 
    			"La resta es: " + resta;

    			alert(alerta)
    }

    else if (n2==n1){
    	alerta= "Los numeros son iguales"

    			alert(alerta)
    }

	else {
    	mult=n2*n1;
    	alerta= "La multiplicacion es: " + mult;

    	alert(alerta)
    }
}