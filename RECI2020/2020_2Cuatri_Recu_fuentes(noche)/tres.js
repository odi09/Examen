/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let respuesta = "s";
	let nombre;
	let lugar;
	let temporada;
	let cantidad;
	let contaBali = 0;
	let contaCata = 0;
	let contaSal = 0;
	let bandera = 0;
	let cantiMax;
	let nombreMax;
	let contaPersonas = 0;
	let acumuCanti = 0;
	let promedioPersonas;

	do {
		nombre = prompt("Ingrese nombre");

		lugar = prompt("Ingrese lugar: bariloche, cataratas o salta");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {
			lugar = prompt("Ingrese lugar VALIDO: bariloche, cataratas o salta");
		}

		temporada = prompt("Ingrese temporada: otoño, invierno, verano, primavera");
		while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera") {
			temporada = prompt("Ingrese temporada VALIDA: otoño, invierno, verano, primavera");
		}

		cantidad = prompt("Ingrese cantidad");
		cantidad = parseInt(cantidad);
		while (cantidad < 1 || isNaN(cantidad) == true) {
			cantidad = prompt("Ingrese cantidad VALIDAD");
			cantidad = parseInt(cantidad);
		}

		switch (lugar) {
			case "bariloche":
				contaBali++;
				break;
			case "cataratas":
				contaCata++;
				break;
			case "salta":
				contaSal++;
				break;
		}

		if (bandera == 0 || cantiMax < cantidad) {
			cantiMax = cantidad;
			nombreMax = nombre;
		}

		switch (temporada) {
			case "invierno":
				acumuCanti = acumuCanti + cantidad;
				break;
		}
		contaPersonas++;

		respuesta = prompt("Desea ingresar mas datos? s/n");
	} while (respuesta == "s");

	//a) el lugar más elegido
	if (contaBali > contaCata && contaBali > contaSal) {
		document.write("El lugar mas elegido es Bariloche" + "<br>");
	}
	else if (contaCata > contaBali && contaCata > contaSal) {
		document.write("El lugar mas elegido es Cataratas" + "<br>");
	}
	else if (contaSal > contaBali && contaSal > contaCata) {
		document.write("El lugar mas elegido es Salta" + "<br>");
	}
	//b) el nombre de titular que lleva más pasajeros.
	document.write("El nombre de titular que lleva más pasajeros " + nombreMax + "<br>");

	//c) el promedio de personas por viaje, que viajan en invierno
	promedioPersonas = acumuCanti / contaPersonas;
	document.write("El promedio de personas por viaje, que viajan en invierno " + promedioPersonas + "<br>");

}
