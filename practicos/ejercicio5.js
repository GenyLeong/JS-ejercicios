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
    var numero=0;
    var suma;
    var opciones="";
    var ver="";
    function myFunction5(){
        opciones=String(prompt("1) Para ingresar deposito del mes"+
            "\n"+ "2) Para ver cantidad de dinero ahorrado" + 
            "\n"+ "3) Para ver ahorro por mes"));
            switch(opciones){
                case "1":
                    for(i=0; i<12; i++){
                        numero=Number(prompt("Ingresa deposito del mes" + (i+1)));
                        suma=suma+numero;
                        alert("Dinero ahorrado:" + suma)
                    }
                    break;
                case "2":
                    ver=String(prompt("\n" + "Escribe 'ver' para ver cantidad de dinero ahorrado"));
                    if(ver.equals("ver")==true) {
                            suma=suma+numero;
                            alert("Dinero ahorrado:" + suma)
                        }
                    break;
            } 
};