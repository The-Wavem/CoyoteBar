import React from 'react';
import styles from './Badge.module.css';

export default function Badge({
  children,
  variant = 'amber',
  icon = null,
  className = '',
  ...props
}) {
  const combinedClassName = `${styles.badge} ${styles[variant] || styles.amber} ${className}`.trim();

  return (
    <span className={combinedClassName} {...props}>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </span>
  );
}
