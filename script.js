// Script para interações: menu, tema e validação do formulário
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// Menu responsivo
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

// Alternância de tema claro/escuro
function updateThemeButton() {
  if (!themeToggle) return;
  const isDark = document.body.classList.contains("theme-dark");
  themeToggle.textContent = isDark ? "☀️ Tema claro" : "Tema escuro";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light");
    updateThemeButton();
  });
}

updateThemeButton();

// Validação do formulário (apenas na página de contato)
if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação simples de e-mail com regex
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nome || !email || !mensagem) {
      formFeedback.textContent = "Por favor, preencha todos os campos.";
      formFeedback.style.color = "#dc2626";
      alert("Erro: todos os campos são obrigatórios.");
      return;
    }

    if (!emailValido) {
      formFeedback.textContent = "Informe um e-mail válido.";
      formFeedback.style.color = "#dc2626";
      alert("Erro: e-mail inválido.");
      return;
    }

    // Simulação de envio
    contactForm.reset();
    formFeedback.textContent = "Mensagem enviada com sucesso!";
    formFeedback.style.color = "#16a34a";
    alert("Mensagem enviada com sucesso!");
  });
}
