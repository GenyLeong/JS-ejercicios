    function include(ejercicio2)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio2+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio2;
            oHead.appendChild(oScript);        
        }
    }

var n;
var cont=0;
var cont2=0;
function myFunction2() {
    n = Number(prompt("Ingresa la cantidad de numeros a evaluar"));
   for(var i=0; i<n; i++) {
        numero = parseFloat(prompt("Ingresa el numero " + (i+1)));
        if(numero<=0){
            cont++
        }
        else{
            cont2++
        }
        // i++;
    }
    document.getElementById("ejercicio2").innerHTML =
    "Hay " + cont+" numeros menores o iguales a 0" + "</br>"
    + "Hay " + cont2+" numeros mayores a 0";
};

