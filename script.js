/* ============================================
   IZABELLA MIRANDA FERREIRA — Fonoaudióloga
   script.js — Interações e Acessibilidade
   Version: 1.0 | Janeiro 2026
   ============================================ */

(function () {
  'use strict';

  /* ===========================
     1. HEADER — scroll effect
     =========================== */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ===========================
     2. MOBILE MENU
     =========================== */
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const mobileMenu   = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', 'Fechar menu de navegação');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Abrir menu de navegação');
      document.body.style.overflow = '';
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    // Fechar ao clicar em link interno
    const menuLinks = mobileMenu.querySelectorAll('a[href^="#"]');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        mobileToggle.focus();
      }
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ===========================
     3. FAQ ACCORDION
     Acessível: aria-expanded, aria-hidden
     =========================== */
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const contentId  = trigger.getAttribute('aria-controls');
      const content    = document.getElementById(contentId);

      if (!content) return;

      // Fechar outros itens (one-at-a-time)
      faqTriggers.forEach((other) => {
        if (other !== trigger) {
          const otherId      = other.getAttribute('aria-controls');
          const otherContent = document.getElementById(otherId);
          other.setAttribute('aria-expanded', 'false');
          if (otherContent) {
            otherContent.setAttribute('aria-hidden', 'true');
          }
        }
      });

      // Toggle item clicado
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });

    // Suporte a teclado: Enter e Space já são nativos para button,
    // mas garantimos que a navegação por setas funcione
    trigger.addEventListener('keydown', (e) => {
      const items   = Array.from(faqTriggers);
      const index   = items.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = items[index + 1];
        if (next) next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = items[index - 1];
        if (prev) prev.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        items[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        items[items.length - 1].focus();
      }
    });
  });

  /* ===========================
     4. INTERSECTION OBSERVER — fade-in ao scroll
     =========================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  } else {
    // Se preferência de movimento reduzido, mostrar tudo imediatamente
    document.querySelectorAll('.fade-in').forEach((el) => {
      el.classList.add('visible');
    });
  }

  /* ===========================
     5. SMOOTH SCROLL — para links âncora
     (complementa scroll-behavior: smooth do CSS)
     =========================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Mover foco para o destino (acessibilidade)
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ===========================
     6. ACTIVE NAV LINK — highlight seção atual
     =========================== */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              link.classList.toggle('active', href === `#${id}`);
              link.setAttribute('aria-current', href === `#${id}` ? 'true' : 'false');
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -75% 0px',
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ===========================
     7. FOOTER — ano dinâmico
     =========================== */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ===========================
     8. WHATSAPP — rastreamento de cliques
     (placeholder para GTM / Analytics)
     =========================== */
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
      // Enviar evento para dataLayer (GTM) se disponível
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'whatsapp_click',
          event_category: 'Contact',
          event_label: link.getAttribute('aria-label') || 'WhatsApp CTA',
        });
      }
      // Google Analytics 4 (gtag) se disponível
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'Contact',
          event_label: link.getAttribute('aria-label') || 'WhatsApp CTA',
        });
      }
    });
  });

})();
