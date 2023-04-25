# Chamadas assincronas entre sistemas

O exemplo mostra a utilização de Promises, JSON e Async/Await em um case real.

Com o intuito de pegar uma lista de alunos, o **front** envia uma solicitação ao **back** para adquirir essas informações.

# Instalação

Primeiro clone o repositório

```bash
git clone https://github.com/chrissgon/exemploAssincronismo.git exemplo
```

Depois entre na pasta com `cd exemplo`

Após isso instale as dependências

```bash
# Instala as dependências, criando a pasta `node_modules`
npm i
```

Abra o terminal e execute o comando.

```bash
# Irá executar o arquivo back.js
npm run back
```

Por fim, abra outro terminal, sem fechar o anterior, e execute o comando

```bash
# Irá executar o arquivo front.js
npm run front
```

Depois de executar `npm run front` deve exibir no console as informações dos alunos. Esse valores foram disponibilizados pelo nosso **back**, e está sendo consumida por **front**.
