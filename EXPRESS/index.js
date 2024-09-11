const express = require("express"); //importando o express
const app = express(); //iniciando o express

app.listen(300, function(erro){ // chamando o servidor, 300 é a porta

    app.get("/",function(req,res){

        res.send("Salve, Salve!");

    });

    app.get("/perfil",function(req,res){

        res.send("Esse é o seu perfil.");

    });

    app.get("/pedido/pagamento", function(req, res){

        res.send("Realize o pagamento!");

    })

    app.get("/ola/:nome/:empresa", function(req,res){ // :nome e :empresa é um parâmetro da rota

        var empresa = req.params.empresa;
        var nome = req.params.nome;
        res.send("<h1> Oi meu chapa " + nome + " você está em " + empresa + "</h1>");

    });

    app.get("/sua/:religiao?", function(req, res){

        var religiao = req.params.religiao;

        if(religiao === undefined){

            res.send("<h1> Você não segue nenhuma religião </h1>");

        }

        else{

            res.send("<h1> Sua religião é " + religiao + "</h1>");

        }
        

    })

    if(erro){
        
        console.log("Ocorreu um erro!");

    }

    else{

        console.log("Servidor iniciado com sucesso!");

    }

})