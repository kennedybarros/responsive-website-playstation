// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// FAQS
const accordionItems = document.querySelectorAll('.faqs_item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.faqs_header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.faqs_content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

// SCROLL UP
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// DARK MODE
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home_data`);
sr.reveal(
  `.home_img, .ps5_controller-produts h1, .ps5_info-produts h1,
   .ps5_info-produts p, .ps5_list-produts li, .ps5_controller-produts a,
    .ps5_controller-produts`,
  { delay: 500 }
);
sr.reveal(
  `.about_img, .ps5_controller-div, .ps4_controller-div, .squid_controller-div`,
  {
    origin: 'left',
  }
);
sr.reveal(
  `.about_data, .ps5_controller img, .ps4_controller img,
 .squid_controller img, .ps4_controller-produts img, 
 .squid_controller-produts img`,
  {
    origin: 'right',
  }
);
sr.reveal(`.functions_title, .functions_subtitle`, { delay: 500 });
sr.reveal(`.functions_list`, {
  origin: 'top',
});
sr.reveal(`.produts_list-container, .produts_title, .produts_subtitle`, {
  delay: 500,
});
sr.reveal(`.faqs_title-center`, { delay: 500 });
sr.reveal(`.faqs_container, .footer`, {
  interval: 100,
});
sr.reveal(
  `.terms_data, .privacy_data, .contact_data, .buy_form p, .buy_product h2,
   .buy_product, .email_data, .hr_footer, .hr_footer-secondary`,
  {
    delay: 500,
  }
);
sr.reveal(
  `.contact_dice h2, .contact_dice-subtitle, .contact_adress, .contact_office, 
  .contact_chat, .contact_networks, .contact_form h2, .contact_form-subtitle, 
  .form_name, .form_email, .form_mensage, .button_form, .form_state, .form_city,
   .form_neighborhood, .form_place, .form_cep, .form_number, .form_cpf,
    .form_name-2, .form_last-name`,
  {
    origin: 'top',
  }
);

// Activate Budget Items

const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const elemento = document.getElementById(parameter);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parameters.forEach(activateProduct);
