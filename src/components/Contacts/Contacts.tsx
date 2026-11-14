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

  return (
    <section 
      id="contacts" 
      className={styles.contactsSection}
      data-cursor-theme="dark"
    >
      <div className="container">
        <div className="layout-grid">
          
          <div className={styles.contactsGrid}>
            <div className={styles.contactCard} data-cursor="link">
              <a href="mailto:alisa.lushina@gmail.com" className={styles.cardLink} data-cursor="link" aria-label="Написать на почту" />
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Почта</span>
                <button className={styles.copyBtn} onClick={(e) => copyToClipboard('alisa.lushina@gmail.com', setCopiedEmail, e)} data-cursor="copy">
                  {copiedEmail ? 'Скопировано' : 'Копировать'}
                </button>
              </div>
              <span className={styles.cardValue}>alisa.lushina@gmail.com</span>
            </div>

            <div className={styles.contactCard} data-cursor="link">
              <a href="https://t.me/alisa_lssh" target="_blank" rel="noopener noreferrer" className={styles.cardLink} data-cursor="link" aria-label="Написать в Telegram" />
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Telegram</span>
                <button className={styles.copyBtn} onClick={(e) => copyToClipboard('@alisa_lssh', setCopiedTg, e)} data-cursor="copy">
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