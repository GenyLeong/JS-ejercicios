/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
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

var mult="";
function myFunction8() {
numero=Number(prompt("Ingresa el número a elevar"));
if (numero < 0){
    numero=Number(prompt("Ingresa número mayor que 0"));
}
pot=Number(prompt("Ingresa la potencia"));
if (pot>=0){
    mult+="<br>" +Math.pow(numero, pot);
document.getElementById("ejercicio8").innerHTML =
"Numero elevado a la:\n" + pot+ "<br>" + mult;
}

};