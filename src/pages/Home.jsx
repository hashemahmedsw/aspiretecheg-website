import { Code2, Globe, ShoppingBag, Workflow, Wrench, ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import HeroVisual from '../components/HeroVisual';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { featuredProjects } from '../data/projects';

const trustIcons = [Code2, Globe, ShoppingBag, Workflow, Wrench];

const techs = ['React', 'Node.js', 'Shopify', 'WordPress', 'Electron', 'Python', 'PHP', 'Automation', 'Selenium', 'Tailwind CSS'];

function TechMarquee({ label }) {
  return (
    <div className="mt-16">
      <p className="mono text-center text-xs uppercase tracking-[0.2em] text-ink-faint">{label}</p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-10">
          {[...techs, ...techs].map((tech, i) => (
            <span key={`${tech}-${i}`} className="mono shrink-0 text-sm text-ink-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { lang, t } = useLanguage();
  const [before, after] = t.hero.title.includes(t.hero.highlight)
    ? t.hero.title.split(t.hero.highlight)
    : [t.hero.title, ''];

  return (
    <>
      <SEO title={t.meta.home.title} description={t.meta.home.description} />

      {/* Hero */}
      <section className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-start">
            <span className="mono inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent-2">
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {before}
              <span className="text-gradient">{t.hero.highlight}</span>
              {after}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted lg:mx-0">
              {t.hero.description}
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button to={`/${lang}/contact`} size="lg" icon={ArrowRight}>
                {t.hero.ctaPrimary}
              </Button>
              <Button to={`/${lang}/projects`} variant="secondary" size="lg" icon={Compass}>
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
        <TechMarquee label={t.hero.marqueeLabel} />
      </section>

      {/* Trust / capabilities */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.trust.eyebrow} title={t.trust.title} description={t.trust.description} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.trust.items.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-accent-2">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.servicesSection.eyebrow}
            title={t.servicesSection.title}
            description={t.servicesSection.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to={`/${lang}/services`} variant="secondary" icon={ArrowRight}>
              {t.servicesSection.viewAll}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.featuredProjects.eyebrow}
            title={t.featuredProjects.title}
            description={t.featuredProjects.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to={`/${lang}/projects`} variant="secondary" icon={ArrowRight}>
              {t.featuredProjects.viewAll}
            </Button>
          </div>
        </div>
      </section>

      <CTASection title={t.about.ctaTitle} description={t.about.ctaDescription} buttonLabel={t.hero.ctaPrimary} />
    </>
  );
}
