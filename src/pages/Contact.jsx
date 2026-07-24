import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import { FacebookIcon } from '../components/icons/BrandIcons';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';

const initialForm = { name: '', email: '', company: '', service: '', message: '' };

const socialLinks = [{ key: 'facebook', href: siteConfig.social.facebook, icon: FacebookIcon, label: 'Facebook' }];

export default function Contact() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState(initialForm);

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // This site is fully static (no backend/database), so the form currently
  // opens the visitor's email client with the details pre-filled. To wire up
  // a real submission service later (Formspree, EmailJS, etc.), replace this
  // handler with a fetch/POST call — the form fields and their `name`
  // attributes below are already structured for that swap.
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceLabel = form.service
      ? (services.find((s) => s.id === form.service)?.title[lang] ?? t.contact.form.serviceOther)
      : '';

    const subject = `New project inquiry — ${form.name || form.company || 'AspireTechEg website'}`;
    const bodyLines = [
      `${t.contact.form.name}: ${form.name}`,
      `${t.contact.form.email}: ${form.email}`,
      form.company && `${t.contact.form.company}: ${form.company}`,
      serviceLabel && `${t.contact.form.service}: ${serviceLabel}`,
      '',
      form.message,
    ].filter(Boolean);

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  return (
    <>
      <SEO title={t.meta.contact.title} description={t.meta.contact.description} />

      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-surface p-6 sm:p-10" noValidate>
            <h2 className="text-xl font-semibold text-ink">{t.contact.formTitle}</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  {t.contact.form.name} <span className="text-accent-2">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder={t.contact.form.namePlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  {t.contact.form.email} <span className="text-accent-2">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  dir="ltr"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="text-sm font-medium text-ink">
                  {t.contact.form.company}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange('company')}
                  placeholder={t.contact.form.companyPlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-medium text-ink">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange('service')}
                  className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                >
                  <option value="">{t.contact.form.servicePlaceholder}</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title[lang]}
                    </option>
                  ))}
                  <option value="other">{t.contact.form.serviceOther}</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                {t.contact.form.message} <span className="text-accent-2">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange('message')}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" icon={Send} className="sm:shrink-0">
                {t.contact.form.submit}
              </Button>
              <p className="text-xs leading-relaxed text-ink-faint">{t.contact.form.submitNote}</p>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {t.contact.directTitle}
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-ink-faint">{t.contact.direct.emailLabel}</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-ink hover:text-accent-2">
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-ink-faint">{t.contact.direct.phoneLabel}</p>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      dir="ltr"
                      className="text-sm font-medium text-ink hover:text-accent-2"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-2" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-ink-faint">{t.contact.direct.locationLabel}</p>
                    <p className="text-sm font-medium text-ink">{siteConfig.location[lang]}</p>
                  </div>
                </li>
              </ul>

              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {t.contact.socialTitle}
              </h2>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ key, href, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {t.contact.responseTitle}
              </h2>
              <ol className="mt-5 space-y-4">
                {t.contact.responseSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mono flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-semibold text-accent-2">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-muted">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
