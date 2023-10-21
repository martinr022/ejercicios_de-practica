const numero_Inicial=1;
const numero_Final=12;
let pares=[];
let suma=0;
function agruparPares( callback){ 
for (let numero_Inicial = 1; numero_Inicial < numero_Final; numero_Inicial++) {
    if(numero_Inicial % 2 == 0 ){
      pares.push(numero_Inicial)
    }
   
  }
  console.log(pares);
 
  callback(pares)
}


function sumarPares(pares){
   for (let i= 0; i< pares.length; i++) {
   suma += pares[i];
    
   };
   console.log(suma);
};
agruparPares(sumarPares);