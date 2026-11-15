import { useState, useEffect } from 'react';
import styles from './CaseImageViewer.module.css';

interface CaseImageViewerProps {
  imageSrc: string;
}

export const CaseImageViewer = ({ imageSrc }: CaseImageViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [imageSrc]);

  return (
    <div className={styles.imageWrapper}>
      {/* Лоадер: только 2 кружочка */}
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
      )}

      <img 
        src={imageSrc} 
        alt="Кейс" 
        className={styles.caseImage}
        style={{ opacity: isLoading ? 0 : 1 }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // Если картинка битая, лоадер убирается
      />
    </div>
  );
};