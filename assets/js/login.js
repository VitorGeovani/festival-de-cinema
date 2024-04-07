const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql');

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Host do seu banco de dados
  port: 3306, // Porta do seu banco de dados
  user: 'root', // Usuário do seu banco de dados
  password: 'p@$$w0rd', // Senha do seu banco de dados
  database: 'cinema' // Nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

// Rota para lidar com o login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Consulta ao banco de dados para verificar se o usuário existe
  const query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;
  connection.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    if (results.length > 0) {
      // Usuário encontrado, login bem-sucedido
      res.redirect('/index.html');
    } else {
      // Usuário não encontrado, login inválido
      res.status(401).send('Credenciais inválidas');
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
