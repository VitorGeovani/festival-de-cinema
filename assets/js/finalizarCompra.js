// Exemplo de uso do Nodemailer para enviar e-mail
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenhadeacesso'
    }
});

const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'emaildousuario@gmail.com',
    subject: 'Compra de ingresso realizada com sucesso!',
    text: 'Detalhes sobre o ingresso e informações de pagamento.'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});

// Exemplo de uso do Puppeteer para gerar um PDF
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/ingresso/detalhes');
    await page.pdf({ path: 'ingresso.pdf', format: 'A4' });

    await browser.close();
})();

// Exemplo de uso do QRCode para gerar um QR code
const QRCode = require('qrcode');

QRCode.toFile('./qrcode.png', 'https://exemplo.com', function (err) {
    if (err) throw err;
    console.log('QR code gerado com sucesso!');
});

// Exemplo de geração de uma chave aleatória de pagamento usando Crypto
const crypto = require('crypto');

const chaveAleatoria = crypto.randomBytes(10).toString('hex');
console.log('Chave de pagamento aleatória:', chaveAleatoria);
