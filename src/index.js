import App from "./App.js";
import { Legal } from "./components/Legal.js";
import { translations } from "./data/translations.js";

// --- Unique Visitor Tracking (Immediate Execution) ---
(function () {
  const h = window.location.hostname;
  const isInternalDev = h === 'localhost' || h === '127.0.0.1';
  if (!isInternalDev) {
    const hasVisited = localStorage.getItem('carus_v1_visited');
    if (!hasVisited) {
      // Use cache-buster to ensure the server processes the request immediately
      fetch(`https://api.counterapi.dev/v1/carus-official/00000/up/?t=${Date.now()}`).then(() => {
        localStorage.setItem('carus_v1_visited', 'true');
      }).catch(() => { });
    }
  }
})();


// 0. Global Setup: Disable automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Theme Colors (Tailwind Palette RGB values)
const themeColors = {
  blue: {
    50: '239 246 255', 100: '219 234 254', 200: '191 219 254', 300: '147 197 253', 400: '96 165 250',
    500: '59 130 246', 600: '37 99 235', 700: '29 78 216', 800: '30 64 175', 900: '30 58 138', 950: '23 37 84'
  },
  purple: {
    50: '250 245 255', 100: '243 232 255', 200: '233 213 255', 300: '216 180 254', 400: '192 132 252',
    500: '168 85 247', 600: '147 51 234', 700: '126 34 206', 800: '107 33 168', 900: '88 28 135', 950: '59 7 100'
  },
  rose: {
    50: '254 242 242', 100: '254 226 226', 200: '254 202 202', 300: '252 165 165', 400: '248 113 113',
    500: '239 68 68', 600: '220 38 38', 700: '185 28 28', 800: '153 27 27', 900: '127 29 29', 950: '69 10 10'
  },
  amber: {
    50: '255 251 235', 100: '254 243 199', 200: '253 230 138', 300: '252 211 77', 400: '251 191 36',
    500: '245 158 11', 600: '217 119 6', 700: '180 83 9', 800: '146 64 14', 900: '120 53 15', 950: '69 26 3'
  },
  emerald: {
    50: '236 253 245', 100: '209 250 229', 200: '167 243 208', 300: '110 231 183', 400: '52 211 153',
    500: '16 185 129', 600: '5 150 105', 700: '4 120 87', 800: '6 95 70', 900: '6 78 59', 950: '2 44 34'
  },
  cyan: {
    50: '236 254 255', 100: '207 250 254', 200: '165 243 252', 300: '103 232 249', 400: '34 211 238',
    500: '6 182 212', 600: '8 145 178', 700: '14 116 144', 800: '21 94 117', 900: '22 78 99', 950: '8 51 68'
  },
  indigo: {
    50: '238 242 255', 100: '224 231 255', 200: '199 210 254', 300: '165 180 252', 400: '129 140 248',
    500: '99 102 241', 600: '79 70 229', 700: '67 56 202', 800: '55 48 163', 900: '49 46 129', 950: '30 27 75'
  },
  pink: {
    50: '253 242 248', 100: '252 231 243', 200: '249 168 212', 300: '244 114 182', 400: '236 72 153',
    500: '219 39 119', 600: '190 24 93', 700: '157 23 77', 800: '131 24 67', 900: '100 21 54', 950: '77 10 38'
  }
};

function applyTheme(colorName, save = true) {
  const palette = themeColors[colorName] || themeColors['blue'];
  const root = document.documentElement;

  Object.keys(palette).forEach(shade => {
    root.style.setProperty(`--color-primary-${shade}`, palette[shade]);
  });

  if (save) {
    localStorage.setItem('themeColor', colorName);
  }

  // Update button highlights
  document.querySelectorAll('.color-btn').forEach(btn => {
    if (btn.getAttribute('data-color') === colorName) {
      btn.classList.add('ring-white', 'scale-110');
      btn.classList.remove('ring-transparent');
    } else {
      btn.classList.remove('ring-white', 'scale-110');
      btn.classList.add('ring-transparent');
    }
  });
}

