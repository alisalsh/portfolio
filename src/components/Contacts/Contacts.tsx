import { useState } from 'react';
import styles from './Contacts.module.css';
import getInTouchSvg from '../../assets/getintouch.svg';

export const Contacts = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedTg, setCopiedTg] = useState<boolean>(false);

  const copyToClipboard = (
    text: string, 
    setCopied: (value: boolean) => void, 
    e: React.MouseEvent
  ) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Функция для перехода по ссылке с проверкой на выделение текста
  const handleCardClick = (
    e: React.MouseEvent, 
    link: string, 
    isExternal: boolean = false
  ) => {
    // Добавили stopPropagation, чтобы TypeScript не ругался и клик не всплывал
    e.stopPropagation();

    // Проверяем, есть ли выделенный текст на странице прямо сейчас
    const selection = window.getSelection();
    
    // Если текст выделен (например, пользователь тянет мышку, чтобы скопировать почту), 
    // мы не переходим по ссылке
    if (selection && selection.toString().trim().length > 0) {
      return;
    }

    // Если выделения нет — это обычный клик, переходим по ссылке
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  return (
    <section 
      id="contacts" 
      className={styles.contactsSection}
      data-cursor-theme="dark"
    >
      <div className="container">
        <div className="layout-grid">
          
          <div className={styles.contactsGrid}>
            {/* Карточка Почты */}
            <div 
              className={styles.contactCard} 
              data-cursor="link"
              onClick={(e) => handleCardClick(e, 'mailto:alisa.lushina@gmail.com')}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Почта</span>
                <button 
                  className={styles.copyBtn} 
                  onClick={(e) => copyToClipboard('alisa.lushina@gmail.com', setCopiedEmail, e)} 
                  data-cursor="copy"
                >
                  {copiedEmail ? 'Скопировано' : 'Копировать'}
                </button>
              </div>
              <span className={styles.cardValue}>alisa.lushina@gmail.com</span>
            </div>

            {/* Карточка Telegram */}
            <div 
              className={styles.contactCard} 
              data-cursor="link"
              onClick={(e) => handleCardClick(e, 'https://t.me/alisa_lssh', true)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Telegram</span>
                <button 
                  className={styles.copyBtn} 
                  onClick={(e) => copyToClipboard('@alisa_lssh', setCopiedTg, e)} 
                  data-cursor="copy"
                >
                  {copiedTg ? 'Скопировано' : 'Копировать'}
                </button>
              </div>
              <span className={styles.cardValue}>@alisa_lssh</span>
            </div>
          </div>

          <div className={styles.svgWrapper}>
            <img src={getInTouchSvg} alt="Get in touch" className={styles.getInTouchSvg} />
          </div>

        </div>
      </div>
    </section>
  );
};