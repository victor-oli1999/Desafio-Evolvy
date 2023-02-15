# Desafio Evolvy - página HTML com validação CSS

Desafio de montage de página HTML com validação CSS realizado para o processo seletivo da vaga de estágio da empresa Evolvy.

O Objetivo era criar uma página com formulário onde o usuário poderia inserir o nome completo, telefone fixo ou celular, email e um número de 1 a 999.

## O formulário deveria obedecer as seguintes regras ##
* Campo de nome completo deveria somente receber letras.
* Campo de telefone deveria somente receber números e ter uma máscara tanto para  fixo quanto para celular.
* Campo de email deveria verificar se o email é valido.
* Campo de número deveria receber um número entre 1 e 999, caso o número digitado não estivesse nesse intervalo não seria aceito.

## Montagem do desafio ##
Para montagem do desafio foi necessário somente o uso de HTML/CSS/JavaScript:
### HTML: Conteudo montado tendo em vista táticas de SEO: ###
* Design simplista e de fácil entendimento ao usuário.
* Montagem do HTML pensando na escaneabilidade do conteúdo através de aparelhos de leitura de texto.
* Um H1 por página.
* Respostas em H2.
* Lista ordenada das regras na página de resposta para facilitar entendimento das regras e mostrar qual condição é verdadeira.

### CSS. ###
* Estilização do conteúdo.
* Conteúdo responsivo.

### JavaScript: Página interativa ###
* Página principal:
  * Checar se os caracteres inseridos no formulário de Nome Completo são somente letras, caso seja diferente existe uma função que retira esse caractere (a função se chama "somenteLetras" e se encontra no arquivo funcoes.js).
  * Checar se os caracteres inseridos pelo usuário no formulário de Telefone são somente números, caso seja diferente existe uma função que retira esse caractere (a função se chama "retirarCaracteres" e se encontra no arquivo funcoes.js). Também existe duas funções que colocam uma máscara no número deixando ele mais bonito (as funções se chamam "mascaraTelefone" e "mascara" elas se encontram no arquivo funcoes.js). 
  * Ao clicar no botão de envio do formulário é realizado a transformação das respostas em um objeto, esse objeto é então salvo no armazenamento local (através da função "armazenar" que se encontra no arquivo funcoes.js).

* Página de resposta:
  * Ao carregar a página o armazenamento local é acessado para receber e processar os dados do formulário, todo esse processo é realizado utilizando a função "mostrarResultado" que se entra no arquivo resposta.js.
    * Essa função é responsável por receber os dados e verificar qual condição será executada, mostrando a resposta e estilizando as regras do dropdown.
  * Tomei a liberdade de inserir um dropdown que mostra qual condição foi executada e quais não. O dropdown é aberto ou fechado através da função "dropdown" que se encontra no arquivo resposta.js.
  * O botão de voltar possui um evento onclick que redireciona o usuário à página principal (ver função "redirect" no arquivo resposta.js).
