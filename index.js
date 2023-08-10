// Evento de envio do formulario que executa a validação do e-mail e senha 
const btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault()

    const email = document.getElementById('email').value
    ValidarEmail(email)

    const senha = document.getElementById('senha').value
    valirdarSenha(senha)
})

// Function para validar se o e-mail segue os criterios de um e-mail valido
function ValidarEmail(valueEmail) {
    const email = valueEmail

    const inputEmail = document.getElementById('email')
    const spanErro = document.getElementById('error-email')

    if (!email.match(/\w{2,}@[A-Z|a-z]{2,}\.[A-Z|a-z]{2,}/g)) {
        inputEmail.classList.add("preenchimento-nao-valido")
        spanErro.innerText = "e-mail não é valido!"
    } else {
        inputEmail.classList.remove("preenchimento-nao-valido")
        inputEmail.classList.add("preenchimento-valido")
        spanErro.innerText = ""
    }
}

// Function para validar se a senha segue os criterios de segurança
function valirdarSenha(valueSenha) {
    const senha = valueSenha

    const inputSenha = document.getElementById('senha')
    const spanErro = document.getElementById('error-senha')

    if (!(senha.match(/[a-z]{1,}[A-Z]{1,}\W{1,}\d{1,}/g) && senha.length >= 8)) {
        inputSenha.classList.add("preenchimento-nao-valido")
        spanErro.innerText = `Senha não é valida, precisa conter: -mínimo de 8 caracteres -mínimo de 1 número -mínimo de uma letra minuscula -mínimo de uma letra maiúscula -mínimo de um caractere especial`
    } else {
        inputSenha.classList.remove("preenchimento-nao-valido")
        inputSenha.classList.add("preenchimento-valido")
        spanErro.innerText = ""

        // A última valida é da senha, se tiver tudo certo é emitido a função da mensagem de sucesso
        sucessoMensage()
    }
}

function sucessoMensage() {
    const span = document.getElementById('sucesso-mensage')
    span.innerText = "Cadastro realizado com sucesso!"
    span.className = "sucesso-mensage"

    // Timeout da mensagem de sucesso, após 4 seguntos o formulario é limpo
    setTimeout(() => {
        span.innerText = ""
        span.className = ""

        const inputName = document.getElementById('name')
        inputName.value = ""

        const inputEmail = document.getElementById('email')
        inputEmail.classList.remove("preenchimento-valido")
        inputEmail.value = ""

        const inputSenha = document.getElementById('senha')
        inputSenha.classList.remove("preenchimento-valido")
        inputSenha.value = ""


    }, 1000 * 4)
}