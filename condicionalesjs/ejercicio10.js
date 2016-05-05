var opcion=true;

function censoprovincial(){
		

		        do{
        opciones=String(prompt("1) Para registrar persona"+
        	"\n"+ "2) Para ver resultado" +
            "\n"+ "0) Para salir"));
            switch(opciones){
                case "1":
                        persona_registrada();
                    break;

                case "2":
                        alert(resultado_total());
                        	f=0;
							m=0;
							variable_varones=0;
							personas_censadas=0;
                   break;

                case "0":
                    opcion=false;
                    break;
            } 
            
        } while(opcion) 
}

	var f=0;
	var m=0;
	var variable_varones=0;
	var personas_censadas=0;

function persona_registrada(){

do{
	dni=parseInt(prompt("Ingrese DNI"))

if (isNaN(dni) || dni<0)

alert("Ingrese numero valido")
}while (isNaN(dni) || dni<0)

do {
	edad=parseInt(prompt("Ingrese edad"))

if (isNaN(edad) || edad<=0 || edad>100)

alert("Ingrese numero valido")
} while (isNaN(edad) || edad<=0 || edad>100)

do {
	sexo=prompt("Ingrese genero: " + "\n" +"M para masculino" + "\n" +"F para femenino")

if (sexo.toLowerCase()!= "f" && sexo.toLowerCase()!="m")

	alert("Ingrese opcion correcta");

} while(sexo.toLowerCase()!="f" && sexo.toLowerCase()!="m")

switch (sexo.toLowerCase()) {
	case "f":
		f++;
		break;

	case "m":
		m++;
		break;
}

if (sexo=="m" && edad>16 && edad <65){
	variable_varones++;
}

personas_censadas++;
}


function resultado_total(){
	resultado_mensaje= ("Cantidad de personas censadas: " + personas_censadas + "\n" +
						"Cantidad de varones: " + m + "\n" + "Cantidad de mujeres: " + f + "\n" + "Varones entre 16 y 65: " + variable_varones);
	return resultado_mensaje;
}

