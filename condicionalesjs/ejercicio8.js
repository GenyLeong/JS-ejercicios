triangle=[];
function tipotriangulo(){
	n1=parseInt(prompt("Ingrese lado 1 del triangulo"))
	n2=parseInt(prompt("Ingrese lado 2 del triangulo"))
	n3=parseInt(prompt("Ingrese lado 3 del triangulo"))

	triangle.push(n1,n2,n3)

	triangle.sort(comparacion)

if (triangle[2]-triangle[0]<triangle[1] && triangle[1]<triangle[2]+triangle[0]){

if (triangle[0]==triangle[1] || triangle[1]==triangle[2] || triangle[0]==triangle[2])

	document.write("Triangulo Isosceles<br>")


if (triangle[0]!=triangle[1] && triangle[1]!=triangle[2] && triangle[0]!=triangle[2])

	document.write("Triangulo Escaleno<br>")


if (triangle[0]==triangle[1] && triangle[1]==triangle[2] && triangle[0]==triangle[2])

	document.write("Triangulo Equilatero<br>")

if (triangle[2]*triangle[2]==triangle[1]*triangle[1] + triangle[0]*triangle[0])

	document.write("Triangulo pitagórico<br>")

}
else {
	alert("NO es triangulo. Ahora no, por favor")
}
	}

function comparacion(elem1,elem2){

	return(elem1-elem2)
}

