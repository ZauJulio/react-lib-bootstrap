import type React from 'react';

import styles from './index.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`${className || ''} ${styles.button}`} {...props}>
      {children}
    </button>
  );
}
