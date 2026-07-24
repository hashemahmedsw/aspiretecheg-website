import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ProjectVisual from '../components/ProjectVisual';
import CTASection from '../components/CTASection';
import { getProjectBySlug, projects } from '../data/projects';

export default function ProjectDetail() {
  const { lang, t } = useLanguage();
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to={`/${lang}/projects`} replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SEO
        title={`${project.title[lang]} | ${t.meta.projects.title}`}
        description={project.description[lang]}
      />

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Button to={`/${lang}/projects`} variant="ghost" size="md" icon={ArrowLeft} iconPosition="start" className="!px-0">
            {t.projectDetail.backToProjects}
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <p className="mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
              {project.category[lang]}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold text-ink sm:text-5xl">{project.title[lang]}</h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
              {project.description[lang]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10"
          >
            <ProjectVisual project={project} size="detail" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-ink">{t.projectDetail.overview}</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">{project.overview[lang]}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-ink">{t.projectDetail.challenge}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.challenge[lang]}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink">{t.projectDetail.solution}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.solution[lang]}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-ink">{t.projectDetail.keyFeatures}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature[lang]} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-ink-muted">{feature[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.results && (
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-lg font-semibold text-ink">{t.projectDetail.results}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.results[lang]}</p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {t.projectDetail.technologies}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-3 py-1.5 text-xs text-ink-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {t.projectDetail.nextProject}
              </h2>
              <Button
                to={`/${lang}/projects/${nextProject.slug}`}
                variant="ghost"
                className="mt-3 !px-0 text-base font-semibold text-ink"
              >
                {nextProject.title[lang]}
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={t.projectDetail.ctaTitle}
        description={t.projectDetail.ctaDescription}
        buttonLabel={t.projectDetail.ctaButton}
      />
    </>
  );
}
