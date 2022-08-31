//Crie a const para a frase aqui

const frase1 = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")

console.log (frase1)
const frase2 = frase1.replace("verde","rosa").replace("azul","laranja")

//console.log (frase2.replace("azul","laranja"))

console.log (" A frase contém as palavras \" verde\" ? " , frase2.includes("verde"))

console.log (frase2)
console.log (`A frase acima contém as palavras verde ou laranja? ${frase2.includes("verde") || frase2.includes("laranja")}`)



console.log (frase2.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))
//console.log



// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”