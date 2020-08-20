/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta = "s";
  let acumuPeso = 0;
  let maxMarca;
  let precioMax;
  let bandera = 0;
  let banderaDos = 0;
  let pesoMin;
  let marcaMin;
  do {
    marca = prompt("Ingrese marca");

    precio = prompt("Ingrese precio");
    precio = parseInt(precio);
    while (precio < 1 || isNaN(precio) == true) {
      precio = prompt("Ingrese un precio VALIDO");
      precio = parseInt(precio);
    }

    peso = prompt("Ingrese peso");
    peso = parseInt(peso);
    while (peso < 1 || isNaN(peso) == true) {
      peso = prompt("Ingrese un peso VALIDO");
      peso = parseInt(peso);
    }

    tipo = prompt("Ingrese tipo: sólido o líquido");
    while (tipo != "sólido" && tipo != "solido" && tipo != "líquido" && tipo != "liquido") {
      tipo = prompt("Ingrese un tipo VALIDO: sólido o líquido");
    }

    acumuPeso = acumuPeso + peso;
    switch (tipo) {
      case "líquido":
      case "liquido":
        if (bandera == 0 || precioMax < precio) {
          precioMax = precio;
          maxMarca = marca;
          bandera = 1;
        }
        break;
      case "sólido":
      case "solido":
        if (banderaDos == 0 || pesoMin > peso) {
          pesoMin = peso;
          marcaMin = marca;
          banderaDos = 1;
        }
        break;
    }
    respuesta = prompt("Desea ingresar otro datos: s/n");
  } while (respuesta == "s");

  //a)informar el peso total de la compra.
  document.write("El peso total es " + acumuPeso + "<br>");
  //b)la marca del más caro de los líquidos
  document.write("La marca mas cara de los liquidos es " + maxMarca + "<br>");
  //c)la marca del más liviano de los sólidos
  document.write(" La marca del más liviano de los sólidos " + marcaMin + "<br>");
}
