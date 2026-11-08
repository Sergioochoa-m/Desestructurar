// EJERCICIO 1

let a = 5;
let b = 10;

[a, b] = [b, a]

console.log(a)
console.log(b)

// EJERCICIO 2

function segundoElemento ([, segundo]) {
    return segundo;   
}

console.log(segundoElemento([1, 2, 3]))


// EJERCICIO 3 

let persona = { edad: 25 };

// let nombre = "desconocido" 

let {nombre = "desconocido"} = persona

console.log(nombre)

// EJERCICIO 4

function sumar ([a, b, c]) {
return (a + b + c) }

console.log(sumar([1, 2, 3]))

// EJERCICIO 5


function elResto([, ...rest]) {
  return rest;
}

console.log(elResto([1, 2, 3, 4]))

// EJERCICIO 6

const persona2 = {
  nombre1: "Roberto",
  direccion: {
    ciudad: "Quito",
    pais: "Ecuador",
  },
}

const {nombre1, direccion: { pais }} = persona2;

console.log(pais)
console.log(nombre1)

// EJERCICIO 7

const persona3 = { nombre3: "Ana", edad3: 28 };
const detalles = { profesion: "Ingeniera", pais3: "italia" };

const { nombre3, edad3 } = persona3
const { profesion, pais3 } = detalles


console.log({ nombre3, edad3, profesion, pais3 })

// EJERCICIO 8
const config = { host: "localhost", port: 8080 };

function conectar ({host, port}) {
    return ${host}, ${port}
}

console.log(conectar(config {host}, {port}));

//no me sale y solo lo quiero extraer



// EJERCICIO 9

const personas4 = [{ nombre4: 'Juan' }, { nombre4: 'Pedro' }]
const [, { nombre4 }] = personas4

console.log(nombre4)

