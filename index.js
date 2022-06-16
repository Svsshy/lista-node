// 1. Faça uma array de números que são o dobro dos números da primeira array
const doubleNumbers = arr => {
    // Seu código
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
  // 2. Receba uma array de números e retorne uma array com os números convertidos em string
  const stringElements = arr => {
    // Seu código
  }
  
  console.log(stringElements([2, 5, 100])); // ["2", "5", "100"]
  
  // 3. Deixe apenas a primeira letra de cada palavra em maísculo
  const capitalizeNames = arr => {
    // Seu código
  }
  
  console.log(capitalizeNames(["letisia", "HIRO", "GuStAvO", "chrIs"])); // ["Letisia", "Hiro", "Gustavo", "Chris"]
  
  // 4. Transforme a array de objetos e uma nova array com apenas os nomes
  const namesOnly = arr => {
    // Seu código
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Bob Marley",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Michael Douglas",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Bob Marley", "Paris Hilton", "Kayne West", "Michael Douglas"]
  
  // 5. Faça uma string de nomes com tags de HTML h1 e a idade com tags de HTML h2
  const createDOMHeadingList = arr => {
      // Seu código
  }
  
  console.log(createDOMHeadingList([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Bob Marley",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Michael Douglas",
        age: 100
    }
  ]));
  
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Bob Marley</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Michael Douglas</h1><h2>100</h2>"]
  
  // BONUS.
  // Use a biblioteca nativa 'fs' para criar programaticamente um arquivo HTML contendo 
  // o resultado da função dói exercício 5
  
  const fs = require('fs')
  const FILE_NAME = './output.html'
  
  const InitHTMLFile = (children, title="Minha página gerada automaticamente") => `
    <html>
      <head>
        <title>${title}</title>
      </head>
      ${children}
    </html>
  `
  
  const CreateBodyTag = (children, bgcolor="white") => `
    <body bg-color=${bgcolor}>
      ${children}
    </body>
  `
  
  const GeneratedDOM = InitHTMLFile(CreateBodyTag('Teste'))
  
  // Extra Bonus:
  // Crie uma função que é capaz de criar qualquer tag de HTML (sem atributos)
  const CreateHTMLTag = (tag, children) => {
    //seu código aqui
    return
  }
  
  // CreateHTMLTag('b', 'Texto em negrito') -> <b>Texto em negrito</b>