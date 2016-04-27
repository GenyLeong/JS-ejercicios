var prompt = require('prompt');
prompt.start();

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

function nfib(n){
    var i=0;

    while (n >= fib(i)){
        i=i+1;
    }

    return vfib(i-1)
}

function myFunction3(){
     var m;
     return nfib(m);
}

prompt.get(['n'], function(err, result){
    console.log(nfib(result.n))
});