function attachLocalListeners() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const settingsBtn = document.getElementById('settings-btn');
  const settingsMenu = document.getElementById('settings-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const overlay = document.getElementById('drawer-overlay');

  const lines = [
    document.getElementById('menu-line-1'),
    document.getElementById('menu-line-2'),
    document.getElementById('menu-line-3')
  ];

  const closeDrawer = () => {
    mobileMenu?.classList.add('translate-x-full');
    overlay?.classList.add('opacity-0', 'pointer-events-none');
    lines[0]?.classList.remove('rotate-45', 'translate-y-2');
    lines[1]?.classList.remove('opacity-0');
    lines[2]?.classList.remove('-rotate-45', '-translate-y-2');
  };

  const openDrawer = () => {
    mobileMenu?.classList.remove('translate-x-full');
    overlay?.classList.remove('opacity-0', 'pointer-events-none');
    lines[0]?.classList.add('rotate-45', 'translate-y-2');
    lines[1]?.classList.add('opacity-0');
    lines[2]?.classList.add('-rotate-45', '-translate-y-2');
    settingsMenu?.classList.add('hidden');
  };

  // Color Picker Logic
  const colorBtns = document.querySelectorAll('.color-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const color = btn.getAttribute('data-color');
      applyTheme(color);
    });
  });

  // Drawer Toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !mobileMenu.classList.contains('translate-x-full');
      if (isOpen) closeDrawer(); else openDrawer();
    });
    overlay?.addEventListener('click', closeDrawer);
  }

  // Settings Menu
  if (settingsBtn && settingsMenu) {
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsMenu.classList.toggle('hidden');
      closeDrawer();
    });
  }

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      const themeText = document.getElementById('theme-text');
      if (themeText) {
        const lang = localStorage.getItem('lang') || 'ar';
        themeText.innerText = isDark ? translations[lang].dark : translations[lang].light;
      }
    });
  }

  // Close Settings Menu when clicking outside
  window.addEventListener('click', (e) => {
    if (settingsMenu && !settingsMenu.classList.contains('hidden')) {
      if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsMenu.classList.add('hidden');
      }
    }
  });

  // Language Switching
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      localStorage.setItem('lang', lang);
      renderApp(lang);
    });
  });

  // --- Performance Helpers ---
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const throttle = (fn, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // --- Content Filter Logic (Optimized) ---
  const forbiddenWordsList = [
    'جنس', 'اباحي', 'سكس', 'نيك', 'قحبة', 'عاهر', 'عاهرة', 'شرموطة', 'شرموط', 'خرا', 'نجس', 'تعري', 'لواط', 'شاذ', 'منيوك', 'كس', 'زب', 'طيز', 'فحشاء', 'عواهر', 'داعر', 'بغايا', 'ارداف', 'مني', 'جماع', 'مضاجعة', 'اغتصاب',
    'porn', 'sex', 'fuck', 'nude', 'dick', 'pussy', 'vagina', 'penis', 'ass', 'butt', 'tit', 'boob', 'rimjob', 'blowjob', 'cum', 'ejaculate', 'rape', 'pedophile', 'horny', 'slut', 'whore', 'prostitute', 'shit', 'bitch', 'bastard',
    'sexe', 'porno', 'pute', 'nique', 'nu', 'bite', 'chatte', 'con', 'salope', 'bordel', 'viol', 'baise', 'couille', 'nichon'
  ];

  // Pre-compile single Regex with Unicode-aware Lookarounds for precise word boundaries
  // Matches words only if NOT preceded or followed by any Letter (\p{L}) or Mark (\p{M})
  const forbiddenRegex = new RegExp(
    `(?<![\\p{L}\\p{M}])(?:${forbiddenWordsList.map(word =>
      word.split('').map((char, i) => {
        const escaped = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return i < word.length - 1 ? escaped + '[^\\p{L}\\p{M}]*' : escaped;
      }).join('')
    ).join('|')
    })(?![\\p{L}\\p{M}])`,
    'giu'
  );

  const redactContent = (text) => {
    if (!text) return text;
    return text.replace(forbiddenRegex, '');
  };

  const projectForm = document.getElementById('project-form');
  if (projectForm) {
    const fieldsToWatch = projectForm.querySelectorAll('input[name="name"], textarea[name="idea"], textarea[name="notes"]');
    fieldsToWatch.forEach(field => {
      const isTextarea = field.tagName.toLowerCase() === 'textarea';

      const handleInput = debounce(() => {
        const newValue = redactContent(field.value);
        if (field.value !== newValue) {
          const start = field.selectionStart;
          field.value = newValue;
          field.setSelectionRange(start, start);
          if (isTextarea) adjustHeight(field);
        }
      }, 100);

      const adjustHeight = (el) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      };

      field.addEventListener('input', (e) => {
        if (isTextarea) adjustHeight(field);
        handleInput(e);
      });
      field.addEventListener('blur', () => {
        field.value = redactContent(field.value);
      });
    });
  }

  // Order Modal Logic
  const orderModal = document.getElementById('order-modal');
  const heroCta = document.getElementById('hero-cta');
  const drawerOrderCta = document.getElementById('drawer-order-cta');
  const closeModal = document.getElementById('close-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');

  const openModal = () => {
    if (!orderModal) return;
    const modalContent = orderModal.querySelector('div:nth-child(2)');
    orderModal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    modalContent.scrollTop = 0; // RESET SCROLL TO TOP
    document.body.classList.add('overflow-hidden');
  };

  const closeModals = () => {
    if (!orderModal) return;
    const modalContent = orderModal.querySelector('div:nth-child(2)');
    orderModal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.add('scale-95');
    modalContent.classList.remove('scale-100');
    document.body.classList.remove('overflow-hidden');

    // Clear validation highlights and toasts on close
    projectForm?.querySelectorAll('.input-invalid').forEach(el => el.classList.remove('input-invalid'));
    document.querySelectorAll('.toast-container').forEach(t => t.remove());
  };

  heroCta?.addEventListener('click', openModal);
  drawerOrderCta?.addEventListener('click', () => {
    closeDrawer();
    setTimeout(openModal, 300); // Wait for drawer transition
  });

  closeModal?.addEventListener('click', closeModals);
  modalBackdrop?.addEventListener('click', () => {
    closeModal?.classList.add('text-red-600', 'scale-125');
    setTimeout(() => closeModal?.classList.remove('text-red-600', 'scale-125'), 400);
  });

  // Platform Tab Switcher
  const platformTabs = document.querySelectorAll('.platform-tab');
  const submitPlatformInput = document.getElementById('submit-platform');
  const mainSubmitBtn = document.getElementById('main-submit-btn');
  const submitIcon = document.getElementById('submit-icon');
  const submitText = document.getElementById('submit-text');

  platformTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const val = tab.getAttribute('data-val');
      const lang = localStorage.getItem('lang') || 'ar';
      const t = translations[lang];
      submitPlatformInput.value = val;

      // Reset all tabs
      platformTabs.forEach(t => {
        t.classList.remove(
          'active', 'bg-emerald-100', 'text-emerald-700', 'bg-sky-100', 'text-sky-700', 'bg-red-100', 'text-red-700',
          'dark:bg-emerald-500', 'dark:text-white', 'dark:bg-sky-500', 'dark:bg-red-500',
          'bg-emerald-500', 'text-white', 'bg-sky-500', 'bg-red-500'
        );
        t.classList.add('text-slate-500', 'dark:text-slate-400');
      });

      // Set active tab vibrant colors
      tab.classList.remove('text-slate-500', 'dark:text-slate-400');
      tab.classList.add('active', 'text-white');

      if (val === 'whatsapp') {
        tab.classList.add('bg-emerald-500');
        mainSubmitBtn.className = 'w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25';
        submitIcon.className = 'fab fa-whatsapp text-xl';
        submitText.innerText = t.orderForm.submitWhatsApp;
      } else if (val === 'telegram') {
        tab.classList.add('bg-sky-500');
        mainSubmitBtn.className = 'w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-sky-500/25';
        submitIcon.className = 'fab fa-telegram text-xl';
        submitText.innerText = t.orderForm.submitTelegram;
      } else if (val === 'gmail') {
        tab.classList.add('bg-red-500');
        mainSubmitBtn.className = 'w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-500/25';
        submitIcon.className = 'fas fa-envelope text-xl';
        submitText.innerText = t.orderForm.submitEmail;
      }
      localStorage.setItem('selectedPlatform', val);
    });
  });

  // --- Professional Toast System ---
  const showToast = (message, type = 'error') => {
    // Remove existing toasts
    document.querySelectorAll('.toast-container').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast-container fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] w-max';

    const isAr = (localStorage.getItem('lang') || 'ar') === 'ar';
    const icon = type === 'error' ? 'fa-exclamation-circle text-red-500' : 'fa-check-circle text-emerald-500';

    toast.innerHTML = `
      <div class="glass-toast flex items-center gap-4 px-6 py-4 rounded-3xl text-white shadow-2xl border ${isAr ? 'flex-row-reverse text-right' : ''}">
        <div class="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center">
          <i class="fas ${icon} text-xl"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-xs uppercase tracking-widest text-slate-400 font-black mb-1">${type === 'error' ? (isAr ? 'تنبيه' : 'ALERT') : (isAr ? 'نجاح' : 'SUCCESS')}</span>
          <span class="text-sm font-bold">${message}</span>
        </div>
      </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'all 0.4s';
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 20px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // Clear invalid highlighting on input as user types
  projectForm?.addEventListener('input', (e) => {
    if (e.target.classList.contains('input-invalid')) {
      e.target.classList.remove('input-invalid');
    }
  });

  // Form Submission
  projectForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset previous invalid states
    projectForm.querySelectorAll('.input-invalid').forEach(el => el.classList.remove('input-invalid'));

    if (!projectForm.checkValidity()) {
      const lang = localStorage.getItem('lang') || 'ar';
      const invalidField = projectForm.querySelector(':invalid');

      if (invalidField) {
        invalidField.classList.add('input-invalid');
        // Smooth scroll to the invalid field within the modal
        invalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        invalidField.focus({ preventScroll: true });
        showToast(translations[lang].orderForm.validationMsg, 'error');
      }
      return;
    }

    const formData = new FormData(projectForm);
    const data = Object.fromEntries(formData.entries());

    // Save persistence
    localStorage.setItem('selectedPayment', data.payment);
    localStorage.setItem('selectedPlatform', data.platform);

    // Build message dynamically with localization
    const lang = localStorage.getItem('lang') || 'ar';
    const t = translations[lang];
    const labels = t.orderForm.msgLabels;

    const messageParts = [
      `🌟 *${labels.title}* 🌟`,
      '--------------------------',
      ''
    ];

    const fields = ['name', 'country', 'city', 'idea', 'deadline', 'budget', 'alt_contact', 'payment', 'notes'];

    fields.forEach(key => {
      const val = data[key]?.toString().trim();
      if (val && labels[key]) {
        messageParts.push(`${labels[key]}: ${val}`);
      }
    });

    messageParts.push('', '--------------------------');
    messageParts.push(`📅 ${new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang)}`);

    const message = messageParts.join('\n');
    const encodedMsg = encodeURIComponent(message);

    if (data.platform === 'whatsapp') window.open(`https://wa.me/96176151680?text=${encodedMsg}`, '_blank');
    else if (data.platform === 'telegram') {
      navigator.clipboard.writeText(message).then(() => {
        alert(translations[localStorage.getItem('lang') || 'ar'].orderForm.copiedMsg);
        window.open(`https://t.me/+96176151680`, '_blank');
      });
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=carus8074@gmail.com&body=${encodedMsg}`, '_blank');
    }
    projectForm.reset();
    closeModals();
  });

  // Restore Persistence
  const savedPayment = localStorage.getItem('selectedPayment');
  const savedPlatform = localStorage.getItem('selectedPlatform');

  if (savedPayment && projectForm.payment) {
    projectForm.payment.value = savedPayment;
  }

  if (savedPlatform) {
    const targetTab = document.querySelector(`.platform-tab[data-val="${savedPlatform}"]`);
    if (targetTab) targetTab.click();
  }

  // --- Keyboard Navigation: Enter to Next Field ---
  projectForm?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const target = e.target;
      const isNotes = target.name === 'notes' || target.classList.contains('notes-textarea');
      const isSubmitBtn = target.id === 'main-submit-btn';

      // --- Secret Code: npm + Shift + Enter ---
      if (isNotes && e.shiftKey) {
        const val = target.value.trim().toLowerCase();
        // Check for 'npm' or its common Arabic keyboard layout equivalent (ىحة)
        if (val === 'npm' || val === 'ىحاة' || val === 'ىحة') {
          e.preventDefault();
          e.stopPropagation();

          // Remove any existing secret toasts
          document.querySelectorAll('.secret-toast-v3').forEach(t => t.remove());

          const lang = localStorage.getItem('lang') || 'ar';
          const toast = document.createElement('div');
          toast.className = 'secret-toast-v3 fixed top-10 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md';

          const h = window.location.hostname;

          toast.innerHTML = `
            <div class="bg-slate-900/95 backdrop-blur-2xl border border-primary-500/50 rounded-3xl p-6 shadow-[0_0_50px_rgba(var(--color-primary-500),0.3)] text-white scale-90 opacity-0 transition-all duration-500 transform translate-y-[-20px]">
              <div class="flex items-center justify-center mb-2">
                <div class="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                  <i class="fas fa-chart-line text-primary-500 text-xl"></i>
                </div>
              </div>
              <div id="secret-content" class="space-y-4">
                <div class="flex items-center justify-center py-4">
                  <i class="fas fa-circle-notch fa-spin text-primary-500 text-2xl"></i>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-white/5 text-[8px] text-slate-600 font-mono text-center uppercase tracking-widest">
                ${h} • UNIQUE MODE
              </div>
            </div>
          `;
          document.body.appendChild(toast);

          // Animate in
          requestAnimationFrame(() => {
            const inner = toast.querySelector('div');
            inner.classList.remove('scale-95', 'opacity-0', 'translate-y-[-20px]');
            inner.classList.add('scale-100', 'opacity-100', 'translate-y-0');
          });

          fetch(`https://api.counterapi.dev/v1/carus-official/00000/?t=${Date.now()}`)
            .then(res => res.json())
            .then(data => {
              const count = data.count || 0;
              const content = document.getElementById('secret-content');
              if (content) {
                content.innerHTML = `
                  <div class="grid grid-cols-1 gap-3">
                    <div class="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                      <div class="flex flex-col">
                        <span class="text-[10px] text-slate-500 font-bold uppercase">${lang === 'ar' ? 'إجمالي الزوار' : 'TOTAL VISITORS'}</span>
                        <span class="text-3xl font-black tabular-nums tracking-tighter text-primary-500">${parseInt(count).toLocaleString()}</span>
                      </div>
                      <div class="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center">
                        <i class="fas fa-users text-primary-500"></i>
                      </div>
                    </div>
                  </div>
                `;
              }
              setTimeout(() => {
                const inner = toast.querySelector('div');
                inner.classList.add('scale-95', 'opacity-0', 'translate-y-[-20px]');
                setTimeout(() => toast.remove(), 500);
              }, 6000);
            })
            .catch(() => {
              const content = document.getElementById('secret-content');
              if (content) content.innerHTML = `<div class="text-red-500 text-center font-bold">Connection Error</div>`;
              setTimeout(() => toast.remove(), 3000);
            });
          return;
        }
      }

      // Smart Enter for Notes: Submit if empty, newline if not
      if (isNotes) {
        if (target.value.trim() === '' && !e.shiftKey) {
          e.preventDefault();
          projectForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
        return;
      }

      if (isTextarea) return; // Other textareas (like Idea) always newline

      if (!isSubmitBtn) {
        e.preventDefault();
        const formElements = Array.from(projectForm.querySelectorAll('input:not([type="hidden"]), select, textarea, button[type="submit"]'));
        const index = formElements.indexOf(e.target);

        if (index > -1 && index < formElements.length - 1) {
          formElements[index + 1].focus();
        }
      } else {
        // If on submit button and they hit Enter, let it proceed ONLY if form is valid
        if (!projectForm.checkValidity()) {
          e.preventDefault();
          const lang = localStorage.getItem('lang') || 'ar';
          const invalidField = projectForm.querySelector(':invalid');
          if (invalidField) {
            invalidField.classList.add('input-invalid');
            invalidField.focus();
            showToast(translations[lang].orderForm.validationMsg, 'error');
          }
        }
      }
    }
  });

  // Scroll To Top
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (scrollTopBtn) {
    const updateVisibility = throttle(() => {
      if (window.scrollY > 1000) scrollTopBtn.classList.remove('opacity-0');
      else scrollTopBtn.classList.add('opacity-0');
    }, 100);
    window.addEventListener('scroll', updateVisibility);
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

function renderApp(lang) {
  const root = document.getElementById("root");
  if (!root) return;
  const hash = window.location.hash;
  if (hash === '#/terms' || hash === '#/cookies') {
    root.innerHTML = Legal(hash === '#/terms' ? 'terms' : 'cookies');
  } else {
    root.innerHTML = App(lang);
  }

  // Robust scroll-to-top
  requestAnimationFrame(() => window.scrollTo(0, 0));

  attachLocalListeners();
  applyTheme(localStorage.getItem('themeColor') || 'blue', false);
}

function initApp() {

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) document.documentElement.classList.add('dark');
  renderApp(localStorage.getItem('lang') || 'ar');
  window.addEventListener('hashchange', () => renderApp(localStorage.getItem('lang') || 'ar'));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();