export const ScrollToTop = () => `
  <button id="scroll-to-top" class="fixed bottom-8 right-8 z-[90] p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl shadow-2xl shadow-primary-500/20 transform translate-y-24 opacity-0 pointer-events-none transition-all duration-500 group active:scale-90">
    <!-- Glow Effect -->
    <div class="absolute inset-0 bg-primary-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>
    
    <svg class="w-6 h-6 relative z-10 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </button>
`;
