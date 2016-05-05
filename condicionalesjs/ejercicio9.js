function traductor(){
	palabra=prompt("Ingrese una de estas palabras: "+ "\n"+" Perro" + "\n" + "Gato" + "\n" + "Casa" + "\n" + "Mesa")

	switch (palabra.toLowerCase()) {
		case "perro":
			alert("dog")
			break;

		case "gato":
			alert("kitty")
			break;

		case "casa":
			alert("home")
			break;

		case "mesa":
			alert("table")
			break;

	}
}