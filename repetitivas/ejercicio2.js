/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
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

var suma = 0;
var i = 0;
function myFunction2() {
    do{
        numero = Number(prompt("Ingresa tu número " + (i+1)));
        suma = suma + numero;
        i++;
    }while(i < 10) ;
    document.getElementById("ejercicio2").innerHTML =
    "La suma de tus números es " + suma;
};

