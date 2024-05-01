// emailService.js

const nodemailer = require('nodemailer');

// Configurações de transporte do Nodemailer
const mailConfig = {
    host: 'smtp.gmail.com', // Servidor SMTP do Gmail
    port: 465, // Porta para conexão segura
    secure: true, // Usar SSL/TLS para conexão segura
    auth: {
        user: 'cinemadofestival@gmail.com', // Seu endereço de e-mail do Gmail
        pass: 'skge guqq sxkg wfvy' // Sua senha de acesso do Gmail ou senha de app, se você tiver autenticação de dois fatores ativada
    }
};

// Criação do transporte
const transport = nodemailer.createTransport(mailConfig);

// Função para enviar e-mails
exports.sendEmails = async (email, title, output, attachments) => { // Adicionado o parâmetro "attachments"
    let message = {
        from: 'cinemadofestival@gmail.com',
        to: email,
        replyTo: 'cinemadofestival@gmail.com',
        subject: title,
        html: output,
        attachments: attachments, // Passando os anexos (attachments)
        date: Date.now()
    };

    try {
        // Envio do e-mail
        const info = await transport.sendMail(message);
        console.log('E-mail enviado:', info);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
};