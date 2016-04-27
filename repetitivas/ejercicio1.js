/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
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

var suma = 0;
var i = 0;

function myFunction() {
    while(i < 10) {
        numero = Number(prompt("Ingresa tu número " + (i+1)));
        suma = suma + numero;
        i++;
    }
    document.getElementById("demo").innerHTML =
    "La suma de tus números es " + suma;
};

