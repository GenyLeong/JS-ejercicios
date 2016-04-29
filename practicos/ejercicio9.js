    function include(ejercicio9)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio9+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio9;
            oHead.appendChild(oScript);        
        }
    }

    total=0;
    mensual=0;
    function myFunction9(){
        costo=parseFloat(prompt("Ingrese costo del producto: "))
        interes=parseFloat(prompt("Ingrese interés mensual: "))

        do{
            apagar=parseInt(prompt("Ingrese en cuantos meses pagará: "))
            
            if (isNaN(apagar) || (apagar<=0 || apagar>24)){
                alert("Ingrese numero valido")
            }
        
        } while  (isNaN(apagar) || (apagar<=0 || apagar>24))

                total=(costo*interes)
                mensual=(total/apagar);

            mensaje= "Cada mes pagará: " + mensual;

            alert(mensaje)
    }