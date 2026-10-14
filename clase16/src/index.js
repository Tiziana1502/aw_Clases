//console.log("Hola JS") Imprime por consola

//Tipado
//Constante : const nombre = 'Wachin'

// let nombre = 'Jose'
// nombre = 'Badre'
// //nombre = 2
// console.log(nombre)
// //console.log(typeof nombre) devuelve el tipo de la variable

// let esMayorDeEdad = true 

//Operadores aritmeticos --> + - * / %

const edad = 18
const mayoriaEdad = 18

const aumentoEdad = edad + 1

//console.log(aumentoEdad)

//Operados lógicos > < >= <= != !== == ===
let esMayorDeEdad = edad >= mayoriaEdad

//console.log(esMayorDeEdad)
// === compara el valor y el TIPO DE DATO

//Estructura de control de bucle
for(let i = 0; i < 10; i++) {
    console.log(i)
}

//Arreglos
const numeros = [1,2,3,4,5,[1,2]]
const numeros2 = [1,2,3,4,5,6]

console.log(numeros[5][1])
numeros[2] = 5

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//Objetos
const persona = {
    edad: 20,
    estudia: true,
    nombre: "Tiziana",
    redes:[
        'Instagram',
        'Whatsapp',
        'Tiktok'
    ],
    //propiedades
    otros:{
        pasatiempo: 'pintar',
        mascotas: 2
    },
    caminar: function name(params) {
        
    }
}

//Como acceder al dato
console.log(persona.edad)
console.log(persona.redes[0])
console.log(persona.otros.pasatiempo)