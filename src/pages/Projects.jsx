import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ProjectFilter from '../components/ProjectFilter';
import ProjectGrid from '../components/ProjectGrid';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function Projects() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.filterCategories.includes(activeCategory);
      if (!matchesCategory) return false;
      if (!query) return true;
      const haystack = [
        project.title[lang],
        project.description[lang],
        project.category[lang],
        project.platform,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [activeCategory, searchTerm, lang]);

  const hasFilters = activeCategory !== 'all' || searchTerm.trim() !== '';

  return (
    <>
      <SEO title={t.meta.projects.title} description={t.meta.projects.description} />

      <PageHero eyebrow={t.projectsPage.eyebrow} title={t.projectsPage.title} description={t.projectsPage.description}>
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </PageHero>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectGrid projects={filteredProjects} />
          {filteredProjects.length === 0 && hasFilters && (
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
              >
                {t.projectsPage.resetFilters}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
