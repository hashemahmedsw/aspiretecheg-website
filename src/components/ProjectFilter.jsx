import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projectCategories } from '../data/projects';

export default function ProjectFilter({ activeCategory, onCategoryChange, searchTerm, onSearchChange }) {
  const { lang, t } = useLanguage();

  return (
    <div className="flex flex-col gap-6">
      <div className="relative mx-auto w-full max-w-md">
        <Search
          className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
          aria-hidden="true"
        />
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.projectsPage.searchPlaceholder}
          aria-label={t.projectsPage.searchLabel}
          className="w-full rounded-full border border-border bg-surface py-3 ps-11 pe-4 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label={t.projectsPage.filterLabel}>
        {projectCategories.map((cat) => {
          const active = activeCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onCategoryChange(cat.slug)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'border-accent bg-accent text-white'
                  : 'border-border text-ink-muted hover:border-border-strong hover:text-ink'
              }`}
            >
              {cat.label[lang]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
