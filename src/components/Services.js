export const ServiceCard = ({ title, iconColor, features, svgPath }) => `
  <div class="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-700">
    <!-- Hover Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-${iconColor}-50/50 to-transparent dark:from-${iconColor}-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div class="relative z-10 flex flex-col items-center text-center">
        <!-- Icon -->
        <div class="w-20 h-20 bg-${iconColor}-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-${iconColor}-200/50">
        <svg class="w-10 h-10 text-${iconColor}-600 dark:text-${iconColor}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${svgPath}"></path>
        </svg>
        </div>

        <!-- Title -->
        <h3 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-${iconColor}-600 dark:group-hover:text-${iconColor}-400 transition-colors">
            ${title}
        </h3>

        <!-- divider -->
        <div class="w-12 h-1 bg-slate-100 dark:bg-slate-700 rounded-full mb-6 group-hover:w-24 group-hover:bg-${iconColor}-200 dark:group-hover:bg-${iconColor}-800 transition-all duration-500"></div>

        <!-- Features List -->
        <ul class="w-full space-y-3 text-right rtl:text-right ltr:text-left">
        ${features.map(feature => `
            <li class="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-medium bg-slate-50 dark:bg-slate-700/30 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-600">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-${iconColor}-100 dark:bg-${iconColor}-900/30 flex items-center justify-center text-${iconColor}-600 dark:text-${iconColor}-400 text-xs">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </span>
            ${feature}
            </li>
        `).join('')}
        </ul>
    </div>
  </div>
`;

export const Services = (t) => `
  <section class="max-w-7xl mx-auto px-6 pb-16 pt-20 transition-colors duration-300">
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">${t.servicesTitle}</h2>
      <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">${t.servicesDesc}</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      ${t.serviceItems.map(item => ServiceCard({ ...item, iconColor: 'primary' })).join('')}
    </div>
  </section>
`;
