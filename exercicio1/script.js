// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>

const nomeUser = prompt ("Digite seu nome")
let comida1 = prompt ("Digite sua comida preferida")
let comida2 = prompt ("Digite sua 2° comida preferida")
let comida3 = prompt ("Agora digite sua 3° comida preferida")

console.log ("Estas são as comidas favoritas de: ", nomeUser, "\n -", comida1, "\n -", comida2, "\n -" , comida3)