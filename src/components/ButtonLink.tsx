import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';

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
    'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 shadow-lg shadow-ink-900/20',
  outline:
    'border-2 border-ink-200 text-ink-900 hover:border-ink-900 hover:bg-ink-50',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
  light:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md',
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
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </Link>
  );
}
