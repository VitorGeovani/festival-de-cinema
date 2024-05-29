<div align="center">
  <img src="https://github.com/VitorGeovani/festival-de-cinema/assets/71882193/ab203d39-0b8e-4b54-a4ce-713023002d5e" width="200px" />
</div>

<h1 align="center"> Festival Cinemado</h1>

<h3 align="center">:bookmark_tabs: Aplicação Web para o Festival fictício de cinema de Gramado (Cinemado)</h3>

<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
 <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
  <br>
 <img src="https://img.shields.io/github/repo-size/VitorGeovani/festival-de-cinema">
 <img src="https://img.shields.io/github/last-commit/VitorGeovani/festival-de-cinema">
 <img src="https://img.shields.io/github/forks/VitorGeovani/festival-de-cinema" />
 </div>

 <br>

 ## <a name="ComoContribuirParaOProjeto"></a>Como contribuir para o projeto ⁉️

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

<br>

## <a name="Desenvolvedores"></a> :rocket: Desenvolvedores :octocat:
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/VitorGeovani">
    <img src="https://avatars.githubusercontent.com/u/71882193?v=4" width="100px" alt="Imagem do perfil do Vitor"/>
    <br />
     <sub><b>Vitor</b></sub><br />
     </td>
    <td align="center"><a href="https://github.com/pudimpudi">
    <img src="https://avatars.githubusercontent.com/u/127544518?v=4" width="100px" alt="Imagem do perfil da Gabi"/>
    <br />
    <sub><b>Gabrielle</b></sub><br />
     </td>
 </tr>
</table>

## <a name="ComoContribuirParaOProjeto"></a>Banco de Dados :memo:

```
CREATE DATABASE cinema;

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    senha VARCHAR(100)
);

CREATE TABLE filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(255),   
    titulo VARCHAR(255) NOT NULL,
    diretor VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    duracao INT,
    data_lancamento VARCHAR(50),
    sinopse TEXT,
    classificacao_indicativa VARCHAR(50)
);

CREATE TABLE filmes_avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(255),
    titulo VARCHAR(255),
    diretor VARCHAR(255),
    genero VARCHAR(100),
    duracao INT,
    data_lancamento VARCHAR(50),
    classificacao_indicativa VARCHAR(50),
    cinematografia VARCHAR(100),
    originalidade VARCHAR(100),
    comentario_tecnico TEXT
);

CREATE TABLE programacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(255),
    titulo VARCHAR(255),
    diretor VARCHAR(100),
    data VARCHAR(50),
    horario VARCHAR(50),
    local VARCHAR(255)
);

CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(255),
    nome VARCHAR(255),
    data VARCHAR(50),
    hora VARCHAR(50),
    local VARCHAR(255),
    descricao TEXT
);

CREATE TABLE ingressos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    capa VARCHAR(255),
    nome VARCHAR(255),
    diretor VARCHAR(100),
    data VARCHAR(50),
    hora VARCHAR(50),
    local VARCHAR(255),
    vagas INT
);

```
    
<div align="center">
  <sub><b>© 2024 Cinemado - Administração</b></sub>
</div>
