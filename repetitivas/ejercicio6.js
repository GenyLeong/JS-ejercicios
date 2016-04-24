/*var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var prompt = require('prompt-sync')();*/

// EJERCICIO 1
    function include(ejercicio6)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio6+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio6;
            oHead.appendChild(oScript);        
        }
    }

var cont="";
function myFunction6(){
    for(a=1; a<=500; a++){
        for(b=1; b<=500; b++){
            for(c=1; c<=500; c++){
                if(c*c===b*b+a*a){
                    cont+=("<br>"+" Terna Pitagórica: " +b+ " " +a+" " +c+ ".");
                }
            }
    }}
   document.getElementById("ejercicio6").innerHTML = cont;
};