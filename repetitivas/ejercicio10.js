/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
    function include(ejercicio10)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio10+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio10;
            oHead.appendChild(oScript);        
        }
    }

var cubo="";
var cuarta="";
function myFunction10() {
numero=Number(prompt("Ingresa el número a elevar"));
if (numero < 0){
    numero=Number(prompt("Ingresa número mayor que 0"));
}
    cubo="<br>"+ "Numero elevado a la 3: "+Math.pow(numero, 3);
    cuarta="<br>" +"Numero elevado a la 4: "+Math.pow(numero, 4);
document.getElementById("ejercicio10").innerHTML =
cubo + cuarta;
};

