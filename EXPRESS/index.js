const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.listen(300, function(erro){ //chamando o servidor, 300 é a porta

    app.get("/",function(req,res){

        res.send("Salve meu querido!");

    });

    app.get("/perfil",function(req,res){

        res.send("Esse é o seu perfil.");

    });

    app.get("/pedido/pagamento", function(req, res){

        res.send("Realize o pagamento!");

    })

    if(erro){
        
        console.log("Ocorreu um erro!");

    }

    else{

        console.log("Servidor iniciado com sucesso!");

    }

})