import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';
import { getGoogleFormUrl, hasGoogleForm } from '@/config/forms';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const variantClasses: Record<string, string> = {
  primary:
    'cta-shine bg-ink-900 text-white hover:bg-ink-800 shadow-lg shadow-ink-900/15',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800',
  outline:
    'border border-ink-300 text-ink-900 hover:border-ink-900 hover:bg-ink-50',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
  light: 'text-white border border-white/30 hover:bg-white/10',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
}: ButtonLinkProps) {
  if (to === '/apply' || to === '/contact') {
    const formType = to === '/apply' ? 'apply' : 'enquiry';
    const url = getGoogleFormUrl(formType);
    const content = <>{Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}{children}{Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}</>;
    const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return hasGoogleForm(formType) ? <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a> : <span className={`${classes} cursor-not-allowed opacity-70`} title="Form link pending configuration">{content}</span>;
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </Link>
  );
}
