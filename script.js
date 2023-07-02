const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
        menuList.style.display = "block";
    } else {
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
        menuList.style.display = "none";
    }
})

// Funkce pro zobrazení tlačítka "back-to-top" při scrollu
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 500) {
    backToTopButton.style.display = "block";
    } else {
    backToTopButton.style.display = "none";
    }
}

// Funkce pro posun na začátek dokumentu po kliknutí na tlačítko "back-to-top"
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

// Funkce pro zoom obrázků při najetí myši
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');


image1.addEventListener('mouseenter', () => {
  image1.style.transform = 'scale(1.3)';
});
image2.addEventListener('mouseenter', () => {
  image2.style.transform = 'scale(1.3)';
});
image3.addEventListener('mouseenter', () => {
  image3.style.transform = 'scale(1.3)';
});
image1.addEventListener('mouseleave', () => {
  image1.style.transform = 'scale(1)';
});
image2.addEventListener('mouseleave', () => {
  image2.style.transform = 'scale(1)';
});
image3.addEventListener('mouseleave', () => {
  image3.style.transform = 'scale(1)';
});

// Funkce pro přepínání mezi světlým a tmavým režimem
const darkModeToggle = document.getElementById('dark_mode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const modeIcon = darkModeToggle.querySelector('.mode-icon');
  if (body.classList.contains('dark-mode')) {
    modeIcon.src = './img/sunny.svg';
  } else {
    modeIcon.src = './img/moon.svg';
  }
});

// Funkce pro zobrazení a skrytí sekce "Login"
const btnLogin = document.querySelector('.btnLogin-popup');
const loginSection = document.querySelector('.Login');
const closeIcon = document.querySelector('.close-icon');

btnLogin.addEventListener('click', () => {
  loginSection.style.display = 'block';
  loginSection.scrollIntoView();
});

closeIcon.addEventListener('click', () => {
  loginSection.style.display = 'none';
});

// Skrytí sekce "Login" při načtení stránky
loginSection.style.display = 'none';

// Funkce pro odeslání formuláře a výpis dat do konzole
const form = document.querySelector('.form-contactUs');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value
  };
  console.log(formData);
  form.reset();
});

// Funkce pro přihlášení
document.addEventListener('DOMContentLoaded', function() {
  let loginForm = document.querySelector('.form-box.login');
  let signUpForm = document.querySelector('.form-box.signUp');
  let emailInput = loginForm.querySelector('input[type="email"]');
  let passwordInput = loginForm.querySelector('input[type="password"]');
  const loginButton = loginForm.querySelector('button[type="submit"]');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === 'j4n.meyer@gmail.com' && password === 'heslo123') {
      console.log('Email: ' + email);
      console.log('Password: ' + password);
      emailInput.value = '';
      passwordInput.value = '';
    } else if (email === 'j4n.meyer@gmail.com' && password !== 'heslo123') {
      console.log('Nesprávné heslo');
    } else {
      signUpForm.querySelector('input[type="email"]').value = email;
      loginForm.style.display = 'none';
      signUpForm.style.display = 'block';
    }
  });
});


// Funkce pro registraci a kontrolu shody hesel
document.addEventListener('DOMContentLoaded', function() {
  const signUpForm = document.querySelector('.form-box.signUp');
  let emailInput = signUpForm.querySelector('input[type="email"]');
  let passwordInput = signUpForm.querySelectorAll('input[type="password"]');
  const signUpButton = signUpForm.querySelector('button[type="submit"]');
  const resultText = signUpForm.querySelector('.result-text');
  const loginSection = document.querySelector('.Login');

  signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = emailInput.value;
    let password1 = passwordInput[0].value;
    let password2 = passwordInput[1].value;

    if (password1 === password2) {
      console.log('Email: ' + email);
      console.log('Password: ' + password1);
      emailInput.value = '';
      passwordInput[0].value = '';
      passwordInput[1].value = '';
      resultText.textContent = '';
      loginSection.style.display = 'none';
    } else {
      resultText.textContent = 'Passwords do not match';
    }
  });
});

