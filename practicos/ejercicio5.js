    function include(ejercicio5)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio5+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio5;
            oHead.appendChild(oScript);        
        }
    }

    var suma=0;
    function cantidad_depositado(){
        var cantidad=Number(prompt("Ingresa deposito del mes: "));
        suma=suma+cantidad;
        alert("Dinero ahorrado este mes: " + cantidad);
    };  

    function ver_cantidad(){
        var palabra="ver";
        cantidad=String(prompt("\n" + "Escribe 'ver' para ver cantidad de dinero ahorrado"));
            if(cantidad.toLowerCase()===palabra) {
             alert("Dinero ahorrado:" + suma);
            }
    };

    function myFunction5(){
        var opciones="";
        var opcion=true;
        do{
        opciones=String(prompt("1) Para ingresar deposito del mes"+
            "\n"+ "2) Para ver cantidad de dinero ahorrado" + 
            "\n"+ "0) Para salir"));
            switch(opciones){
                case "1":
                        cantidad_depositado();
                    break;
                case "2":
                        ver_cantidad();
                   break;
                case "0":
                        opcion=false;
                    break;
            } 
            
        } while(opcion)
};
