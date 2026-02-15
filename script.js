// Novans Jets — Interactive functionality
// Expanding sections, smooth scrolling, mobile menu, scroll animations

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile Menu Toggle ──────────────────────────────────────
  var mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  var navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) navMenu.classList.remove('active');
      if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    });
  });

  // ── Smooth Scrolling ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // ── Navbar Scroll Effect ────────────────────────────────────
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(26, 35, 50, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'rgba(26, 35, 50, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });

  // ── Expanding / Collapsing Sections ─────────────────────────
  var expandBtns = document.querySelectorAll('.expand-btn');
  expandBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.getAttribute('data-target');
      if (!targetId) return;
      var content = document.getElementById(targetId);
      if (!content) return;

      var isOpen = content.classList.contains('open');

      // Close all other open panels in the same parent grid
      var parentGrid = this.closest('.services-grid, .fleet-grid, .mgmt-grid');
      if (parentGrid) {
        parentGrid.querySelectorAll('.expand-content.open').forEach(function (el) {
          if (el !== content) {
            el.classList.remove('open');
            var siblingBtn = parentGrid.querySelector('[data-target="' + el.id + '"]');
            if (siblingBtn) {
              siblingBtn.classList.remove('active');
              siblingBtn.textContent = siblingBtn.textContent.replace('▴', '▾');
            }
          }
        });
      }

      // Toggle current
      if (isOpen) {
        content.classList.remove('open');
        this.classList.remove('active');
        this.textContent = this.textContent.replace('▴', '▾');
      } else {
        content.classList.add('open');
        this.classList.add('active');
        this.textContent = this.textContent.replace('▾', '▴');
      }
    });
  });

  // ── Form Submission ─────────────────────────────────────────
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = {};
      var inputs = quoteForm.querySelectorAll('input, select, textarea');
      inputs.forEach(function (input) {
        if (input.name) formData[input.name] = input.value;
      });

      alert('Thank you for your enquiry! Our team will contact you shortly.');
      quoteForm.reset();
      console.log('Quote form submission:', formData);
    });
  }

  // ── Scroll Reveal Animation ─────────────────────────────────
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  var animatedElements = document.querySelectorAll(
    '.service-card, .fleet-card, .mgmt-card, .why-card, .dest-card, .step-card, .contact-card, .stat'
  );
  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // ── Active Nav Link on Scroll ───────────────────────────────
  var sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    var scrollPosition = window.scrollY + 150;
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-menu a').forEach(function (link) {
          link.classList.remove('active-link');
        });
        var activeLink = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');
        if (activeLink) activeLink.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // ── Parallax Hero ───────────────────────────────────────────
  var hero = document.querySelector('.hero');
  window.addEventListener('scroll', function () {
    if (!hero) return;
    var scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      hero.style.backgroundPositionY = (50 + scrolled * 0.05) + '%';
    }
  });

  console.log('Novans Jets website initialised successfully');
});
