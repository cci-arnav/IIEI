import { ArrowRight, ExternalLink } from 'lucide-react';
import { getGoogleFormUrl, hasGoogleForm } from '@/config/forms';

interface FormLinkProps {
  type: 'apply' | 'enquiry';
  children: React.ReactNode;
  className?: string;
  icon?: 'arrow' | 'external';
}

export default function FormLink({ type, children, className = '', icon = 'arrow' }: FormLinkProps) {
  const url = getGoogleFormUrl(type);
  const available = hasGoogleForm(type);
  const Icon = icon === 'external' ? ExternalLink : ArrowRight;

  if (!available) {
    if (import.meta.env.DEV) {
      console.warn(`FormLink: No URL configured for ${type}. Set VITE_GOOGLE_FORM_${type.toUpperCase()}_URL in .env`);
    }
    return (
      <span className={`${className} cursor-not-allowed opacity-70`} title="Form link pending configuration">
        {children}
      </span>
    );
  }

  // In dev mode with placeholder URL, still make it clickable but warn
  const isDevPlaceholder = import.meta.env.DEV && url.includes('DEV_MODE_NO_URL_SET');
  if (isDevPlaceholder) {
    if (import.meta.env.DEV) {
      console.warn(`FormLink: Using placeholder URL for ${type}. Set actual URL in .env`);
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`${className} opacity-70`}>
        {children}
        <Icon className="h-4 w-4" />
      </a>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <Icon className="h-4 w-4" />
    </a>
  );
}
