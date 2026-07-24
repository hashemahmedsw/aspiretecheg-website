export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="mono inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">{description}</p>}
    </div>
  );
}
