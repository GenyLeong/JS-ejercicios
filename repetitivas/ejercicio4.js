/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
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

var suma = 0;
var prom=0;
function myFunction4() {
    for(i=0; i<10;i++){
        numero = Number(prompt("Ingresa tu número " + (i+1)));
        suma = suma + numero;
        prom=suma/10;
     }
   document.getElementById("ejercicio4").innerHTML =
    "El promedio de tus números es " + prom;
};

