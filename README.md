# Projeto imersão Alura

Projeto desenvolvido durante a imersão back end da Alura - Consiste em um servidor utilizando express no NodeJS.

## NodeJS

O Node.js é um ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações standalone (autossuficientes) em uma máquina servidora, sem a necessidade do navegador.

## MongoDB

O MongoDB é um banco de dados não relacional. Isso significa que, ao contrário dos bancos de dados relacionais (como MySQL ou PostgreSQL) que estruturam os dados em tabelas com linhas e colunas rigidamente definidas, o MongoDB utiliza uma abordagem mais flexível. Ele é conhecido como "orientado a documentos".

## API RESTful

Uma API RESTful é uma interface de programação de aplicativos que segue os princípios da arquitetura REST, utilizando o protocolo HTTP para permitir que clientes e servidores se comuniquem. Ela expõe recursos que podem ser manipulados através de métodos HTTP como GET (obter), POST (criar), PUT (atualizar) e DELETE (excluir). APIs RESTful são projetadas para serem escaláveis, independentes e stateless, permitindo que os clientes interajam com os recursos de forma simples e eficiente.

## HTTP

HTTP (HyperText Transfer Protocol, ou Protocolo de Transferência de Hipertexto, em português) é o fundamento da comunicação na internet. Ele define as regras e o formato das mensagens trocadas entre um cliente (geralmente um navegador) e um servidor (um computador que hospeda um site).

## Json e objetos JavaScript
* JSON é um formato de troca de dados baseado na sintaxe de objetos JavaScript.
* Objetos JavaScript são um tipo de dado nativo do JavaScript que permite agrupar pares de chave-valor.
* JSON e objetos JavaScript são interconvertidos frequentemente para transmitir e manipular dados em aplicações web.

* JSON: Ideal para transmitir dados entre um servidor e um cliente, armazenar dados em arquivos de configuração e como formato de dados para APIs.
* Objetos JavaScript: Utilizados para representar dados dentro de um programa JavaScript, manipular dados no lado do cliente e criar estruturas de dados complexas.

## Materiais de apoio:
* Aula 1
    - [API](https://www.alura.com.br/artigos/api)
    - [Estrutura de uma URL](https://www.alura.com.br/artigos/estrutura-url)
    - [Guia sobre Http]( https://www.alura.com.br/artigos/http)
    - [Portas lógicas](https://www.alura.com.br/artigos/portas-logicas-tipos-caracteristicas)
    - [API Rest](https://www.alura.com.br/artigos/rest-conceito-e-fundamentos) 
    - [Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
    - [Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
    - [Para saber mais sobre NodeJS](https://www.alura.com.br/artigos/node-js?srsltid=AfmBOoqMnhghsa5Hm41BEPzIo-EfHo4ZPz5XdE7FSQEYtjwVPe2u5YT2)
* Aula 2 
    - [HTTP Cat](https://http.cat/)
    - [MongoDB](https://cloud.mongodb.com/)
    - [Guia HTTP](https://www.alura.com.br/artigos/http)
    - [O que é Json](https://www.alura.com.br/artigos/o-que-e-json)
    - [JSON e Objeto JavaScript](https://www.alura.com.br/artigos/json-e-objeto-javascript-sao-a-mesma-coisa)
* Aula 3
    - [Cloud](https://www.alura.com.br/artigos/cloud)
    - [Async/await](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)
    - [Artigo sobre o MongoDB](https://www.alura.com.br/artigos/mongodb-o-banco-baseado-em-documentos)
* Aula 4
    - [Regras denegócio](https://www.alura.com.br/artigos/o-que-sao-regras-de-negocio)
    - [Documentação do MongoDB](https://www.mongodb.com/pt-br/docs/drivers/node/current/usage-examples/insert-operations/)

## Comandos 

`npm run dev` 

Para rodar o servidor

`npm init es6 -y`

Iniciar um novo projeto com NodeJS. <br>
O es6 pode ser atualizado pois serve para informar que é a versão mais nova do JavaScript.

`node --watch index.js`

Faz com que todas as vezes em que for alterado o arquivo, não seja necessário reiniciar manualmente o servidor.
