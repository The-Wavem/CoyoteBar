import React from 'react';
import styles from './Card.module.css';

export default function Card({
  children,
  variant = 'default',
  hoverable = true,
  className = '',
  style = {},
  ...props
}) {
  const combinedClassName = `
    ${styles.card}
    ${hoverable ? styles.hoverable : ''}
    ${styles[variant] || ''}
    ${className}
  `.trim();

  return (
    <div className={combinedClassName} style={style} {...props}>
      {children}
    </div>
  );
}
