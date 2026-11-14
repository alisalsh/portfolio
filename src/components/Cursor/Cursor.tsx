import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

export const Cursor = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCardHovering, setIsCardHovering] = useState(false);
  const [isCVHovering, setIsCVHovering] = useState(false);
  const [isCaseHovering, setIsCaseHovering] = useState(false);
  const [isLinkHovering, setIsLinkHovering] = useState(false);
  const [isLockHovering, setIsLockHovering] = useState(false);
  const [isNavHovering, setIsNavHovering] = useState(false);
  const [isCopyHovering, setIsCopyHovering] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [cardTheme, setCardTheme] = useState<'light' | 'dark' | null>(null);

  // Проверяем, является ли устройство мобильным/тач
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    // ЕСЛИ ЭТО МОБИЛКА - НИЧЕГО НЕ ЗАПУСКАЕМ
    if (isTouchDevice) return;

    const mainCursor = mainCursorRef.current;
    const trail = trailRef.current;
    if (!mainCursor || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mainCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      requestAnimationFrame(animateTrail);
    };
    requestAnimationFrame(animateTrail);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateHoverState = (target: HTMLElement | null) => {
      if (!target) {
        setIsHovering(false); setIsCardHovering(false); setIsCVHovering(false);
        setIsCaseHovering(false); setIsLinkHovering(false); setIsLockHovering(false);
        setIsNavHovering(false); setIsCopyHovering(false); setCardTheme(null); setIsDarkSection(false);
        return;
      }

      const darkSectionElement = target.closest('[data-cursor-theme="dark"]');
      setIsDarkSection(!!darkSectionElement);

      const imageElement = target.closest('[data-cursor="image"]'); 
      const heroCardElement = target.closest('[data-cursor="card"]');
      const cvElement = target.closest('[data-cursor="cv"]');
      const caseElement = target.closest('[data-cursor="case"]');
      const lockElement = target.closest('[data-cursor="locked"]');
      const navLinkElement = target.closest('[data-cursor="nav-link"]');
      const copyElement = target.closest('[data-cursor="copy"]');
      const linkElement = target.closest('[data-cursor="link"]');
      
      setIsHovering(false); setIsCardHovering(false); setIsCVHovering(false);
      setIsCaseHovering(false); setIsLinkHovering(false); setIsLockHovering(false);
      setIsNavHovering(false); setIsCopyHovering(false);
      
      let theme: 'light' | 'dark' = 'light';

      if (cvElement) {
        setIsCVHovering(true);
      } else if (heroCardElement) {
        setIsCardHovering(true);
        theme = (heroCardElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      } else if (copyElement) {
        setIsCopyHovering(true); 
      } else if (linkElement) {
        setIsLinkHovering(true);
        theme = (linkElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      } else if (lockElement) {
        setIsLockHovering(true);
      } else if (caseElement) {
        setIsCaseHovering(true);
        theme = (caseElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      } else if (navLinkElement) {
        setIsNavHovering(true);
      } else if (target.closest('a') || target.closest('button') || target.closest('[data-cursor="hover"]')) {
        setIsHovering(true);
      }

      if (imageElement) theme = 'dark';
      setCardTheme(theme);
    };

    const handleMouseOver = (e: MouseEvent) => updateHoverState(e.target as HTMLElement);
    const handleScroll = () => {
      const element = document.elementFromPoint(mouseX, mouseY);
      updateHoverState(element as HTMLElement | null);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice]);

  // ЕСЛИ ЭТО МОБИЛКА - НЕ РЕНДЕРИМ КУРСОР ВООБЩЕ
  if (isTouchDevice) return null;

  const isAnyBigCursor = isCardHovering || isCVHovering || isCaseHovering || isLinkHovering || isLockHovering || isNavHovering || isCopyHovering;
  const isDark = isAnyBigCursor && cardTheme === 'dark';

  const cursorClasses = [
    styles.cursor,
    !isVisible ? styles.cursorHidden : '',
    isClicking ? styles.clicking : '',
    isDarkSection ? styles.cursorDark : '',
    isDark ? styles.cardHoveringDark : ''
  ].filter(Boolean).join(' ');

  const innerClasses = [
    styles.cursorInner,
    isHovering ? styles.hovering : '',
    isAnyBigCursor ? styles.cardHovering : '',
    isCVHovering ? styles.cvHovering : '',
    isCaseHovering ? styles.caseHovering : '',
    isLinkHovering ? styles.linkHovering : '',
    isLockHovering ? styles.lockHovering : '',
    isNavHovering ? styles.navHovering : '',
    isCopyHovering ? styles.copyHovering : '',
    isDark ? styles.cursorInnerDark : ''
  ].filter(Boolean).join(' ');

  const trailClasses = [
    styles.trail,
    isHovering ? styles.trailHovering : '',
    isAnyBigCursor ? styles.trailHidden : '',
    !isVisible ? styles.cursorHidden : '',
    isDarkSection || isDark ? styles.trailDark : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <div ref={trailRef} className={trailClasses} />
      
      <div ref={mainCursorRef} className={cursorClasses}>
        <div className={innerClasses}>
          <img src="/cursor.svg" alt="cursor" className={styles.cursorImage} />
          <img src="/downscrollcoursor.svg" alt="scroll" className={styles.scrollIcon} />
          <img src="/downloadcours.svg" alt="download" className={styles.downloadIcon} />
          <img src="/deeplink.svg" alt="link" className={styles.linkIcon} />
          <img src="/opencase.svg" alt="case" className={styles.openCaseIcon} />
          <img src="/lock.svg" alt="lock" className={styles.lockIcon} />
        </div>
      </div>
    </>
  );
};