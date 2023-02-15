/* Variável que pega o objeto com os dados do formulário*/
const data = JSON.parse(localStorage.getItem('local'));
/**/

/* Mostra o texto de resposta ao carregar a página */
function mostrarResultado() {
    /* Passando os dados do formulário para checagem */
    const nome = data.nome;
    const telefone = data.telefone;
    const email = data.email;
    const numero = data.numero;

    /* Checar qual resultado será mostrado*/
    let textoResposta = "";
    if (numero % 3 === 0) {
        /* O nome completo é separado atraves do método split. */
        /* o espaço em branco é onde a string é cortada.*/
        let primeiroNome = nome.split(' '); 

        /* Ajustando a lista do Dropdown */
        const li = document.querySelectorAll('li')
        li[0].setAttribute('class', 'certo')
        /**/

        return document.querySelector('h2').innerText = "Primeiro Nome: " + primeiroNome[0];
    } else if (numero % 5 === 0) {
        /* Retiro o DDD utilizando o slice. */
        let DDD = telefone.slice(1, 3)

        /* Ajustando a lista do Dropdown */
        const li = document.querySelectorAll('li')
        li[0].setAttribute('class', 'errado')
        li[1].setAttribute('class', 'certo')
        /**/

        return document.querySelector('h2').innerText = "DDD: " + DDD;
    } else if (numero % 7 === 0) {
        let dominio = email.split('@'); 

        /* Ajustando a lista do Dropdown */
        const li = document.querySelectorAll('li')
        li[0].setAttribute('class', 'errado')
        li[1].setAttribute('class', 'errado')
        li[2].setAttribute('class', 'certo')
        /**/
        return document.querySelector('h2').innerText = "Dominio do email: " + dominio[1];
    } else {
        /* Calculando a quantidade de letras do nome completo. */
        let cortarNome = nome.split(' '); 
        let somarLetras = 0;
        let i = 0;
        while (cortarNome.length > i) {
            somarLetras += cortarNome[i].length;
            i++
        }
        let quantidadeNome = document.getElementById('resposta').innerText = "Quantidade de letras do nome completo: " + somarLetras;
        
        /* Calculando a quantidade de caracteres do email. */
        /* já retira os caracteres antes do '@' e os soma. */
        let cortarEmail = email.split('@');
        let semPontos = cortarEmail[1].split('.');
        let somarCaracteres = cortarEmail[0].length;
        let j = 0;
        /* abaixo ele soma os caracteres restantes (após o '@' e sem os '.'). */
        while (semPontos.length > j) {
            somarCaracteres += semPontos[j].length;
            j++
        }

        /* Adiciondo uma tag de h2 extra para a resposta dos caracteres de email. */
        const respostas = document.getElementById('respostas');
        const h2 = document.createElement('h2');
        respostas.append(h2)
        h2.setAttribute('id', 'resposta2')

        let quantidadeEmail = document.getElementById('resposta2').innerText = "Quantidade de caracteres do email: " + somarCaracteres;
        
        /* Ajustando a lista do Dropdown */
        const li = document.querySelectorAll('li')
        li[0].setAttribute('class', 'errado')
        li[1].setAttribute('class', 'errado')
        li[2].setAttribute('class', 'errado')
        li[3].setAttribute('class', 'certo')
        li[4].setAttribute('class', 'certo')
        li[5].setAttribute('class', 'certo')
        /**/
        return quantidadeNome + quantidadeEmail
    }
}
/* Abrir e fechar o dropdown com as perguntas. */
function dropdown() {
    const desafios = document.getElementById('desafios')

    if (document.getElementById('ver-mais').innerText === "Ver mais") {
        desafios.removeAttribute('class', 'none');
        const dropDown = document.getElementById('ver-mais');
        dropDown.innerText = "Ver menos";
    } else {
        desafios.setAttribute('class', 'none');
        const dropDown = document.getElementById('ver-mais');
        dropDown.innerText = "Ver mais";
    }
}