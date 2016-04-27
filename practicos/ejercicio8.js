    function include(ejercicio8)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio8+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio8;
            oHead.appendChild(oScript);        
        }
    }

    var numbers = [];
    function cantidad(){
      n=parseInt(prompt("Ingrese cantidad de ventas"))
       for (i=0;i<n;i++){
            numbers.push(parseInt(prompt("Ingresa numero: " + (i+1))));
       }

    };  

    function resultado_cantidad(){
        suma=[suma1=0, suma2=0, suma3=0]
        contador=[contador1=0, contador2=0, contador3=0]

        for(var i=0;i<numbers.length;i++) {
            if (numbers[i] >0 && numbers[i] <= 500) {
                contador[0]++;
                suma[0]=suma[0]+ numbers[i];
            } 
            else if (numbers[i] >500 && numbers[i] <= 1000) {
                contador[1]++;
                suma[1]=suma[1]+ numbers[i];
            }
            else if (numbers[i]>1000) {
                contador[2]++;
                suma[2]=suma[2]+ numbers[i];
            }
        }

        result=    ("\n" + "Ventas menores o iguales a 500: " + contador[0] +
                    "\n" + "Suma total: " + suma[0] +
                    "\n" + "Ventas menores a 1000: " + contador[1] +
                    "\n" + "Suma total: " + suma[1] +
                    "\n" + "Ventas mayores a 1000: " + contador[2] +
                    "\n" + "Suma total: " + suma[2]
                    );
        return result;       
    }

    var opcion=true;
    function myFunction8(){
        do{
        opciones=String(prompt("1) Para ingresar venta"+
            "\n"+ "2) Para ver resultado" + 
            "\n"+ "0) Para salir"));
            switch(opciones){
                case "1":
                        cantidad();
                    break;
                case "2":
                        alert(resultado_cantidad());
                   break;
                case "0":
                    opcion=false;
                    break;
            } 
            
        } while(opcion)        
    };