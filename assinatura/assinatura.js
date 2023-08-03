const crypto = require('crypto');
const { create } = require('domain');


const {privateKey, publicKey } = crypto.generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)


let dados = 'Essa string vai ser assinada...'

//ASSINADOR

const assinador = crypto.createSign('rsa-sha256');
assinador.update(dados)
const assinatura = assinador.sign(privateKey, 'hex')

console.log(`ASSINATURA: ${assinatura}`)

//ENVIO DO DOCUMENTO --- DOCUMENTO, ASSINATURA E CHAVE PÚBLICA

const verificador = crypto.createVerify('rsa-sha256')
verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')
console.log(ehVerificado)