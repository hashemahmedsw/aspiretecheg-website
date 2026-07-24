/**
 * Project visual shown on cards and the detail page. When the project has a
 * real screenshot (`project.image`), it renders inside a consistent
 * "browser window" frame. Otherwise it falls back to a custom CSS/gradient
 * mockup built from the project's icon + gradient — used for projects that
 * don't have a public screenshot yet (e.g. a password-protected pre-launch
 * store), and easy to swap for a real screenshot later.
 */
export default function ProjectVisual({ project, size = 'card', alt = '' }) {
  const Icon = project.icon;
  const isDetail = size === 'detail';
  const height = isDetail ? 'h-72 sm:h-96' : 'h-44 sm:h-48';

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface ${height}`}>
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-white/5 bg-black/30 px-4 py-3 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        {project.websiteUrl && (
          <span className="mono ms-2 truncate text-xs text-ink-faint">
            {project.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        )}
      </div>

      {project.image ? (
        <div className="absolute inset-0 top-10 overflow-hidden">
          <img src={project.image} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-[0_0_70px_-12px_rgba(109,91,255,0.7)] ${
                isDetail ? 'h-24 w-24 sm:h-28 sm:w-28' : 'h-16 w-16'
              }`}
            >
              <Icon className={isDetail ? 'h-12 w-12 text-white sm:h-14 sm:w-14' : 'h-8 w-8 text-white'} aria-hidden="true" />
            </div>
          </div>
          <div className="absolute bottom-4 start-4 end-4 space-y-1.5 opacity-30">
            <div className="h-1.5 w-2/3 rounded-full bg-white/40" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/30" />
          </div>
        </>
      )}

      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.gradient}`} />
    </div>
  );
}
