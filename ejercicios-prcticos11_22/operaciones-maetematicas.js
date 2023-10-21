function realizar_suma(num1, num2,callback){
 const suma =num1 + num2;


       callback(suma);
};

function realizar_resta(num1, num2,callback){
  const resta=num1 - num2;

        callback(resta);
 };
 function realizar_mult(num1, num2,callback){
 
  const mult=num1 * num2;

        callback(mult);
 };
  
function result(resultados){
    console.log(resultados)
}
realizar_suma(2,2,result);
realizar_resta(8,2,result);
realizar_mult(2,8,result);