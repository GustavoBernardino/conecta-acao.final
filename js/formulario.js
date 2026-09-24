// formulario.js
// Valida o formulário de voluntariado e mostra o retorno ao
// visitante. Como não existe servidor, o "envio" é só uma
// confirmação de demonstração.

function normalizar(valor) {
    return valor.trim();
}

function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function validarTelefone(valor) {
    const digitos = valor.replace(/\D/g, '');
    return digitos.length >= 10 && digitos.length <= 11;
}

function definirErro(campo, spanErro, mensagem) {
    spanErro.textContent = mensagem;
    campo.classList.toggle('campo-invalido', Boolean(mensagem));
    campo.setAttribute('aria-invalid', mensagem ? 'true' : 'false');
}

export function inicializarFormulario() {
    const formulario = document.querySelector('.formulario-voluntario');
    if (!formulario) return;

    const mensagemFormulario = document.getElementById('mensagem-formulario');

    const nome = formulario.querySelector('#nome');
    const email = formulario.querySelector('#email');
    const telefone = formulario.querySelector('#telefone');
    const cidade = formulario.querySelector('#cidade');
    const interesse = formulario.querySelector('#interesse');
    const autorizacao = formulario.querySelector('#autorizacao');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroTelefone = document.getElementById('erro-telefone');
    const erroCidade = document.getElementById('erro-cidade');
    const erroInteresse = document.getElementById('erro-interesse');
    const erroAutorizacao = document.getElementById('erro-autorizacao');

    function limparMensagemGeral() {
        mensagemFormulario.textContent = '';
        mensagemFormulario.className = 'mensagem-formulario';
    }

    function validar() {
        let primeiroCampoInvalido = null;

        const nomeValor = normalizar(nome.value);
        if (nomeValor.length < 3) {
            definirErro(nome, erroNome, 'Informe seu nome completo (mínimo 3 letras).');
            primeiroCampoInvalido = primeiroCampoInvalido || nome;
        } else {
            definirErro(nome, erroNome, '');
        }

        const emailValor = normalizar(email.value);
        if (!validarEmail(emailValor)) {
            definirErro(email, erroEmail, 'Informe um e-mail válido, como exemplo@email.com.');
            primeiroCampoInvalido = primeiroCampoInvalido || email;
        } else {
            definirErro(email, erroEmail, '');
        }

        const telefoneValor = normalizar(telefone.value);
        if (!validarTelefone(telefoneValor)) {
            definirErro(telefone, erroTelefone, 'Informe um telefone com DDD (10 ou 11 números).');
            primeiroCampoInvalido = primeiroCampoInvalido || telefone;
        } else {
            definirErro(telefone, erroTelefone, '');
        }

        const cidadeValor = normalizar(cidade.value);
        if (cidadeValor.length < 2) {
            definirErro(cidade, erroCidade, 'Informe sua cidade.');
            primeiroCampoInvalido = primeiroCampoInvalido || cidade;
        } else {
            definirErro(cidade, erroCidade, '');
        }

        if (!interesse.value) {
            definirErro(interesse, erroInteresse, 'Selecione uma área de interesse.');
            primeiroCampoInvalido = primeiroCampoInvalido || interesse;
        } else {
            definirErro(interesse, erroInteresse, '');
        }

        if (!autorizacao.checked) {
            erroAutorizacao.textContent = 'É preciso autorizar o uso dos dados para continuar.';
            primeiroCampoInvalido = primeiroCampoInvalido || autorizacao;
        } else {
            erroAutorizacao.textContent = '';
        }

        return primeiroCampoInvalido;
    }

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        limparMensagemGeral();

        const campoInvalido = validar();

        if (campoInvalido) {
            mensagemFormulario.textContent = 'Corrija os campos destacados antes de enviar.';
            mensagemFormulario.classList.add('mensagem-formulario-erro');
            campoInvalido.focus();
            return;
        }

        mensagemFormulario.textContent = 'Inscrição registrada nesta demonstração. Como este é um projeto acadêmico sem servidor, nenhum dado real foi enviado.';
        mensagemFormulario.classList.add('mensagem-formulario-sucesso');
        formulario.reset();
    });

    // Revalida um campo assim que o visitante corrige o valor,
    // mas só depois de ele já ter tentado enviar (evita marcar
    // erro em campo que a pessoa ainda nem preencheu).
    [nome, email, telefone, cidade, interesse].forEach((campo) => {
        campo.addEventListener('input', () => {
            if (campo.classList.contains('campo-invalido')) {
                validar();
            }
        });
    });

    autorizacao.addEventListener('change', () => {
        if (erroAutorizacao.textContent) {
            validar();
        }
    });
}
