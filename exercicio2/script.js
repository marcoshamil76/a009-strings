const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log ("A frase", minhaString, "contém ", minhaString.length, "caracteres")
const minhastring2 = minhaString.trim()
console.log ("Porém ao removermos os espaços teremos somente", minhastring2.length, "caracteres")

console.log (minhaString.replace("________", "sticioso"))


// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

// c) Substitua os traços `________` por “sticioso”.