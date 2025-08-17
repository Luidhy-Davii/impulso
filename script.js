// menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav--list');

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  navList.classList.toggle('active');
}

mobileMenu.addEventListener('click', toggleMenu);

mobileMenu.addEventListener('keydown', (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
});

const navLinks = document.querySelectorAll('.nav--list__links');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  if (navList.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
    mobileMenu.setAttribute('aria-expanded', 'false');
  }
});

// Fecha o menu quando apertar ESC
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    mobileMenu.classList.remove('active');
    navList.classList.remove('active');
  }
});

// efeito escrever
// Efeito de escrever suave com fade
function smoothTypeWriter(element) {
  const text = element.textContent;
  element.textContent = '';

  let i = 0;
  const baseSpeed = 70; // Velocidade base mais rápida
  const randomVariation = 50; // Variação aleatória para naturalidade

  // Cria span vazio para o cursor
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  element.appendChild(cursor);

  function type() {
    if (i < text.length) {
      const charSpan = document.createElement('span');
      charSpan.className = 'char-fade';
      charSpan.textContent = text.charAt(i);
      element.insertBefore(charSpan, cursor);

      // Velocidade com variação aleatória
      const speed = baseSpeed + Math.random() * randomVariation;
      i++;
      setTimeout(type, speed);
    } else {
      cursor.classList.add('active');
    }
  }

  type();
}

window.onload = function () {
  const title = document.querySelector('.title--apresentacao');
  const subtitle = document.querySelector('.frase--apresentacao');
  //anima o título
  smoothTypeWriter(title);
  //anima o subtítulo
  smoothTypeWriter(subtitle);
};

// link scroll top 
const btnTopo = document.getElementById("btnTopo");

// Função para verificar posição do scroll
function toggleScrollButton() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Mostra apenas se MAIOR que 200px e garante persistência
  if (scrollPosition > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}

// Verifica ao carregar (resolve o problema inicial)
document.addEventListener("DOMContentLoaded", toggleScrollButton);

// Verifica durante o scroll (com debounce para performance)
let isScrolling;
window.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(toggleScrollButton, 50);
});

// Suaviza o scroll ao clicar
btnTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



