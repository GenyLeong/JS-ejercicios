    function include(ejercicio1)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio1+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio1;
            oHead.appendChild(oScript);        
        }
    }

var n;
var i = 0;
var prom;
var suma=0;
function myFunction() {
    n = Number(prompt("Ingresa el número de personas"));
   while(i <n) {
        numero = parseFloat(prompt("Ingresa la estatura de la persona " + (i+1)));
        suma = suma + numero;
        i++;
    }
    prom=suma/n;
    document.getElementById("ejercicio1").innerHTML =
    "La estatura promedio es " + prom;
};

