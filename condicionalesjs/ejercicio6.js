	var n=0;
	var suma=0;

function multiplode11(){
	once=11;
	var i=1;

	while (n<3000){
  		
  		n=once*i;

  		if (n<3000){
  			suma+=n;
			document.write(n + "\n")
		}
  		
  		i++;
	} 

	document.write("<br>"+ "La suma es: " + suma); 
	 	
}