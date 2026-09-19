import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  to = null,
  href = null,
  target = null,
  rel = null,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) {
  const combinedClassName = `${styles.button} ${styles[variant] || styles.primary} ${styles[size] || styles.md} ${className}`.trim();

  const content = (
    <>
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClassName}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
