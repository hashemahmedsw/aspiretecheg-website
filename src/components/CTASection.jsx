import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function CTASection({ title, description, buttonLabel, to }) {
  const { lang } = useLanguage();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
          {description && <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-ink-muted">{description}</p>}
          <div className="mt-8">
            <Button to={to ?? `/${lang}/contact`} size="lg" icon={ArrowRight}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
