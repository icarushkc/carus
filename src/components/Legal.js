import { legalContent } from "../data/legal.js";

export const Legal = (type = 'terms') => {
    const content = legalContent[type] || legalContent['terms'];

    return `
        <div class="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6">
            <div class="max-w-3xl mx-auto">
                <!-- Back Button -->
                <a href="#" class="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold mb-10 hover:gap-3 transition-all underline decoration-2 underline-offset-4">
                    <svg class="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Home
                </a>

                <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700">
                    <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 line-clamp-2">
                        ${content.title}
                    </h1>
                    <p class="text-slate-400 text-sm mb-12">Last updated: ${content.lastUpdated}</p>

                    <div class="space-y-10">
                        ${content.sections.map(section => `
                            <section>
                                <h2 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">${section.heading}</h2>
                                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    ${section.content}
                                </p>
                            </section>
                        `).join('')}
                    </div>
                </div>

                <div class="mt-12 text-center text-slate-400 text-sm">
                    © 2026 carus. All rights reserved.
                </div>
            </div>
        </div>
    `;
};
