/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
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

var tabla="";
function myFunction7() {
numero=Number(prompt("Ingresa el número a multiplicar"));
if (numero < 0){
    numero=Number(prompt("Ingresa número mayor que 0"));
}

for (var i=0; i <=12; i++) {
    tabla+="<br>" +(numero + "x"+ (i)+ "="+(numero*i));
document.getElementById("ejercicio7").innerHTML =
"Tabla de multiplicar:\n" + "<br>" + tabla;
}


};