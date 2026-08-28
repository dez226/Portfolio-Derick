import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ExperienceAndEducation from './components/Experience'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on layout
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tighter">
            Derick<span className="text-brand-accent">.</span>
          </a>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-muted hover:text-brand-accent'}`}
                  >
                    {link.name}
                  </a>
                )
              })}
              <a 
                href="#contact"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeSection === 'contact' ? 'bg-brand-accent text-white' : 'bg-brand-accent/10 text-brand-accent hover:bg-brand-accent hover:text-white'}`}
              >
                Contact
              </a>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-brand-accent/10 text-brand-muted hover:text-brand-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <CustomCursor />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceAndEducation />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-brand-border text-brand-muted text-sm">
        <p>© {new Date().getFullYear()} Derick Pooda. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default App

