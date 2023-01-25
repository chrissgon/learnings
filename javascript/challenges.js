// DESAFIO 1
// Considerando um array, como o array de cidades abaixo, faça um trecho de código que exiba quantas vezes cada cidade aparece no array.
const citys = ["SP", "CR", "MA", "SP", "SP", "VI", "MA"];

const repetitions = {};

for (const city of citys) {
  repetitions[city] = repetitions[city] ? ++repetitions[city] : 1;
}

console.log("DESAFIO 1", repetitions);

// DESAFIO 2
// Considerando um array numérico e ordenado, onde um dos números esteja faltando, faça um trecho de código que exiba qual é esse número
const numbers = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];

let nonSequentialNumber = 0;

for (const [index, currentNumber] of numbers.entries()) {
  const lastNumber = numbers[index - 1];
  const expectNumber = lastNumber + 1;
  nonSequentialNumber =
    expectNumber !== currentNumber ? expectNumber : nonSequentialNumber;
}

console.log("DESAFIO 2", nonSequentialNumber);

// DESAFIO 3
// Dado o array abaixo, faça um trecho de código que exiba quais strings são palindromos. Não utilize funcões de bibliotecas de strings como "reverse()", etc.

const things = ["roma", "arara", "ola", "banana", "bobo", "ovo", "mussum"];

function oppositeCharsNotEquals(str, start) {
  return str[start] !== str[str.length - 1 - start];
}

const palindromes = things.filter((str) => {
  for (const i in str) {
    if (oppositeCharsNotEquals(str, i)) {
      return false;
    }
  }

  return true;
});

console.log("DESAFIO 3", palindromes);
