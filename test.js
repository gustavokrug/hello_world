const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'krug@666', {
  host: "localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro)
})

const Postagem = sequelize.define('postagens',{
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

// Postagem.sync({force: true})  //Sincroniza model com o DB e cria a tabela

Postagem.create({
  titulo:"Titulo de Teste de Postagem",
  conteudo:"Teste de conteudo na postagem ajsidasioudjhioaushdiuahsdiuasd"
})

const Usuario = sequelize.define('usuarios',{
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type:Sequelize.STRING
  }
})

// Usuario.sync({force: true}) //Sincroniza model com o DB e cria a tabela

Usuario.create({
  nome:"Nicolau",
  sobrenome:"Meers",
  idade:33,
  email:"nic@zok.com"
})