Fancybox.bind('[data-fancybox="portfolio"]', {
  Thumbs: false,
  Toolbar: { display: { left: [], middle: [], right: ["close"] } }
});

new WOW({ offset: 80, mobile: false }).init();

const menu = document.getElementById('mainMenu');
document.querySelectorAll('#mainMenu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const instance = bootstrap.Collapse.getInstance(menu);
    if (instance) instance.hide();
  });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById('formStatus');
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    status.textContent = 'Revisá los campos indicados.';
    return;
  }
  status.textContent = '¡Gracias! Tu mensaje está listo.';
  form.reset();
  form.classList.remove('was-validated');
});
