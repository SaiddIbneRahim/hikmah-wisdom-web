
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';
import { ArrowRight } from 'lucide-react';

interface SchoolButtonProps extends ButtonProps {
  to?: string;
  href?: string;
  withArrow?: boolean;
}

const SchoolButton = React.forwardRef<HTMLButtonElement, SchoolButtonProps>(
  ({ className, children, to, href, withArrow, ...props }, ref) => {
    const buttonContent = (
      <>
        {children} 
        {withArrow && (
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        )}
      </>
    );

    const buttonClasses = cn(
      'group',
      className
    );

    if (to) {
      return (
        <Button className={buttonClasses} asChild {...props}>
          <Link to={to} ref={ref as any}>{buttonContent}</Link>
        </Button>
      );
    }

    if (href) {
      return (
        <Button className={buttonClasses} asChild {...props}>
          <a href={href} ref={ref as any}>{buttonContent}</a>
        </Button>
      );
    }

    return (
      <Button className={buttonClasses} ref={ref} {...props}>
        {buttonContent}
      </Button>
    );
  }
);

SchoolButton.displayName = 'SchoolButton';

export { SchoolButton };
