import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CaseImageViewer } from '../CaseImageViewer/CaseImageViewer';
import styles from './CaseCard.module.css';

interface CaseCardProps {
  cardId: string;
  title: string;
  description?: string;
  type?: 'case' | 'link' | 'locked' | 'redacted';
  href?: string;
  pdfUrl?: string; 
  linkedTimelineId?: string;
  activeId?: string | null; 
  hoveredCardId?: string | null; 
  metaText?: string;
  imageSrc?: string; 
  hoverImageSrc?: string;
  onCardHover?: (cardId: string | null, timelineId: string | null) => void;
}

export const CaseCard = ({ 
  cardId,
  title, 
  description = 'Краткое описание этого кейса, чтобы было понятно, о чем он.',
  type = 'case', 
  href = '#',
  pdfUrl = '/example.pdf', 
  linkedTimelineId,
  activeId,
  hoveredCardId,
  metaText = 'UI/UX',
  imageSrc, 
  hoverImageSrc,
  onCardHover
}: CaseCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = linkedTimelineId && activeId === linkedTimelineId && (hoveredCardId === null || hoveredCardId === cardId);
  const isRedacted = type === 'redacted';
  const isLocked = type === 'locked';

  const handleClick = () => {
    if (type === 'link') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (isLocked || isRedacted) {
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleMouseEnter = () => {
    if (linkedTimelineId && onCardHover) onCardHover(cardId, linkedTimelineId);
  };

  const handleMouseLeave = () => {
    if (onCardHover) onCardHover(null, null);
  };

  const cursorType = isRedacted ? 'locked' : type;
  const themeForCursor = (!isLocked && !isRedacted) ? 'dark' : 'light';

  return (
    <>
      <div 
        className={styles.caseCard} 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor={cursorType}
        data-theme={themeForCursor}
      >
        <div className={styles.circleWrapper}>
          <div className={styles.circle}>
            <div className={`${styles.innerCircle} ${isActive ? styles.innerActive : ''}`} />
          </div>
        </div>

        {imageSrc && (
          <div className={styles.illustrationWrapper}>
            <img src={imageSrc} alt="Иллюстрация" className={styles.illustration} />
          </div>
        )}

        {hoverImageSrc && !isLocked && !isRedacted && (
          <div className={styles.hoverImageWrapper}>
            <img src={hoverImageSrc} alt="Обложка кейса" className={styles.hoverImage} />
          </div>
        )}

        <div className={styles.textContent}>
          <div className={styles.metaBadge}>
            {metaText}
          </div>
          
          <h3 className={`${styles.caseTitle} ${isRedacted ? styles.redacted : ''}`}>
            {title}
          </h3>
          <p className={`${styles.caseDescription} ${isRedacted ? styles.redacted : ''}`}>
            {description}
          </p>
        </div>
      </div>

      {type === 'case' && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="container">
             <CaseImageViewer imageSrc={pdfUrl} />
          </div>
        </Modal>
      )}
    </>
  );
};