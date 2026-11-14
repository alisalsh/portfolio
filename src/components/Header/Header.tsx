import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className="container">
        <div className={`layout-grid ${styles.headerGrid}`}>
          
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-cursor="nav-link">
            PORTFOLIO
          </div>
          
          <nav className={styles.nav}>
            {/* Добавили data-cursor="nav-link" для новой анимации курсора */}
            <a onClick={() => scrollTo('cases')} data-cursor="nav-link">
              Кейсы
            </a>
            <a onClick={() => scrollTo('about')} data-cursor="nav-link">
              Обо мне
            </a>
            <a onClick={() => scrollTo('contacts')} data-cursor="nav-link">
              Контакты
            </a>
          </nav>
          
        </div>
      </div>
    </header>
  );
};