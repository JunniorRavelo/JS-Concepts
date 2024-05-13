let dinCofla = prompt("Cofla, cuanto dinero tienes?");
let dinRoberto = prompt("Roberto, cuanto dinero tienes?");
let dinPedro = prompt("Pedro, cuanto dinero tienes?");
let nombre = "";

for(var i=0; i <= 2 ;i++){


	if (i==0) {
		dinCofla = dinCofla;
		nombre = "Cofla, ";
	}else if(i==1){
		dinCofla = dinRoberto;
		nombre = "Roberto, ";
	}else if(i==2){
		dinCofla = dinPedro;
		nombre ="Pedro, ";
	}else{
		alert("Error xd");
	}

	if(dinCofla > 0){
	   	if(dinCofla >= 0.6 && dinCofla < 1){
	        alert(nombre +"Comprate el helado de agua");
	        dinCofla -= 0.6;

	    } else if(dinCofla >= 1 && dinCofla < 1.6){
	        alert(nombre +"Comprate el helado de crema");
	        dinCofla -= 1;

	    } else if(dinCofla >= 1.6 && dinCofla < 1.7){
	        alert(nombre +"Comprate el helado heladix");
	        dinCofla -= 1.6;

	    } else if(dinCofla >= 1.7 && dinCofla < 1.8){
	        alert(nombre +"Comprate el helado heladovich");
	        dinCofla -= 1.7;

	    } else if(dinCofla >= 1.8 && dinCofla < 2.9){
	        alert(nombre +"Comprate el helado helardo");
	        dinCofla -= 1.8;

	    } else if(dinCofla >= 2.9){
	        alert(nombre +"Comprate el helado con confites o 1/4kg de helado");
	        dinCofla -= 2.9;
	    } 
	    else{alert("Error");}
	}else{
	    alert("No tienes nada boludo");
	}
	alert("Vueltos de "+ nombre + ": " + dinCofla.toFixed(2));
}
   

