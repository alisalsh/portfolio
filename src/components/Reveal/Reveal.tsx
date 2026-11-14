import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};