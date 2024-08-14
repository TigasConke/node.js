const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.listen(300, function(erro){ //chamando o servidor, 300 é a porta

    if(erro){
        
        console.log("Ocorreu um erro!");

    }

    else{

        console.log("Servidor iniciado com sucesso!");

    }

})