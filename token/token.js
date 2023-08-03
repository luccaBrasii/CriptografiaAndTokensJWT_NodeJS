/*
    USAMOS ESSE TOKEN APENAS PARA ASSINATURA, NÃO PARA CRIPTOGRAFAR DADOS...
*/
const jwt = require('jsonwebtoken')
const secret = 'DASD656d645D6as4d6sad4'

const token = jwt.sign(
    {
        nome: 'Lucca',
        idade: 21
    }, secret
)

console.log(token)

//DECODIFICAR

const tokenDecodificado = jwt.verify(token, secret)
console.log(tokenDecodificado)