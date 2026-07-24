import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import Button from '../Button';

const navItems = [
  { key: 'home', segment: '' },
  { key: 'services', segment: 'services' },
  { key: 'projects', segment: 'projects' },
  { key: 'about', segment: 'about' },
  { key: 'contact', segment: 'contact' },
];

export default function Header() {
  const { lang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const buildPath = (segment) => (segment ? `/${lang}/${segment}` : `/${lang}`);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
        solid ? 'border-b border-border bg-bg/80 py-3 backdrop-blur-xl' : 'border-b border-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={buildPath('')} className="flex shrink-0 items-center gap-2 text-lg font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-heading text-sm font-bold text-white">
            A
          </span>
          <span className="font-heading">
            AspireTech<span className="text-accent-2">Eg</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={buildPath(item.segment)}
              end={item.segment === ''}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button to={buildPath('contact')} size="md">
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex items-center justify-center rounded-full border border-border p-2.5 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-0 flex flex-col bg-bg lg:hidden"
          >
            <nav
              className="flex flex-1 flex-col items-center justify-center gap-2 px-6 pb-16 pt-24"
              aria-label="Mobile"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * index }}
                >
                  <NavLink
                    to={buildPath(item.segment)}
                    end={item.segment === ''}
                    className={({ isActive }) =>
                      `block rounded-xl px-6 py-3 text-center text-2xl font-semibold transition-colors ${
                        isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[item.key]}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * navItems.length }}
                className="mt-8 flex w-full max-w-xs flex-col items-center gap-4"
              >
                <LanguageSwitcher />
                <Button to={buildPath('contact')} className="w-full" onClick={() => setOpen(false)}>
                  {t.nav.cta}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
