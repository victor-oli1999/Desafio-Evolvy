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
    console.log(nome, telefone, email, numero)

    /* Checar qual resultado será mostrado*/
    let textoResposta = "";
    if (numero % 3 === 0) {
        /* O nome completo é separado atraves do método split. */
        /* o espaço em branco é onde a string é cortada.*/
        let primeiroNome = nome.split(' '); 
        return document.querySelector('h2').innerText = primeiroNome[0];
    } else if (numero % 5 === 0) {
        /* Retiro o DDD utilizando o slice. */
        let DDD = telefone.slice(1, 3)
        return document.querySelector('h2').innerText = DDD;

    } else if (numero % 8 === 0) {
        let dominio = email.split('@'); 
        return document.querySelector('h2').innerText = dominio[1];
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
        const section = document.getElementById('conteudo');
        const h2 = document.createElement('h2');
        section.append(h2)
        h2.setAttribute('id', 'resposta2')

        let quantidadeEmail = document.getElementById('resposta2').innerText = "Quantidade de caracteres do email: " + somarCaracteres;
        
        return quantidadeNome + quantidadeEmail

    }
    /*return document.querySelector('h2').innerText = textoResposta;*/
}


console.log(data)
