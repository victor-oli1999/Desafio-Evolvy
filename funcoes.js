/*
Função que checa se o que foi digitado no campo de nome é letra ou não, 
caso não seja ele retira o caractere.
*/
const somenteLetras = (event) => {
    let nome = event.target;
    nome.value = retirarCaracteres(nome.value);
}
const retirarCaracteres = (value) => {
    if (!value) return ""
    //Removemos todos os caracteres que não são letras:
    value = value.replace(/[^a-z-\s]+/i,'')
    return value
}

/* 
Função que checa se o que foi digitado no campo de telefone é número ou não, 
caso não seja ele retira o caractere. A função também estiliza o número, 
adicionando parenteses ao DDD e o hífen para dividir ao meio.
*/
const mascaraTelefone = (event) => {
    let input = event.target;
    input.value = mascara(input.value);
} 
const mascara = (value) => {
    if (!value) return ""
    // Primeiramente removemos todos os caracteres que não são números:
    value = value.replace(/\D/g,'')
    // Depois colocamos parênteses no DDD (Os dois primeiros dígitos):
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    /* É colocado o hífen no número de telefone
    entre o quarto e quinto dígito no caso de um telefone fixo
    ou entre o quinto e sexto dígito no caso de um telefone celular. */
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

/* Salvando os dados do formulário e enviando para a outra págia através de um objeto JSON. */
function armazenar() {
    const formData = {
        nome: "",
        telefone: "",
        email: "",
        numero: ""
    };
    formData.nome = document.getElementById('nome').value;
    formData.telefone = document.getElementById('telefone').value;
    formData.email = document.getElementById('email').value;
    formData.numero = document.getElementById('numero').value;
    window.localStorage.setItem("local", JSON.stringify(formData));
}