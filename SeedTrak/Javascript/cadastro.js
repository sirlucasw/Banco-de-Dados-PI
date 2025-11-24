document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");
  const fecharPopup = document.getElementById("fecharPopup");
  const btnCadastrar = document.getElementById("btnCadastrar");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const erros = document.querySelectorAll(".erro");

  // Função de validação
  function validarFormulario() {
    let valido = true;

    // Limpar mensagens anteriores
    erros.forEach(erro => erro.textContent = "");

    // Nome
    if (nome.value.trim().length < 3) {
      nome.nextElementSibling.textContent = "Digite um nome válido.";
      valido = false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.nextElementSibling.textContent = "Digite um e-mail válido.";
      valido = false;
    }

    // Senha
    if (senha.value.trim().length < 6) {
      senha.nextElementSibling.textContent = "A senha deve ter no mínimo 6 caracteres.";
      valido = false;
    }

    return valido;
  }

  // Abrir popup quando tudo estiver válido
  btnCadastrar.addEventListener("click", () => {
    if (validarFormulario()) {
      popup.classList.remove("hidden");
    }
  });

  // Fechar popup e redirecionar
  fecharPopup.addEventListener("click", () => {
    popup.classList.add("hidden");

    // 🔁 Redirecionar para onde você quiser
    window.location.href = "/telas/home.html";
  });

});
