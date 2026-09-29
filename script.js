// Atualiza o ano do rodapé automaticamente
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Menu mobile: abre um painel lateral com todas as opções da barra do PC
// (Sobre nós, Serviços, Projetos, Depoimentos, Contato) mais o botão
// "Falar com a agência". Fecha ao clicar em um link, clicar fora
// (no fundo escurecido) ou apertar Esc.
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navBackdrop = document.getElementById('navBackdrop');

function setMenuOpen(isOpen) {
  navLinks.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.textContent = isOpen ? '✕' : '☰';
  if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

navToggle.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

if (navBackdrop) {
  navBackdrop.addEventListener('click', () => setMenuOpen(false));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

// Fecha o menu se a tela voltar para o tamanho de PC
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) setMenuOpen(false);
});

// Cards de projeto que expandem ao clicar (página projetos.html)
document.querySelectorAll('.project-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isOpen);
    panel.classList.toggle('open', !isOpen);
  });
});