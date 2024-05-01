// finalizarCompra.js

// Exemplo de uso do Nodemailer para enviar e-mail
const nodemailer = require('nodemailer');
const { createCanvas } = require('canvas');
const QRCode = require('qrcode');
const { sendEmails } = require('./emailService');

// Função para gerar o QR Code
async function gerarQRCode(texto) {
    try {
        const canvas = createCanvas(200, 200);
        await QRCode.toCanvas(canvas, texto);
        return canvas.toDataURL(); // Retorna o QR Code como uma URL de dados
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Função para enviar e-mail com os dados do filme e o QR Code
async function enviarEmail(email, mensagem, filme) {
    try {
        const qrCode = await gerarQRCode(JSON.stringify(filme));
        const mailOptions = {
            from: 'cinemadofestival@gmail.com',
            to: email,
            subject: 'Compra de ingresso realizada com sucesso!',
            html: `<p>${mensagem}</p>
                   <p>Filme: ${filme.nome}</p>
                   <p>Data: ${filme.data}</p>
                   <p>Hora: ${filme.hora}</p>
                   <p>Local: ${filme.local}</p>
                   <img src="${qrCode}" alt="QR Code para pagamento">`
        };
        await sendEmails(email, mailOptions.subject, mailOptions.html);
        console.log('E-mail enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}

// Função para gerar uma chave aleatória
function gerarChaveAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tamanho = 10;
    let chave = '';
    for (let i = 0; i < tamanho; i++) {
        chave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return chave;
}

module.exports = { enviarEmail, gerarQRCode, gerarChaveAleatoria };