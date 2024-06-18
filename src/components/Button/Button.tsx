import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonVariant = 'primary';

interface ButtonProps extends ComponentProps<'button'> {
  loading?: boolean;
  children: ReactNode;
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, loading, className, ...props }, ref) => {
    return (
      <button className={clsx(styles.button, styles[variant], className)} {...props} ref={ref}>
        {loading ? <>Loading</> : <>{children}</>}
      </button>
    );
  }
);
