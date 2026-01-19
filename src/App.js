import { translations } from "./data/translations.js";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Services } from "./components/Services.js";
import { Footer } from "./components/Footer.js";
import { OrderModal } from "./components/OrderModal.js";
import { ScrollToTop } from "./components/ScrollToTop.js";

export default function App(lang = 'ar') {
  const t = translations[lang] || translations['ar'];

  // Set direction
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;

  return `
    <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      ${Navbar(t)}
      ${Hero(t)}
      ${Services(t)}
      ${Footer(t)}
      ${OrderModal(t)}
      ${ScrollToTop()}
    </div>
  `;
}