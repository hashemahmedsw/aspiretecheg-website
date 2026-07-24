import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      <SEO title={t.meta.services.title} description={t.meta.services.description} />

      <PageHero eyebrow={t.servicesPage.eyebrow} title={t.servicesPage.title} description={t.servicesPage.description} />

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t.servicesPage.processTitle} />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.servicesPage.process.map((step, index) => (
              <div key={step.title} className="relative">
                <span className="mono text-4xl font-semibold text-border-strong">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.about.ctaTitle} description={t.about.ctaDescription} buttonLabel={t.hero.ctaPrimary} />
    </>
  );
}
