import styles from './Timeline.module.css';

export interface TimelineItemData {
  id: string;
  title: string;
  year: string;
}

interface TimelineProps {
  items: TimelineItemData[];
  activeId: string | null;
  onHover: (id: string | null) => void;
  hideLastLineOnMobile?: boolean; // <-- Новый пропс
}

export const Timeline = ({ 
  items, 
  activeId, 
  onHover, 
  hideLastLineOnMobile = false // <-- По умолчанию false
}: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = activeId === item.id;

        return (
          <div 
            key={item.id} 
            className={styles.timelineItem}
            onMouseEnter={() => onHover(item.id)}
            onMouseLeave={() => onHover(null)}
          >
            
            <div className={styles.marker}>
              <div className={styles.circle}>
                <div className={`${styles.innerCircle} ${isActive ? styles.innerActive : ''}`} />
              </div>
              {/* Добавляем класс hideLineMobile только если это последний элемент и пропс true */}
              <div className={`${styles.line} ${isLast ? styles.lastLine : ''} ${isLast && hideLastLineOnMobile ? styles.hideLineMobile : ''}`} />
            </div>
            
            <div className={styles.textContainer}>
              <span className={styles.company}>{item.title}</span>
              <span className={styles.year}>{item.year}</span>
            </div>

          </div>
        );
      })}
    </div>
  );
};