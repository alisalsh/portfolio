import type { ReactNode, CSSProperties } from 'react';
import styles from './Square.module.css';

interface SquareProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
  cursorType?: 'card' | 'cv' | 'default';
  svgSize?: string;
  svgSizeMobile?: string; // Новый пропс для мобилки
  svgOffsetY?: string;
  svgOffsetX?: string;
}

export const Square = ({ 
  children, 
  theme = 'light', 
  className = '',
  cursorType = 'card',
  svgSize = '80px',
  svgSizeMobile,
  svgOffsetY = '-8%', 
  svgOffsetX = '-8%'  
}: SquareProps) => {
  
  const squareClasses = [
    styles.square,
    styles[theme],
    className
  ].join(' ');

  return (
    <div 
      className={squareClasses} 
      data-cursor={cursorType}
      data-theme={theme}
      style={{ 
        '--my-svg-size': svgSize,
        /* Если передан мобильный размер, используем его. Иначе — десктопный */
        '--my-svg-size-mobile': svgSizeMobile || svgSize,
        '--svg-offset-y': svgOffsetY,
        '--svg-offset-x': svgOffsetX
      } as CSSProperties}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};