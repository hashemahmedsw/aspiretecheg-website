import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index = 0 }) {
  const { lang, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="h-full"
    >
      <Link
        to={`/${lang}/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover"
      >
        <div className="relative">
          <ProjectVisual project={project} />
          {project.featured && (
            <span className="absolute top-3 start-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-medium text-accent-2 backdrop-blur">
              {t.common.featured}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <p className="mono text-xs uppercase tracking-wider text-ink-faint">{project.category[lang]}</p>
            <h3 className="mt-1.5 text-lg font-semibold text-ink">{project.title[lang]}</h3>
          </div>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2 rtl:-scale-x-100"
            aria-hidden="true"
          />
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-2">{project.description[lang]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-muted">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full border border-border px-2.5 py-1 text-xs text-ink-faint">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
