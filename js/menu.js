const huidigePagina = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  if (link.getAttribute('href') === huidigePagina) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});