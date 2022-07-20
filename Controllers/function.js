
    
const usuarios = require('../database/usuarios.json');
const fs = require('fs');
const path = require('path');

let buscarIdUsuario=(id)=>{
    let usuarioId = usuarios.find(usuario =>{
        return usuario.id == id
    })
     return usuarioId  
    }

    let buscarIndex=(id)=>{
        let usuarioId = usuarios.findIndex(usuario =>{
            return usuario.id == id
        })
         return usuarioId  
        }

module.exports = {

    criarUsuario: (nome)=>{

        // Inferir o id deste novo usuário
        let novoId = usuarios[usuarios.length - 1].id + 1;

        // Criar um objeto literal com os dados do usuario
        let novoUsuario = {
            id: novoId,
            nome: nome
        }

        // Adicionar o usuário (objeto literal) ao final do array
        usuarios.push(novoUsuario);

        // Salvar esse array no arquivo ./database/usuarios.json
        fs.writeFileSync(path.resolve('./database/usuarios.json'),JSON.stringify(usuarios, null, 4));

    },
    
    removerUsuario:(id) =>{
    let usuarioBuscado = buscarIndex(id)
    if (usuarioBuscado) {
     usuarios.splice(usuarioBuscado,1)
    } else{
        console.log ("nao existe")
    }

},





        
   
    substituirUsuario: ()=>{},
    buscarUsuario: ()=> {},
    listarUsuarios: ()=>{
        return usuarios;
    }



}