import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-2"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-balance text-4xl font-semibold text-ink sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-pretty text-lg leading-relaxed text-ink-muted"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
