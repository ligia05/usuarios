const expres= require ('express');

const app= expres();

app.get(
    '/home',(req,res)=>{
        res,send("pagina a ser exibida")
 });


 app.get(
    "/usuarios",
    (req, res)=> {
        let usuarios = functions.listarUsuarios();
        res.send(usuarios)
    }
 )
 app.post(
    '/usuarios',
    (req, res)=>{
        functions.criarUsuario("Fulano");
        res.send("Usuário criado com sucesso");
    }
)
app.listen(3000,()=>{console.log('Servidor rodando na porta 3000')});
