import { useState, useRef } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Cursor } from './components/Cursor/Cursor';
import { CaseCard } from './components/CaseCard/CaseCard';
import { Timeline } from './components/Timeline/Timeline';
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';

export default function App() {
  const [activeTimelineId, setActiveTimelineId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTimelineHover = (id: string | null) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (id) {
      setActiveTimelineId(id);
      setHoveredCardId(null); 
    } else {
      hoverTimeout.current = setTimeout(() => {
        setActiveTimelineId(null);
      }, 50);
    }
  };

  const handleCardHover = (cardId: string | null, timelineId: string | null) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (cardId && timelineId) {
      setHoveredCardId(cardId);
      setActiveTimelineId(timelineId);
    } else {
      hoverTimeout.current = setTimeout(() => {
        setHoveredCardId(null);
        setActiveTimelineId(null);
      }, 50);
    }
  };

  return (
    <div className={styles.app}>
      <Cursor />
      <Header />
      
      <main>
        <Hero />
        
        <section id="cases" className={styles.casesSection}>
          <div className="container">
            
            {/* === ДЕСКТОП === */}
            <div className={styles.desktopOnly}>
              <div className="layout-grid">
                <div className={styles.leftColumn}>
                  <div className={styles.topRowContainer}>
                    <h2 className={styles.sidebarTitle}>Кейсы</h2>
                    <div className={styles.timelineBlock}>
                      <Timeline 
                        activeId={activeTimelineId} 
                        onHover={handleTimelineHover}
                        items={[{ id: 'sber', title: 'ПАО СБЕРБАНК', year: '2026' }]} 
                      />
                    </div>
                    <div className={styles.fillerLine}></div>
                  </div>

                  <h2 className={styles.sidebarTitle} id="non-commercial">
                    Некоммерческие проекты
                  </h2>

                  <div className={styles.timelineBlock}>
                    <Timeline 
                      activeId={activeTimelineId} 
                      onHover={handleTimelineHover}
                      hideLastLineOnMobile={true} 
                      items={[
                        { id: 'crypto', title: 'ООО КРИПТОПЛАТФОРМА', year: '2025-2026' },
                        { id: 'vkus', title: 'АО ВКУСВИЛЛ', year: '2025' }
                      ]} 
                    />
                  </div>
                </div>

                <div className={styles.casesGrid}>
                  <CaseCard cardId="p1" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="NDA" imageSrc="/example.svg" linkedTimelineId="sber" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} type="redacted" />
                  <CaseCard cardId="p2" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="NDA" imageSrc="/example.svg" linkedTimelineId="sber" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} type="redacted" />
                  <CaseCard cardId="p3" hoverImageSrc="/cases/priv.svg" title="Создание p2p&#8209;оффера" description="Решение для создания предложения обмена фиатной валюты на цифровую в Web3-продукте" metaText="UI/UX" linkedTimelineId="crypto" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} pdfUrl="/cases/crypto.svg" />
                  <CaseCard cardId="p4" title="Дизайн упаковки" hoverImageSrc="/cases/beh.png" description="Проект-коллаборация: разработка дизайна упаковки потребительских товаров для сети магазинов " metaText="print & layout" imageSrc="/pr4.svg" type="link" href="https://www.behance.net/gallery/244537549/Packaging-Vkusvill" linkedTimelineId="vkus" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} />
                  <CaseCard cardId="p5" description="pet-проект: UX-иследование покупки билетов в океанариумы на сайтах и переосмысление этого процесса" title="Концепт сайта океанариума" metaText="UI/UX" pdfUrl="/cases/aqua.svg" hoverImageSrc="/cases/aaa.png" />
                  <CaseCard cardId="p6" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="work in progress" imageSrc="/example.svg" type="redacted" />
                </div>
              </div>
            </div>

            {/* === МОБИЛЬНАЯ ВЕРСИЯ === */}
            <div className={styles.mobileOnly}>
              <div className={styles.mobileLayout}>
                
                <div className={styles.mobileSection}>
                  <h2 className={styles.sidebarTitle}>Кейсы</h2>
                  <Timeline activeId={activeTimelineId} onHover={handleTimelineHover} items={[{ id: 'sber', title: 'ПАО СБЕРБАНК', year: '2026' }]} />
                </div>

                <div className={styles.mobileCasesGrid}>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p1" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="NDA" imageSrc="/example.svg" linkedTimelineId="sber" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} type="redacted" />
                  </div>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p2" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="NDA" imageSrc="/example.svg" linkedTimelineId="sber" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} type="redacted" />
                  </div>
                </div>

                <div className={styles.mobileSection}>
                  <h2 className={styles.sidebarTitle} id="non-commercial">Некоммерческие проекты</h2>
                  <Timeline activeId={activeTimelineId} onHover={handleTimelineHover} items={[{ id: 'crypto', title: 'ООО КРИПТОПЛАТФОРМА', year: '2025-2026' }, { id: 'vkus', title: 'АО ВКУСВИЛЛ', year: '2025' }]} />
                </div>

                <div className={styles.mobileCasesGrid}>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p3" hoverImageSrc="/cases/priv.svg" title="Создание p2p&#8209;оффера" description="Решение для создания предложения обмена фиатной валюты на цифровую в Web3-продукте" metaText="UI/UX" linkedTimelineId="crypto" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} pdfUrl="/cases/crypto.svg" />
                  </div>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p4" title="Дизайн упаковки" hoverImageSrc="/cases/beh.png" description="Проект-коллаборация: разработка дизайна упаковки потребительских товаров для сети магазинов " metaText="print & layout" imageSrc="/pr4.svg" type="link" href="https://www.behance.net/gallery/244537549/Packaging-Vkusvill" linkedTimelineId="vkus" activeId={activeTimelineId} hoveredCardId={hoveredCardId} onCardHover={handleCardHover} />
                  </div>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p5" description="pet-проект: UX-иследование покупки билетов в океанариумы на сайтах и переосмысление этого процесса" title="Концепт сайта океанариума" metaText="UI/UX" pdfUrl="/cases/aqua.svg" hoverImageSrc="/cases/aaa.png" />
                  </div>
                  <div className={styles.mobileCardWrapper}>
                    <CaseCard cardId="p6" title="Пока недоступно " description="Сейчас этот проект посмотреть не получится, но скоро он здесь обязательно появится" metaText="work in progress" imageSrc="/example.svg" type="redacted" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <About />
        <Contacts />
      </main>
    </div>
  );
}