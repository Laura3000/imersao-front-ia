// Gerenciador de Tema - Dark/Light Mode

// Verifica se existe tema salvo no localStorage, senão usa o preferido do sistema
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  applyTheme(theme);
}

// Aplica o tema ao documento e atualiza o ícone do botão
function applyTheme(theme) {
  const htmlElement = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  
  if (theme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️'; // Sol para voltar ao light mode
  } else {
    htmlElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙'; // Lua para voltar ao dark mode
  }
  
  localStorage.setItem('theme', theme);
}

// Toggle entre dark e light mode
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// Event listener do botão
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Inicializa o tema ao carregar a página
document.addEventListener('DOMContentLoaded', initTheme);
