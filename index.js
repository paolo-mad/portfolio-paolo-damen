// const header = document.querySelector('.header');
// const navMenu = document.querySelector('.nav');
// const navIcon = document.querySelector('.toggle-menu');
// const navLinks = document.querySelectorAll('.nav a');
// const navIndicators = document.querySelector('.hero__indicators');
// const dots = Array.from(navIndicators.children);
// const sections = document.querySelectorAll('section');
// const cards = document.querySelector('.cards');

// let current = '';

// // change header background color on scroll
// const showBg = () => {
//   const scroll = window.scrollY;

//   if (scroll > 100) {
//     header.classList.add('showBg');
//   } else {
//     header.classList.remove('showBg');
//   }
// };

// // function to show navigation
// const showNav = () => {
//   navMenu.classList.toggle('show');
//   navIcon.classList.toggle('active');
//   document.body.classList.toggle('fixed');
// };

// // nav links
// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     const active = document.querySelector('.current');
//     active.classList.remove('current');
//     link.classList.add('current');

//     showNav();
//   });
// });

// // update the links
// const scrollUpdate = () => {
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (scrollY >= sectionTop - sectionHeight / 5) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove('current');
//     if (link.classList.contains(current)) {
//       link.classList.add('current');
//     }
//   });

//   dots.forEach((dot) => {
//     dot.classList.remove('selected');
//     if (dot.classList.contains(current)) {
//       dot.classList.add('selected');
//     }
//   });
// };

// // Work section
// const cardImgs = document.querySelectorAll('.card__img img');

// cardImgs.forEach((img) => {
//   const card = img.closest('.card');
//   const imgHeight = img.offsetHeight;
//   const cardHeight = card.offsetHeight;

//   img.addEventListener('mouseenter', () => {
//     const percentageDifference = Math.abs(
//       ((imgHeight - cardHeight) / imgHeight) * 105
//     );
//     img.style.transform = `translateY(-${percentageDifference}%)`;
//   });

//   img.addEventListener('mouseleave', () => {
//     img.style.transform = 'translateY(0)';
//   });
// });

// // Blog section
// const getArticles = async () => {
//   const cards = document.querySelector('.cards');
//   const readMoreButton = document.getElementById('read-more-button');
//   const readLessButton = document.getElementById('read-less-button');

//   let articles = [];
//   let visibleArticles = 4;

//   const fetchMoreArticles = async () => {
//     try {
//       const response = await fetch(
//         'https://dev.to/api/articles?username=devlawrence'
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch articles');
//       }

//       articles = await response.json();

//       displayArticles();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const displayArticles = () => {
//     cards.innerHTML = '';

//     const articlesToShow = articles.slice(0, visibleArticles);
//     articlesToShow.forEach(
//       ({
//         cover_image,
//         title,
//         url,
//         description,
//         reading_time_minutes,
//         user,
//       }) => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <img loading="lazy" src="${cover_image}" alt="" />
//         <div class="info">
//           <span class="time">${reading_time_minutes} min read</span>
//           <h5>${title}</h5>
//           <p>${description}</p>
//           <div class="d-flex">
//             <a target="_blank" href="${url}" class="btn card-btn">
//               <span>read</span>
//               <i class="fa-solid fa-up-right-from-square"></i>
//             </a>
//             <div>
//               <img class="profile-img" src="${user.profile_image}" alt="" />
//             </div>
//           </div>
//         </div>
//       `;

//         cards.appendChild(card);
//       }
//     );

//     if (visibleArticles >= articles.length) {
//       readMoreButton.classList.add('hide');
//       readLessButton.classList.add('show');
//     } else {
//       readMoreButton.classList.remove('hide');
//       readLessButton.classList.remove('show');
//     }
//   };

//   const showMoreArticles = () => {
//     visibleArticles += 2;
//     readMoreButton.innerText = 'loading...';
//     displayArticles();
//     readMoreButton.innerText = 'read more';
//   };

//   const showLessArticles = () => {
//     visibleArticles = 4;
//     readMoreButton.innerText = 'loading...';
//     displayArticles();
//     readMoreButton.innerText = 'read more';
//   };

//   readMoreButton.addEventListener('click', showMoreArticles);
//   readLessButton.addEventListener('click', showLessArticles);

//   fetchMoreArticles();
// };

// getArticles();

// // event listener
// navIcon.addEventListener('click', showNav);
// window.addEventListener('scroll', scrollUpdate);
// window.addEventListener('scroll', showBg);
