
var nome = "--------------------------------- Calculadora ---------------------------------";

function subtrai(a,b){

    return a - b;

}

function soma(a,b){

    return a + b;
 
 }
 
 function multiplica(a,b){
 
     return a * b;
 
 }
 
 function divide(a,b){
 
     return a / b;
 
 }
 

module.exports = { // exporta/torna disponível os elementos desse arquivo para serem usados por outros arquivos
    
    soma,
    subtrai,
    multiplica,
    divide,
    nome

}; 