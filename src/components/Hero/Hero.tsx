import { Square } from '../Square/Square';
import styles from './Hero.module.css';

import cases from '../../assets/cases.svg'; 
import cvSvg from '../../assets/cv.svg';
import noncom from '../../assets/noncom.svg';
import contact from '../../assets/contact.svg';
import pp from '../../assets/pp.svg'; // <-- Возвращаем картинку

export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.hero}>
      
      {/* Фоновая картинка
      <div className={styles.bgImageWrapper}>
        <img src={pp} alt="" className={styles.bgImage} />
      </div> */}

      <div className="container">
        <div className="layout-grid">
          
          {/* === БОЛЬШОЙ БЛОК С ТЕКСТОМ === */}
          <div className={styles.heroIntro}>
            <div className={styles.topLabels}>
              <span className={styles.labelText}>UI/UX-ДИЗАЙНЕР</span>
              <span className={styles.labelText}>АЛИСА ЛУШИНА</span>
            </div>

            <div className={styles.bottomContent}>
              
              {/* Заголовок сверху */}
              <h1 className={styles.heroTitle}>
              Curious <br />by design
              </h1>
              
              {/* Текст под ним */}
              <div className={styles.heroDescriptionWrapper}>
                <p className={styles.heroDescription}>
                  Работаю с B2C-продуктами, проектирую интерфейсы, 
                  <br className={styles.desktopBreak} /> провожу UX-исследования и собираю дизайн-системы
                </p>
                <p className={styles.heroDescription}>
                  Есть опыт в графическом дизайне и разработке упаковки 
                  <br className={styles.desktopBreak} /> для FMCG-бренда
                </p>
              </div>

            </div>
          </div>

          {/* === ВЕРХНИЙ РЯД КВАДРАТОВ === */}
          <div className={styles.topSquareLeft}>
            <div onClick={() => scrollTo('cases')} className={styles.linkReset}>
              <Square theme="dark" svgSize="84px" svgSizeMobile="40px" svgOffsetX="-2%" svgOffsetY="-2%" className={styles.hasBorder}>
                <img src={cases} alt="Кейсы" />
              </Square>
            </div>
          </div>
          
          <div className={styles.topSquareRight}>
            <div onClick={() => scrollTo('about')} className={styles.linkReset}>
              <Square theme="light" svgSize="80px" svgSizeMobile="40px" svgOffsetX="-1%" svgOffsetY="-1%" className={styles.hasBorder}>
                <img src={contact} alt="Обо мне и Контакты" />
              </Square>
            </div>
          </div>

          {/* === НИЖНИЙ РЯД КВАДРАТОВ === */}
          <div className={styles.bottomSquareCenter}>
            {/* Ссылку на PDF вынес внутрь Square, чтобы клик работал */}
            <a href="/Лушина_А_Р_ui_ux.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkReset}>
              <Square theme="light" cursorType="cv" svgSize="150px" svgSizeMobile="60px" svgOffsetX="-6%" svgOffsetY="-8%" className={styles.cvBorder}>
                <img src={cvSvg} alt="CV" />
              </Square>
            </a>
          </div>
          
          <div className={styles.bottomSquareRight}>
            <div onClick={() => scrollTo('non-commercial')} className={styles.linkReset}>
              <Square theme="dark" svgSize="170px" svgSizeMobile="80px" svgOffsetX="-1%" svgOffsetY="-1%" className={styles.hasBorder}>
                <img src={noncom} alt="Некоммерческие проекты" />
              </Square>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};