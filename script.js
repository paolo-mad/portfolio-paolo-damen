const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav');
const navIcon = document.querySelector('.toggle-menu');
const navLinks = document.querySelectorAll('.nav a');
const navIndicators = document.querySelector('.hero__indicators');
const dots = Array.from(navIndicators.children);
const sections = document.querySelectorAll('section');
const cards = document.querySelector('.cards');

let current = '';

// change header background color on scroll
const showBg = () => {
  const scroll = window.scrollY;

  if (scroll > 100) {
    header.classList.add('showBg');
  } else {
    header.classList.remove('showBg');
  }
};

// function to show navigation
const showNav = () => {
  navMenu.classList.toggle('show');
  navIcon.classList.toggle('active');
  document.body.classList.toggle('fixed');
};

// nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const active = document.querySelector('.current');
    active.classList.remove('current');
    link.classList.add('current');

    showNav();
  });
});

// delete this line
const hey = 'just testing out some stuff';

const test = 'another test';

// update the links
const scrollUpdate = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('current');
    if (link.classList.contains(current)) {
      link.classList.add('current');
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove('selected');
    if (dot.classList.contains(current)) {
      dot.classList.add('selected');
    }
  });
};

// Work section
const cardImgs = document.querySelectorAll('.card__img img');

cardImgs.forEach((img) => {
  const card = img.closest('.card');
  const imgHeight = img.offsetHeight;
  const cardHeight = card.offsetHeight;

  img.addEventListener('mouseenter', () => {
    const percentageDifference = Math.abs(
      ((imgHeight - cardHeight) / imgHeight) * 105
    );
    img.style.transform = `translateY(-${percentageDifference}%)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'translateY(0)';
  });
});


