//Funciones

//Declaracion 
function suma(a, b) {
    //console.log( a + b)
    return a + b
}

//Invocar, ejecutar o llamar a la función 
const resultado = suma(10, 2) //le pasamos los argumentos

// console.log(resultado) 

// Funcion flecha - anónima
//Fat arrow
// const resta = (a, b) => {
//     return a - b
// }

// const resta = (a,b) => a -b 
// const resta = a=> a + 5 

// Callback
const a = (cb) =>{
    console.log("Se ejecuto a")
    cb()
}

//nuestro callback
const b = () =>{
    console.log("Se ejecuto el callback b")
}

//console.log(b())
a(b)

a(()=>{
console.log("Se ejecuto el callback b")
})