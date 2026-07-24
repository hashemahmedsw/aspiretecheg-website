/**
 * Fixed, full-viewport decorative backdrop: a faint grid plus a few soft,
 * slowly-floating color blobs. Purely presentational (aria-hidden) and
 * respects prefers-reduced-motion via the global animation override in
 * index.css.
 */
export default function AnimatedBackground({ variant = 'default' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 start-[10%] h-96 w-96 rounded-full bg-accent/25 blur-[130px] animate-float-slow" />
      <div className="absolute top-1/3 end-[5%] h-80 w-80 rounded-full bg-accent-2/20 blur-[120px] animate-float" />
      {variant === 'default' && (
        <div className="absolute bottom-[-10%] start-1/4 h-72 w-72 rounded-full bg-accent-warm/10 blur-[110px] animate-float-slow" />
      )}
      <div className="absolute inset-0 bg-radial-fade" />
    </div>
  );
}
