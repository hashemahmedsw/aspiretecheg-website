import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceCard({ service, index = 0, detailed = false }) {
  const { lang } = useLanguage();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover sm:p-7"
    >
      <div className="absolute -top-10 end-[-15%] h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/15" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold text-ink">{service.title[lang]}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
        {detailed ? service.longDescription[lang] : service.description[lang]}
      </p>
    </motion.div>
  );
}
