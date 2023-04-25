// Importamos a lib express
const app = require("express")();

// Utilizamos o valor da porta definida em port.js
const port = require("./port");

// Criamos aqui uma rota, onde o arquivo front.js irá acessar para obter as informações do aluno
app.get("/", (_, res) => {
  // Iremos definir qual será a resposta, no caso um JSON com as propriedades do aluno
  res.send(
    JSON.stringify([
      {
        nome: "Christopher",
        idade: 18,
      },
      {
        nome: "Silvia",
        idade: 28,
      },
    ])
  );
});

// Implementamos nosso back, de modo que ela irá disponibilizar as informações
app.listen(port, () => {
  console.log(`Back rodando em http://localhost:${port}`);
});
