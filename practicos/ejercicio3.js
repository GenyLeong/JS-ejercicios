    function include(ejercicio3)
    {
        if (jQuery.browser.msie) {//Si el navegador es IE
            document.write('<script charset="utf-8" type="text/javascript" src="'+ejercicio3+'"></script>');
        } else {//Para el  resto
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.charset = 'utf-8';
            oScript.src = ejercicio3;
            oHead.appendChild(oScript);        
        }
    }

function fib(numero){

    if (numero==0){
        return 0;
    }
    if (numero==1){
        return 1;
    }
    if(numero>1){
        return fib(numero-1) + fib(numero-2)
    }
};

function vfib (numero) {
    var vect=[];

    if (numero==0){
        vect=[0];
    }

    if (numero==1){
        vect=[0,1];
    }  
    
    if (numero>1){
        vect=[0,1]
    }

    for(i=2; i<=numero; i++){
        vect.push(vect[i-1] + vect[i-2])
    }
    
    return vect;
}

function nfib(m){
    var i=0;

    while (m >= fib(i)){
        i=i+1;
    }

    return vfib(i-1)
}

function myFunction3(){
    var n=Number(prompt("Ingresa el número final de la sucesión"));
    alert(nfib(n));
}
