const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const form = document.getElementById('matriculaForm');
const feedback = document.getElementById('formFeedback');
const year = document.getElementById('year');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// Tema claro/escuro
const savedTheme = localStorage.getItem('bioaulas-theme');
if (savedTheme === 'dark') body.classList.replace('light', 'dark');

function updateThemeButton() {
  const isDark = body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️ Tema claro' : '🌙 Tema escuro';
}
updateThemeButton();

themeBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  body.classList.toggle('light', !isDark);
  localStorage.setItem('bioaulas-theme', isDark ? 'dark' : 'light');
  updateThemeButton();
});

// Menu mobile
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Formulário demonstrativo para GitHub Pages (sem backend)
form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  feedback.textContent = `Obrigada, ${nome}! Sua solicitação foi registrada nesta demonstração. Para receber matrículas reais, conecte o formulário a um serviço de formulário ou backend.`;
  form.reset();
});

year.textContent = new Date().getFullYear();
