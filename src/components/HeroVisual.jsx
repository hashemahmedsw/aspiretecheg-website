import { motion } from 'framer-motion';
import { Zap, ShieldCheck } from 'lucide-react';

/**
 * Custom, code-editor-style visual for the hero — built entirely from CSS
 * and a few floating badges rather than a stock photo or product screenshot.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass relative rounded-2xl p-1 shadow-2xl shadow-black/40"
      >
        <div className="rounded-xl bg-bg-elevated">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="mono ms-3 text-xs text-ink-faint">solution.ts</span>
          </div>
          <div className="mono space-y-3 px-5 py-6 text-[13px] leading-relaxed">
            <p>
              <span className="text-accent-2">const</span> <span className="text-ink">problem</span> ={' '}
              <span className="text-amber-300">"your business"</span>;
            </p>
            <p>
              <span className="text-accent-2">const</span> <span className="text-ink">solution</span> ={' '}
              <span className="text-accent-soft">engineer</span>
              <span className="text-ink-faint">(problem);</span>
            </p>
            <div className="h-2 w-5/6 rounded-full bg-white/10" />
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <p>
              <span className="text-accent-2">await</span> <span className="text-ink">solution</span>
              <span className="text-ink-faint">.</span>
              <span className="text-accent-soft">ship</span>
              <span className="text-ink-faint">();</span>
            </p>
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
            <p className="text-emerald-300">✓ Deployed to production</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass animate-float absolute -top-6 -start-6 hidden items-center gap-2 rounded-xl px-4 py-3 sm:flex"
      >
        <Zap className="h-4 w-4 text-accent-warm" aria-hidden="true" />
        <span className="text-xs font-medium text-ink">Automation-ready</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="glass animate-float-slow absolute -bottom-6 -end-4 hidden items-center gap-2 rounded-xl px-4 py-3 sm:flex"
      >
        <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
        <span className="text-xs font-medium text-ink">Production-grade</span>
      </motion.div>
    </div>
  );
}
