import styles from './CaseImageViewer.module.css';

interface CaseImageViewerProps {
  imageSrc: string;
}

export const CaseImageViewer = ({ imageSrc }: CaseImageViewerProps) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={imageSrc} alt="Кейс" className={styles.caseImage} />
    </div>
  );
};