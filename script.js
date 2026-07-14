const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const header = qs('.site-header');
  const menuButton = qs('.menu-toggle');
  const nav = qs('.main-nav');
  const year = qs('#year');
  year.textContent = new Date().getFullYear();

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  qsa('.main-nav a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  qsa('.reveal').forEach(el => revealObserver.observe(el));

  qsa('.comparison').forEach(comparison => {
    const range = qs('input[type="range"]', comparison);
    const update = () => comparison.style.setProperty('--position', `${range.value}%`);
    range.addEventListener('input', update);
    update();
  });

  const sections = qsa('main section[id]');
  const navLinks = qsa('.main-nav a');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => sectionObserver.observe(section));

  const modal = qs('#video-modal');
  qsa('.demo-video-button').forEach(button => button.addEventListener('click', () => modal?.showModal()));
  qs('.modal-close')?.addEventListener('click', () => modal.close());
  modal?.addEventListener('click', event => {
    const rect = modal.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) modal.close();
  });

  const simProperties = qs('#sim-properties');
  const simService = qs('#sim-service');
  const simSocial = qs('#sim-social');
  const simPlan = qs('#sim-plan');
  const simPrice = qs('#sim-price');
  const simWhatsapp = qs('#sim-whatsapp');

  const plans = {
    photos: { name: 'Plano Fotos', price: 197 },
    highlight: { name: 'Plano Destaque', price: 397 },
    cinematic: { name: 'Plano Cinematográfico', price: 697 },
    monthly: { name: 'Plano Imobiliária', price: 1490 }
  };

  function updateSimulator() {
    const properties = Number(simProperties.value);
    let key = simService.value;
    if (properties >= 4 || key === 'monthly') key = 'monthly';
    const selected = plans[key];
    const socialExtra = simSocial.checked && key !== 'monthly' ? 90 : 0;
    let estimate = selected.price + socialExtra;

    if (key !== 'monthly' && properties > 1) estimate *= properties;
    if (key === 'monthly' && properties > 4) estimate += (properties - 4) * 250;

    simPlan.textContent = selected.name;
    simPrice.textContent = `${key === 'monthly' ? 'a partir de ' : 'estimativa de '}R$ ${estimate.toLocaleString('pt-BR')}`;
    const message = `Olá! Usei o simulador do site. Plano recomendado: ${selected.name}. Quantidade estimada: ${simProperties.options[simProperties.selectedIndex].text}. Entrega: ${simService.options[simService.selectedIndex].text}. Kit social: ${simSocial.checked ? 'sim' : 'não'}. Gostaria de receber uma proposta.`;
    simWhatsapp.href = `https://wa.me/5511971249331?text=${encodeURIComponent(message)}`;
  }

  [simProperties, simService, simSocial].forEach(input => input?.addEventListener('change', updateSimulator));
  updateSimulator();

  const formPlan = qs('#form-plan');
  qsa('[data-plan]').forEach(button => button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    if (formPlan) {
      const option = [...formPlan.options].find(item => item.text === plan);
      if (option) formPlan.value = plan;
    }
  }));
});
