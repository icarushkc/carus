import { contactInfo } from "../data/translations.js";
export const Navbar = (t) => `
  <nav class="absolute top-0 w-full z-50 px-6 py-4 flex ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'} items-center justify-between text-white border-b border-white/10">
    <!-- Logo (Dynamic Text-based Brand) -->
    <div class="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onclick="window.location.reload()">
      <span class="text-3xl md:text-4xl font-black tracking-tighter text-primary-500 select-none leading-none pt-1 transition-colors duration-500">
        ${t.name}
      </span>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-4" dir="ltr">
      <!-- Settings Menu Container -->
      <div class="relative">
        <button id="settings-btn" class="p-2 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm relative z-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>

        <!-- Settings Dropdown -->
        <div id="settings-menu" class="hidden absolute top-12 right-0 w-56 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 text-slate-900 dark:text-white border border-white/20 dark:border-slate-700 transform origin-top-right transition-all duration-300 z-[60]">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2 text-right">${t.settings}</h4>
          
          <!-- Theme Toggle -->
          <button id="theme-toggle" class="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group mb-2">
            <span id="theme-text" class="text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">${document.documentElement.classList.contains('dark') ? t.dark : t.light}</span>
            <div class="flex items-center">
              <svg id="sun-icon" class="w-5 h-5 text-amber-500 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <svg id="moon-icon" class="w-5 h-5 text-slate-600 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </div>
          </button>

          <!-- Color Picker -->
          <div class="border-t border-slate-200 dark:border-slate-700 pt-2 mb-2">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 text-right">${t.colors}</h5>
            <div class="grid grid-cols-4 gap-2 px-1">
              <button class="color-btn w-6 h-6 rounded-full bg-blue-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-blue-500" data-color="blue"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-purple-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-purple-500" data-color="purple"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-red-600 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-red-600" data-color="rose"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-amber-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-amber-500" data-color="amber"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-emerald-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-emerald-500" data-color="emerald"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-cyan-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-cyan-500" data-color="cyan"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-indigo-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-indigo-500" data-color="indigo"></button>
              <button class="color-btn w-6 h-6 rounded-full bg-pink-500 hover:scale-110 transition-transform ring-2 ring-offset-1 ring-transparent hover:ring-pink-500" data-color="pink"></button>
            </div>
          </div>

          <!-- Language Selection -->
          <div class="border-t border-slate-200 dark:border-slate-700 pt-2">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 text-right">${t.language}</h5>
            <div class="flex flex-col gap-1">
              <button class="lang-btn w-full text-right px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" data-lang="ar">العربية</button>
              <button class="lang-btn w-full text-right px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" data-lang="en">English</button>
              <button class="lang-btn w-full text-right px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" data-lang="fr">Français</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Premium Contact Drawer Button -->
      <div class="relative">
        <button id="menu-btn" class="p-2 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm z-[70] relative group">
          <div class="w-6 h-6 flex flex-col justify-center items-end gap-1.5">
            <span id="menu-line-1" class="w-6 h-0.5 bg-current transition-all duration-300"></span>
            <span id="menu-line-2" class="w-4 h-0.5 bg-current transition-all duration-300"></span>
            <span id="menu-line-3" class="w-5 h-0.5 bg-current transition-all duration-300"></span>
          </div>
        </button>

        <!-- Premium Side Drawer Overlay -->
        <div id="drawer-overlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[65] opacity-0 pointer-events-none transition-opacity duration-300"></div>

        <!-- Premium Side Drawer Content -->
        <div id="mobile-menu" class="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.3)] z-[68] transform translate-x-full transition-transform duration-300 ease-out border-l border-white/20 dark:border-slate-800 p-8 flex flex-col pt-24">
          
          <!-- Fast Contact Grid -->
          <div class="grid grid-cols-1 gap-4 mb-10">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">${t.contact}</h4>
            
            <a href="https://wa.me/96176151680" target="_blank" class="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all group shadow-sm">
                <div class="flex items-center gap-4">
                    <i class="fab fa-whatsapp text-2xl text-emerald-500 group-hover:text-white"></i>
                    <span class="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">WhatsApp</span>
                </div>
                <i class="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </a>

            <a href="https://t.me/+96176151680" target="_blank" class="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all group shadow-sm">
                <div class="flex items-center gap-4">
                    <i class="fab fa-telegram text-2xl text-sky-500 group-hover:text-white"></i>
                    <span class="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">Telegram</span>
                </div>
                <i class="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white transition-all group shadow-sm">
                <div class="flex items-center gap-4">
                    <i class="fas fa-envelope text-2xl text-red-500 group-hover:text-white"></i>
                    <span class="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">${t.language === 'ar' ? 'جيميل' : 'Gmail'}</span>
                </div>
                <i class="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </a>

            <!-- New Order Button in Drawer -->
            <button id="drawer-order-cta" class="flex items-center justify-between p-4 rounded-2xl bg-primary-600 text-white hover:bg-primary-700 transition-all group shadow-lg shadow-primary-500/25 mt-4">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fas fa-rocket text-xl"></i>
                    </div>
                    <span class="font-bold">${t.cta}</span>
                </div>
                <i class="fas fa-chevron-left rtl:rotate-0 ltr:rotate-180 opacity-70"></i>
            </button>
          </div>

          <!-- Socials Part -->
          <div class="border-t border-slate-200 dark:border-slate-800 pt-8">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">${t.socials}</h4>
            <div class="flex gap-4 px-2">
                <a href="https://www.tiktok.com/@carus_7480?is_from_webapp=1&sender_device=pc" target="_blank" class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl text-slate-600 dark:text-slate-400 hover:bg-black hover:text-white transition-all">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/carus8074/" target="_blank" class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl text-slate-600 dark:text-slate-400 hover:bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:text-white transition-all">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
          </div>

          <!-- Brand Footer -->
          <div class="mt-auto pt-10 text-center">
            <span class="text-2xl font-black text-primary-500 select-none">${t.name}</span>
            <p class="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.2em]">Crafted for you</p>
          </div>

        </div>
      </div>
    </div>
  </nav>
`;
