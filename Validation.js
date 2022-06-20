const Nome = document.getElementById('nome')
const Email = document.getElementById('email')

// Validação de nome e email
function Validate() {
    Nome.style.border = 'none'
    Email.style.border = 'none'
    let arroba = Email.value
    let arrobav = String(arroba.indexOf('@'))
    let vcom = String(arroba.indexOf('.com'))

    if (! Nome.value || ! Email.value) { // Bordas ficam vermelhas se estiver vazio
        if (!Nome.value && !Email.value) {
            Nome.style.border = '2px solid red'
            Email.style.border = '2px solid red'
            Nome.focus()
        }
        else if (!Nome.value) {
            Nome.style.border = '2px solid red'
            Nome.focus()
        }
        else {
            Email.style.border = '2px solid red'
            Email.focus()
        }
    }

    if (Email.value.length > 1 && arrobav == -1) { // Verificação do arroba no email, Bordas ficarão roxa 
        Email.style.border = '3px solid purple'
        document.getElementsByName('email')[0].placeholder = 'Inclua um @ no email'
        Email.focus()
    }
    else if (Email.value.length > 1 && vcom == -1) { // Verificação do .com no email, Bordas ficarão roxa
        Email.style.border = '3px solid purple'
        document.getElementsByName('email')[0].placeholder = 'Inclua .com no email'
        Email.focus()
    }
}

const emaillogin  = document.getElementById('inp')
const password = document.getElementById('inp1')


function RequiredField() {
    emaillogin.style.border = 'none'
    password.style.border = 'none'

    let emailvalue = emaillogin.value
    let arrobainemail = String(emailvalue.indexOf('@'))
    let emailvcom = String(emailvalue.indexOf('.com'))

    if (! emaillogin.value || ! password.value) {
        if (! emaillogin.value && ! password.value) {
            emaillogin.style.border = '2px solid red'
            password.style.border = '2px solid red'
            emaillogin.focus()
        }
        else if (! emaillogin.value) {
            emaillogin.style.border = '2px solid red'
            emaillogin.focus()
        }
        else {
            password.style.border = '2px solid red'
            password.focus()
        }
    }
    if (emaillogin.value.length > 1 && arrobainemail == -1) { // Verificação do arroba no email, Bordas ficarão roxa 
        emaillogin.style.border = '3px solid purple'
        document.getElementsByName('usuario')[0].placeholder = 'Inclua um @ no email'
        emaillogin.focus()
    }
    else if (emaillogin.value.length > 1 && emailvcom == -1) { // Verificação do .com no email, Bordas ficarão roxa
        emaillogin.style.border = '3px solid purple'
        document.getElementsByName('usuario')[0].placeholder = 'Inclua .com no email'
        emaillogin.focus()
    }
}