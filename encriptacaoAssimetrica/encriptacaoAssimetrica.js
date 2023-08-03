const crypto = require('crypto')


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

// console.log(publicKey, privateKey)



// Encriptação

const dadosCriptografados = crypto.publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
);

console.log(dadosCriptografados.toString('hex'))


// Transmissão

// Desencriptação

const dadosDesencriptados = crypto.privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(dadosDesencriptados.toString('utf-8'))