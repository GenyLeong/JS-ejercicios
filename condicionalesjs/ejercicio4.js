var opcion=true;

function sistemabancario(){
		        do{
        opciones=String(prompt("1) Para registrar cliente"+
        	"\n"+ "2) Para ver resultado" +
            "\n"+ "0) Para salir"));
            switch(opciones){
                case "1":
                        cliente_registrado();
                    break;

                case "2":
                        alert(resultado_total());
                   break;                
                case "0":
                    opcion=false;
                    break;
            } 
            
        } while(opcion) 
}

	var deudor=0;
	var nulo=0;
	var acreedor=0;
function cliente_registrado(){
	suma=0;
	mensaje="";
do{	
	numero_cuenta=parseInt(prompt("Ingrese numero de cuenta"))
	if (numero_cuenta<0){
		alert("Ingrese cuenta valida")	
	}
} while (numero_cuenta<0 || isNaN(numero_cuenta))

nombre_cliente=prompt("Ingrese nombre del cliente")

saldo_cliente=parseFloat(prompt("Ingrese saldo del cliente"))

	if (saldo_cliente<0){
		mensaje="Deudor.Este cliente debe plata.Que pague, carajo"
		deudor++;
	}

	if(saldo_cliente==0){
		mensaje="Este señor no es cliente.Ahorita no, joven."
		nulo++;
	}

	if(saldo_cliente >0){
		mensaje="Este cliente es buen cliente. Pase, adelante"
		acreedor++;
	}

	suma=suma + saldo_cliente;
	cliente_mensaje= ("Cuenta: " + numero_cuenta + "\n"+
					"Nombre del cliente: " + nombre_cliente + "\n" +
					mensaje)
	alert(cliente_mensaje)

}

function resultado_total(){
	resultado_mensaje= ("Cantidad de clientes deudores: " + deudor + "\n" + "Cantidad de NO clientes: " + nulo + "\n" + "Cantidad de buenos clientes: " + acreedor + "\n" + "Suma de saldos de los acreedores" + suma);
	return resultado_mensaje;
}

