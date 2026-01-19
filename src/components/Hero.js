export const Hero = (t) => `
  <header class="relative overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center justify-center border-b border-white/10">
    <!-- Background Effects: Simplified on mobile to prevent lag -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob hidden md:block"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 hidden md:block"></div>
      <div class="absolute -bottom-32 left-20 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 hidden md:block"></div>
      
      <!-- Static fallback for mobile -->
      <div class="absolute inset-0 bg-primary-900/10 md:hidden"></div>
      
      <div class="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <div class="mb-12 cursor-pointer group/title" onclick="window.location.reload()">
        <h1 class="text-7xl md:text-[12rem] font-black tracking-tighter mb-4 text-primary-500 drop-shadow-2xl leading-none transition-all duration-500 will-change-transform group-hover:scale-[1.02]">
          ${t.heroTitle}
        </h1>
        <div class="h-2 w-32 bg-primary-500 mx-auto rounded-full shadow-[0_0_20px_rgba(var(--color-primary-500),0.5)] transition-all duration-500 group-hover:w-48"></div>
      </div>
      
      <p class="text-lg md:text-2xl mb-12 text-slate-300 leading-relaxed max-w-3xl mx-auto">
        ${t.heroSubtitle}
      </p>
      
      <div class="flex flex-wrap justify-center gap-6">
        <button id="hero-cta" class="group relative px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 overflow-hidden">
          <span class="relative z-10">${t.cta}</span>
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-primary-600/50"></div>
        </button>
      </div>
    </div>
  </header>
`;
