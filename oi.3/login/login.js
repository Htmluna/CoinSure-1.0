function redirectToIndex() {
    // Realize a validação aqui
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    // Exemplo de validação simples (adicione sua lógica de validação)
    if (username === '' || password === '') {
        alert('Preencha todos os campos!');
        return false; // Impede o envio do formulário se a validação falhar
    }

    // Redirecione para a página desejada se a validação for bem-sucedida
    window.location.href = "../home-login/homelogin.html";
    return false; // Impede o envio padrão do formulário
}

function redirectToSignUp() {
    // Lógica adicional, se necessário
    window.location.href = "caminho_para_pagina_de_cadastro.html";
}
