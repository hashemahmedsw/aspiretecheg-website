import { Target, Compass, Gem, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const pillarIcons = [Target, Compass, Gem, Rocket];

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    { title: t.about.missionTitle, body: t.about.mission },
    { title: t.about.mindsetTitle, body: t.about.mindset },
    { title: t.about.qualityTitle, body: t.about.quality },
    { title: t.about.visionTitle, body: t.about.vision },
  ];

  return (
    <>
      <SEO title={t.meta.about.title} description={t.meta.about.description} />

      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.intro} />

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">{pillar.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t.about.journeyTitle} />
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="absolute inset-x-0 top-5 hidden h-px bg-border lg:block"
              aria-hidden="true"
            />
            {t.about.journey.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-bg-elevated font-heading text-sm font-semibold text-accent-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t.about.valuesTitle} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.about.ctaTitle} description={t.about.ctaDescription} buttonLabel={t.hero.ctaPrimary} />
    </>
  );
}
