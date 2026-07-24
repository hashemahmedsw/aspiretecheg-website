const styles = {
  Shopify: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  WordPress: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  Custom: 'border-accent/30 bg-accent/10 text-accent-soft',
};

export default function PlatformBadge({ platform, className = '' }) {
  if (!platform) return null;

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-medium ${styles[platform] ?? styles.Custom} ${className}`}
    >
      {platform}
    </span>
  );
}
