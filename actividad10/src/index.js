// 1 Estructuras de control CONDICIONALES
//Ejercicio A
const edad = 20 
if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}
 
//Ejercicio B
const numero = 7 
if (numero % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}
 
//Ejercicio C
const nota = 8 
if (nota < 4) {
    console.log("Reprobado")
} else if (nota <= 7) {
    console.log("Aprobado")
} else {
    console.log("Excelente")
}

// 2 Estructuras de control BUCLES
//Punto A
for(let i = 0; i < 11; i++) {
    console.log(i)
}

//Punto B
for(let i = 10; i > 0; i--) {
    console.log(i)
}

//Punto C
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par")
    } else {
        console.log("El número es impar")
    }
}

//Punto D
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`)
    } else {
        console.log(`El número ${i} es impar`)
    }
}