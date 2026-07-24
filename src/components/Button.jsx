import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

const variants = {
  primary:
    'bg-accent text-white shadow-[0_8px_24px_-8px_rgba(109,91,255,0.6)] hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgba(109,91,255,0.75)]',
  secondary: 'glass text-ink hover:border-border-strong hover:-translate-y-0.5 hover:bg-surface-hover',
  ghost: 'text-ink-muted hover:text-ink',
};

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

/**
 * Renders a <Link>, <a>, or <button> depending on which of `to` / `href` is
 * passed, so call sites never have to branch on element type themselves.
 */
const Button = forwardRef(function Button(
  { to, href, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'end', className = '', children, ...props },
  ref
) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === 'start' && <Icon className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button ref={ref} type={props.type || 'button'} className={classes} {...props}>
      {content}
    </button>
  );
});

export default Button;
