const expres= require ('express');
const functions = require('./function');

const app= expres();

app.get(
    '/home',(req,res)=>{
        res.send("pagina a ser exibida")
 });
 app.get(
   ( '/home',(req,res)=>{
        res.send("pagina a ser exibida")
 }),

 app.get(
    "/usuarios",
    (req, res)=> {
        let usuarios = functions.listarUsuarios();
        res.send(usuarios)
    }
 ),
 app.post(
    '/usuarios',
    (req, res)=>{
        functions.criarUsuario("Fulano");
        res.send("Usuário criado com sucesso");
    }
),
//app.get('/home',(req, res)=>{
    //res.send("olá")
//}),
app.get("/home",function(req,res){
   res.send("olha")

   
 


}))
app.listen(3000,function(){
    console.log("servidor ok")
})