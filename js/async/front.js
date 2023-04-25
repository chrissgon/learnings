// Utilizaremos a lib axios, por isso a importamos
const axios = require("axios");

// Utilizamos o valor da porta definida em port.js
const port = require("./port");

// Criamos a função com a palavra async, pois nela iremos haver operações assincronas
async function pegarAlunos() {
  // Utilizamos o Try/Catch para lidar com erros. Isso só é possivel de forma assincrona pois estamos utilizando Async/Await
  try {
    // Aqui é realizado a chamada assincrona, que retorna uma Promise.
    // Utilizamos o await para indicar que se deve esperar sua finalização para prosseguir
    const { data: aluno } = await axios.get(`http://localhost:${port}`);

    // O axios transforma o arquivo JSON automaticamente para Object, por isso não é necessário utilizar o JSON.parse()
    console.log(aluno);
  } catch {
    // Mensagem de erro
    console.log("Opps, ocorreu um erro...");
  }
}

// Invocamos a função
pegarAlunos();
