var prompt = require('prompt');
prompt.start();

function factorial(numero){
	//var numero = prompt("Introduce un número y se mostrará su factorial");
	var resultado = 1;
 
	for(var i=1; i<=numero; i++) {
  		resultado *= i;
	}
		return resultado;
}

prompt.get(['n'], function(err, result){
    console.log(factorial(result.n))
});