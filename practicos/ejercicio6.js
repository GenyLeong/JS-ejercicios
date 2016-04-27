    function include(ejercicio6)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio6+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio6;
            oHead.appendChild(oScript);        
        }
    }


    var numeros = [];
    function cant_depositado(){
        numeros.push(parseInt(prompt("Ingresa numero: ")));
    };  

    function resultado(){
        mayor=0;
        menor=0;

        for(var i=0;i<numeros.length;i++) {
            if (numeros[i] > 0){
                mayor++;
            } else{
                menor++;
            }
        }

        result=  ("\n" + "Numeros mayores que 0: " + mayor +
                    "\n" + "Numeros menores que 0: " + menor);
        return result;       
    }

    var opcion=true;
    function myFunction6(){
        do{
        opciones=String(prompt("1) Para ingresar numero"+
            "\n"+ "2) Para ver resultado" + 
            "\n"+ "0) Para salir"));
            switch(opciones){
                case "1":
                        cant_depositado();
                    break;
                case "2":
                        alert(resultado());
                   break;
                case "0":
                    opcion=false;
                    break;
            } 
            
        } while(opcion)        
    };