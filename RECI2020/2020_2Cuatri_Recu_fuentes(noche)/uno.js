/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorFemenino = 0;
	let contadorMasculino = 0;
	let acumuladorEdad = 0;
	let edadPromedio;
	let tempeMax;
	let nombreMujer;
	let bandera = 0;


	for (contador = 0; contador < 5; contador++) {
		nombre = prompt("Ingrese su nombre");

		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseInt(temperatura);
		while (temperatura < 1 || isNaN(temperatura) == true) {
			temperatura = prompt("Ingrese una temperatura VALIDA");
			temperatura = parseInt(temperatura);
		}

		sexo = prompt("Ingrese su sexo: f/m");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Ingrese un sexo VALIDO: f/m");
		}

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while (edad < 1 || isNaN(edad) == true) {
			edad = prompt("Ingrese una edad VALIDAD");
			edad = parseInt(edad);
		}

		switch (sexo) {
			case "f":
				if (bandera == 0 || tempeMax < temperatura) {
					tempeMax = temperatura;
					nombreMujer = nombre;
					bandera = 1;
				}
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
		}

		acumuladorEdad = acumuladorEdad + edad;
	}
	//a)informar la cantidad de personas de cada sexo.
	document.write("El total del sexo Femenino es " + contadorFemenino + " y el total del sexo Masculino es " + contadorMasculino + "<br>");
	//b)la edad promedio en total
	edadPromedio = acumuladorEdad / contador;
	document.write("La edad promedio es " + edadPromedio + "<br>");
	//c)la mujer con más temperatura(si la hay)
	if (bandera == 1) {
		document.write("La mujer con más temperatura " + nombreMujer + "<br>");
	}
}
