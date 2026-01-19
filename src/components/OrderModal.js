export const OrderModal = (t) => `
  <div id="order-modal" class="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300">
    <!-- Backdrop -->
    <div id="modal-backdrop" class="absolute inset-0 bg-slate-900/80 backdrop-blur-md"></div>
    
    <!-- Modal Content -->
    <div class="relative bg-white dark:bg-slate-900 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl shadow-2xl border border-white/20 transform scale-95 transition-transform duration-300">
      <!-- Header -->
      <div class="sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center z-10">
        <div>
          <h2 class="text-2xl font-black text-slate-900 dark:text-white">${t.orderForm.title}</h2>
          <p class="text-sm text-slate-500">${t.orderForm.subtitle}</p>
        </div>
        <button id="close-modal" class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form id="project-form" class="p-8 space-y-6" dir="${t.dir}" autocomplete="off" novalidate>
        <!-- Top Section: Name, Country, City -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Name -->
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.name}</label>
            </div>
            <input type="text" name="name" required autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>
          
          <!-- Country -->
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.country}</label>
            </div>
            <input type="text" name="country" required autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>

          <!-- City -->
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.city}</label>
            </div>
            <input type="text" name="city" autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>
        </div>

        <!-- Project Idea -->
        <div class="space-y-2">
          <label class="text-sm font-bold text-slate-400 uppercase tracking-wider">${t.orderForm.idea}</label>
          <textarea name="idea" required rows="3" autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right resize-none overflow-hidden"></textarea>
        </div>

        <!-- Deadline & Budget -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.deadline}</label>
            </div>
            <input type="text" name="deadline" required autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.budget}</label>
            </div>
            <input type="text" name="budget" required autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>
        </div>

        <!-- Contact & Payment -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.contact}</label>
            </div>
            <input type="text" name="alt_contact" autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right" />
          </div>
          <div class="space-y-2">
            <div class="h-12 flex items-end pb-1">
              <label class="text-sm font-bold text-slate-400 uppercase tracking-wider leading-tight">${t.orderForm.payment}</label>
            </div>
            <div class="relative">
              <select name="payment" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white appearance-none text-right">
                ${t.orderForm.paymentMethods.map(method => `<option value="${method}">${method}</option>`).join('')}
              </select>
              <i class="fas fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs"></i>
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div class="space-y-2">
          <label class="text-sm font-bold text-slate-400 uppercase tracking-wider">${t.orderForm.notes}</label>
          <textarea name="notes" rows="2" autocomplete="off" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary-500 outline-none transition-all dark:text-white text-right resize-none overflow-hidden"></textarea>
        </div>

        <!-- Platform Tabs -->
        <div class="pt-6 border-t border-slate-100 dark:border-slate-800">
          <input type="hidden" name="platform" id="submit-platform" value="whatsapp" />
          <div class="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-full mx-auto mb-6">
            <button type="button" class="platform-tab active bg-emerald-500 text-white flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2.5 rounded-xl text-[10px] sm:text-sm font-bold transition-all" data-val="whatsapp">
              <i class="fab fa-whatsapp text-lg"></i>
              <span>WhatsApp</span>
            </button>
            <button type="button" class="platform-tab flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2.5 rounded-xl text-[10px] sm:text-sm font-bold transition-all text-slate-500 dark:text-slate-400" data-val="telegram">
              <i class="fab fa-telegram text-lg"></i>
              <span>Telegram</span>
            </button>
            <button type="button" class="platform-tab flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2.5 rounded-xl text-[10px] sm:text-sm font-bold transition-all text-slate-500 dark:text-slate-400" data-val="gmail">
              <i class="fas fa-envelope text-lg"></i>
              <span>Gmail</span>
            </button>
          </div>

          <!-- Submit Button -->
          <button type="submit" id="main-submit-btn" class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 active:scale-95">
            <i id="submit-icon" class="fab fa-whatsapp text-xl"></i>
            <span id="submit-text">${t.orderForm.submitWhatsApp}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
`;
