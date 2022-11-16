const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

/**
 * Configuração do parser para requisições post
 */
 app.use(express.json());

 app.use(express.urlencoded({
    extended: true
}))

app.use(layouts);
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

/*  app.use(express.urlencoded({
     extended: true
 }); */

//Servidor no ar

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});


 /**
 * Conexão com banco de dados via pool de conexões
 * https://node-postgres.com/
 */
  const pool = require('./dao/conexao');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/quem_somos", function(req, res){
    res.sendFile(__dirname + "/view/quem_somos.html");
});

app.get("/cadastrar", function(req, res){
    res.render("cadastrar");
});

app.get("/outros", function(req, res){
    res.sendFile(__dirname + "/view/outros.html");
});

app.get("/porque_denunciar", function(req, res){
    res.sendFile(__dirname + "/view/porque_denunciar.html");
});

//Rotas

app.get("/", function(req, res){
    res.sendFile(__dirname + "/view/index.html");
});

app.get("/cadastrar", function(req, res){
    res.sendFile(__dirname + "/view/cadastrar.html");
});


app.post("/persistir", function(req, res){

    console.log(req.body);

    pool.query(`INSERT INTO denuncia
    (nome, sobrenome, sexo, email, telefone, cpf, cidade,
    estado, mensagem) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, 
    [req.body.nome, req.body.sobrenome, req.body.sexo, req.body.email, req.body.telefone, req.body.cpf, req.body.cidade, req.body.estado, req.body.mensagem])
    .then(resposta => console.log('Cadastrado!'))
    .catch(err => console.log('erro: ' + err));
    res.redirect("/listar");
});

app.get('/listar',function(req, res){
    
    pool.query(`SELECT * FROM denuncia ORDER BY ID ASC`).then(function(resultado){
    
            let denuncias = resultado.rows;
            res.render("listar", {denuncias})

        })
        .catch(function(erro){
            console.log(erro.stack)
            res.render('lista');
        });
});

app.get("/deletar/:id" , (req, res) => {

    const {id} = req.params

    pool.query(`DELETE FROM denuncia WHERE id = ${id}`)

    res.redirect("/listar");

})

app.get("/editar/:id", (req, res)=>{
    
    const {id} = req.params
    pool.query(`SELECT * FROM denuncia WHERE id = ${id}`).then(function(resultado){
    
        let denuncia = resultado.rows[0];
        res.render("editar", {denuncia})

    })
    .catch(function(erro){
        console.log(erro.stack)
        res.redirect('/listar');
    });
})

app.post("/edicao/:id", (req, res) =>{

    console.log(req.body);

    const {id} = req.params

    pool.query(`UPDATE denuncia 
    SET nome = $1, sobrenome = $2, sexo = $3, email = $4, telefone = $5, cpf = $6, cidade = $7, estado = $8, mensagem = $9 
    WHERE id = ${id};`, 
    [req.body.nome, req.body.sobrenome, req.body.sexo, req.body.email, req.body.telefone, req.body.cpf, req.body.cidade, req.body.estado, req.body.mensagem])
    .then(resposta => res.redirect("/listar"))
    .catch(err => {console.log('erro: ' + err) 
    res.redirect("/editar/" + id)});
})

