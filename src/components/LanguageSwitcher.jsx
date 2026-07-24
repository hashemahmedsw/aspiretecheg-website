import { Link, useLocation } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, t, localizePath } = useLanguage();
  const location = useLocation();
  const targetLang = lang === 'en' ? 'ar' : 'en';
  const targetPath = localizePath(location.pathname, targetLang) + location.search;

  return (
    <Link
      to={targetPath}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-border-strong hover:text-ink ${className}`}
      aria-label={`${t.languageSwitcher.label}: ${targetLang === 'en' ? 'English' : 'العربية'}`}
      hrefLang={targetLang}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{targetLang === 'en' ? 'EN' : 'ع'}</span>
    </Link>
  );
}
