array=[];
function menoramayor(){
	n1=parseInt(prompt("Ingrese numero 1: "))
	n2=parseInt(prompt("Ingrese numero 2: "))
	n3=parseInt(prompt("Ingrese numero 3: "))

	array.push(n1,n2,n3)

	alert(array.sort(comparacion))
}

function comparacion(elem1,elem2){

	return(elem1-elem2)
}