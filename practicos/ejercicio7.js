    function include(ejercicio7)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio7+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio7;
            oHead.appendChild(oScript);        
        }
    }

    var suma=0;
    var total;
    function myFunction7(){
       for (i=0; i<6; i++){
        n = parseInt(prompt("Ingrese horas trabajadas del dia " + (i+1)))
        suma=suma+n;

         }
         ph= parseInt(prompt("Ingrese pago por hora "))
         total = (ph*suma)

        alert("Pago total: " + total) 
     };