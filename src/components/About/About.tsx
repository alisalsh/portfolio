import styles from './About.module.css';
import photo from '../../assets/a.jpg';

export const About = () => {
  const hardSkills = [
    'Figma', 'Design Systems', 'UX Research', 
    'Photoshop', 'Illustrator', 'After Effects'
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="layout-grid">
          
          <div className={styles.textContent}>
            
            {/* 1. Блок с опытом */}
            <div className={styles.infoRow}>
              <div className={styles.experienceText}>
                <p>Более 3х лет в дизайне</p>
                <p>полгода в продуктовой команде</p>
              </div>

              <div className={styles.skillsInline}>
                {hardSkills.map((skill, index) => (
                  <span key={index} className={styles.skillItem}>
                    {skill}
                    {index !== hardSkills.length - 1 && ' / '}
                  </span>
                ))}
              </div>

               <div className={styles.cvColumn}>
                <a 
                  href="/Лушина_А_Р_ui_ux.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.cvLink}
                  data-cursor="cv"
                >
                  Скачать CV | формат .pdf
                </a>
              </div>
            </div>

            {/* 3. Текст */}
            <h2 className={styles.mainText}>
              Спрашиваю, исследую, нахожу и создаю продукты с пользой для людей и бизнеса
            </h2>
            
            <p className={styles.secondaryText}>
              А ещё я люблю типографику, швейцарский дизайн, порядок в макетах и чистые дизайн‑системы
            </p>

          </div>

          {/* 2. Фото */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img src={photo} className={styles.image} />
              <div className={styles.noiseOverlay}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};