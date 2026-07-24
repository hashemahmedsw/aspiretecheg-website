import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FacebookIcon } from "../icons/BrandIcons";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../data/siteConfig";

const companyLinks = [
  { key: "about", segment: "about" },
  { key: "services", segment: "services" },
  { key: "projects", segment: "projects" },
  { key: "contact", segment: "contact" },
];

const socialLinks = [
  {
    key: "facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
    label: "Facebook",
  },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const buildPath = (segment) => (segment ? `/${lang}/${segment}` : `/${lang}`);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              to={buildPath("")}
              className="inline-flex items-center gap-2 text-lg font-semibold text-ink"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-heading text-sm font-bold text-white">
                A
              </span>
              <span className="font-heading">
                AspireTech<span className="text-accent-2">Eg</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ key, href, icon: Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noreferrer"}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t.footer.companyHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={buildPath(item.segment)}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t.footer.contactHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-ink"
                  dir="ltr"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
