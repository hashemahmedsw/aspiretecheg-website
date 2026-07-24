import { createContext, useContext, useEffect, useMemo } from 'react';
import { useParams, useLocation, Navigate, Outlet } from 'react-router-dom';
import en from '../data/translations/en';
import ar from '../data/translations/ar';

export const SUPPORTED_LANGUAGES = ['en', 'ar'];
export const DEFAULT_LANGUAGE = 'en';

const translations = { en, ar };
const directions = { en: 'ltr', ar: 'rtl' };

const LanguageContext = createContext(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

/**
 * Swaps the leading /:lang segment of a path for another language, keeping
 * the rest of the route intact. Falls back to prefixing the language when
 * the path has none, so it also works for links built from a bare path.
 */
export function localizePath(pathname, lang) {
  const segments = pathname.split('/').filter(Boolean);
  if (SUPPORTED_LANGUAGES.includes(segments[0])) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  return '/' + segments.join('/');
}

export function LanguageProvider() {
  const { lang } = useParams();
  const location = useLocation();

  const isValid = SUPPORTED_LANGUAGES.includes(lang);
  const activeLang = isValid ? lang : DEFAULT_LANGUAGE;
  const dir = directions[activeLang];
  const t = translations[activeLang];
  const otherLang = activeLang === 'en' ? 'ar' : 'en';

  useEffect(() => {
    document.documentElement.lang = activeLang;
    document.documentElement.dir = dir;
  }, [activeLang, dir]);

  const value = useMemo(
    () => ({
      lang: activeLang,
      dir,
      t,
      otherLang,
      localizePath: (path, targetLang = activeLang) => localizePath(path, targetLang),
    }),
    [activeLang, dir, t, otherLang]
  );

  if (!isValid) {
    return <Navigate to={localizePath(location.pathname, DEFAULT_LANGUAGE) + location.search} replace />;
  }

  return (
    <LanguageContext.Provider value={value}>
      <Outlet />
    </LanguageContext.Provider>
  );
}
