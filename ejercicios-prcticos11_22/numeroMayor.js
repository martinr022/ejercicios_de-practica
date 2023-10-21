const numeros =[80,19,0,34,55,73];

let numeroMayor=[0];

for (let i=0; i < numeros.length; i++) {
    if(numeros[i]> numeroMayor){
      numeroMayor=numeros[i]
    }
}

console.log(numeroMayor);