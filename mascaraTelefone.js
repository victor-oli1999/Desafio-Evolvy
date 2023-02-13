
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
    // É colocado o hífen no número de telefone
    // entre o quarto e quinto dígito no caso de um telefone fixo
    // ou entre o quinto e sexto dígito no caso de um telefone celular.
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}