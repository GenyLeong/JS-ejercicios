/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
    function include(ejercicio9)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio9+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio9;
            oHead.appendChild(oScript);        
        }
    }

var suma = 0;
var prom =0;
var NotaMenor=20;
function myFunction9() {
    for(i=0; i<4;i++){
       do{
        numero = parseInt(prompt("Ingresa tu calificación " + (i+1)));
       }while (numero<0 || numero>20);

       if (numero < NotaMenor){
        NotaMenor=numero;
       }    
        
       suma = suma + numero;
     }

   prom=suma/4;

   document.getElementById("ejercicio9").innerHTML =
       "La nota menor es: " + NotaMenor + "<br>"+
          "El promedio es: " + prom;
};