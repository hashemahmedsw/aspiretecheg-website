import { SearchX } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectGrid({ projects, emptyTitle, emptyDescription }) {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-dashed border-border py-16 text-center">
        <SearchX className="mx-auto h-8 w-8 text-ink-faint" aria-hidden="true" />
        <p className="mt-4 text-lg font-medium text-ink">{emptyTitle ?? t.projectsPage.emptyTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">{emptyDescription ?? t.projectsPage.emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
