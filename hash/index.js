const hash = require('crypto')

function criaHash(senha){
    return hash.createHash('sha256').update(senha).digest('hex')
}


class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log('Usuario autenticado com sucesso!')
            return true
        }else{
            console.log('Usuario ou senha incorretos')
            return false
        }
    }
}

const usuario = new Usuario('Lucca', 'Senha123')
console.log(usuario)

//sucesso
usuario.autentica('Lucca', 'Senha123')

//erro
usuario.autentica('Lucca', 'Senha1234')