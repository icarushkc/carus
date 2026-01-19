// Auto-reload test comment
import { contactInfo } from "../data/translations.js";

export const Footer = (t) => `
  <footer class="bg-slate-900 dark:bg-black border-t-4 border-primary-600 relative overflow-hidden pt-20 pb-10 text-slate-300">
    <!-- Footer Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-slate-900 dark:to-black pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
        <!-- Brand & Bio -->
        <div>
          <h3 class="text-3xl font-black text-white mb-6 tracking-tight">${t.name}</h3>
          <p class="text-slate-400 leading-relaxed max-w-sm mb-6">
            ${t.footerDesc}
          </p>
          <div class="space-y-4">
            <h4 class="text-white font-bold text-sm uppercase tracking-wider">${t.followMe}</h4>
            <div class="flex flex-wrap items-center gap-4">
              <a href="https://www.tiktok.com/@carus_7480?is_from_webapp=1&sender_device=pc" target="_blank" class="flex items-center gap-2 text-primary-400 hover:text-white transition-colors group text-sm w-fit">
                <span class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center group-hover:bg-primary-600 transition-all">
                  <i class="fab fa-tiktok"></i>
                </span>
                ${t.tiktok}
              </a>
              <a href="https://www.instagram.com/carus8074/" target="_blank" class="flex items-center gap-2 text-primary-400 hover:text-white transition-colors group text-sm w-fit">
                <span class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center group-hover:bg-primary-600 transition-all">
                  <i class="fab fa-instagram"></i>
                </span>
                ${t.instagram}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Quick Links (Now Legal) & Contact -->
        <div class="grid grid-cols-2 gap-8">
            <!-- Legal Section -->
            <div>
              <h4 class="text-white font-bold text-lg mb-6 relative inline-block">
                ${t.legal}
                <span class="absolute -bottom-2 rtl:right-0 ltr:left-0 w-1/2 h-1 bg-primary-600 rounded-full"></span>
              </h4>
              <ul class="space-y-4">
                <li><a href="#/terms" class="hover:text-primary-400 transition-colors flex items-center gap-2 text-sm w-fit"><span class="text-primary-600">›</span> ${t.terms}</a></li>
                <li><a href="#/cookies" class="hover:text-primary-400 transition-colors flex items-center gap-2 text-sm w-fit"><span class="text-primary-600">›</span> ${t.cookies}</a></li>
              </ul>
            </div>

            <!-- Contact Section -->
            <div>
              <h4 class="text-white font-bold text-lg mb-6 relative inline-block">
                ${t.contact}
                <span class="absolute -bottom-2 rtl:right-0 ltr:left-0 w-1/2 h-1 bg-primary-600 rounded-full"></span>
              </h4>
              <ul class="space-y-4">
                <li class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-primary-400 text-sm">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}" target="_blank" rel="noopener noreferrer" class="text-sm cursor-pointer hover:text-white transition-colors underline decoration-primary-600/30 underline-offset-4 decoration-2">
                    ${t.language === 'ar' ? 'جيميل' : 'Gmail'}
                  </a>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-primary-400 text-sm">
                    <i class="fab fa-whatsapp"></i>
                  </span>
                  <a href="https://wa.me/96176151680" target="_blank" class="text-sm cursor-pointer hover:text-white transition-colors underline decoration-primary-600/30 underline-offset-4 decoration-2">
                    ${t.language === 'ar' ? 'واتسأب' : (t.language === 'fr' ? 'WhatsApp' : 'WhatsApp')}
                  </a>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center text-primary-400 text-sm">
                    <i class="fab fa-telegram"></i>
                  </span>
                  <a href="https://t.me/+96176151680" target="_blank" class="text-sm cursor-pointer hover:text-white transition-colors underline decoration-primary-600/30 underline-offset-4 decoration-2">
                    ${t.language === 'ar' ? 'تليجرام' : 'Telegram'}
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      
      <div class="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        <p>© 2026 ${t.name}. ${t.rights}</p>
      </div>
    </div>
  </footer>
`;
