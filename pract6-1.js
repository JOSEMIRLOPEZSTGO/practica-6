/*
  12) Programa una funcion que determine si un numero es primo 
  (aquel que solo es divisible por si mismo y 1) o no, pe. miFuncion(7) devolvera true.
  */
  console.log("----------------12. NUMERO PRIMO---------------");

  const esPrimo = (numero = undefined) => {
    if (!numero || isNaN(numero) || numero < 0)
      return console.warn("El numero introducido no es valido");
  
    if (numero === 1) console.warn("El numero 1 ES primo");
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return console.log
        (`El numero ${numero} NO es primo`);
    }
    return console.log(`El numero ${numero} ES primo`);
  };
  
  esPrimo();
  esPrimo("cadena");
  esPrimo(25);
  esPrimo(17);
  
  /*
    13) Programa una funcion que determine si un numero es par o impar,
     pe. miFuncion(29) devolvera Impar.
    */
  console.log("----------------13. PAR O IMPAR---------------");
  const esPar = (numero = undefined) => {
    !numero || isNaN(numero)
      ? console.warn("El numero introducido no es valido")
      : numero % 2
      ? console.log(`El numero ${numero} es IMPAR`)
      : console.log(`El numero ${numero} es PAR`);
  };
  
  esPar();
  esPar("cadena");
  esPar(13);
  esPar(558);
  
  /*
    14) Programa una funcion para convertir grados Celsius a Fahrenheit
     y viceversa, pe. miFuncion(0,"C") devolvera 32°F.
    */
  console.log("-----------------14. CELSIUS a FAHRENHEIT-------------");
  const convertirGrados = (grados, letra) => {
    if (!grados || isNaN(grados))
      return console.warn
        ("Los grados introducidos son incorrectos");
  
    if (letra === "C")
      return console.log
        (`${grados}C son ${(grados * 9) / 5 + 32}F`);
  
    if (letra === "F")
      return console.log
        (`${grados}F son ${((grados - 32) * 5) / 9}C`);
  
    return console.warn("Solo se puede introducir C / F");
  };
  
  convertirGrados();
  convertirGrados("", "C");
  convertirGrados(10, "X");
  convertirGrados(10, "C");
  convertirGrados(50, "F");
  