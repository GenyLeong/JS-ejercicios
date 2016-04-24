    function include(ejercicio4)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio4+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio4;
            oHead.appendChild(oScript);        
        }
    }

    function myFunction4(){
        var pos1=Number(prompt("Ingresa la posicion 1"));
        var pos2=Number(prompt("Ingresa la posicion 2"));
        lugar=(pos1+pos2)/2;
    document.getElementById("ejercicio4").innerHTML =
    "El km en el que se encuentran es: KM " + lugar;
};