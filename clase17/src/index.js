//Metodos de arreglos
const numeros = [2,8,12,50]

//El callback se ejecuta una vez por elemento
//For each -> loop
numeros.forEach((numero, indice, arreglo)=>{
    console.log(numero, indice, arreglo)
})

//MAP -> loop devuelve un nuevo arreglo
const numerosIncrementados = numeros.map((numero) =>{
    return numero + 1
})
console.log(numerosIncrementados)

//Filter (nuevo arreglo) y Find (valor)
