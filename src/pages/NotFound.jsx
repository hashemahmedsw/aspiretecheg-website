import { Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  const { lang, t } = useLanguage();

  return (
    <>
      <SEO title={t.meta.notFound.title} description={t.meta.notFound.description} />
      <section className="flex min-h-[60vh] items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <p className="mono text-6xl font-semibold text-gradient">{t.notFound.title}</p>
          <h1 className="mt-6 text-2xl font-semibold text-ink">{t.notFound.heading}</h1>
          <p className="mt-3 leading-relaxed text-ink-muted">{t.notFound.description}</p>
          <div className="mt-8">
            <Button to={`/${lang}`} icon={Home} iconPosition="start">
              {t.notFound.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
