
import { useRef, useState } from 'react';
import type { PointerEvent } from 'react';

import { cases } from './casesData';
import CaseSteps from './CaseSteps';
import styles from './Cases.module.css';

function Cases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [screenStates, setScreenStates] = useState<Record<string, number>>(
    {},
  );

  const touchStartX = useRef<number | null>(null);
  const pendingScreens = useRef<Set<string>>(new Set());

  const activeCase = cases[activeIndex];

  function changeCase(direction: number) {
    setActiveIndex((current) => {
      return (current + direction + cases.length) % cases.length;
    });

    setScreenStates({});
    pendingScreens.current.clear();
  }

  function goToCase(index: number) {
    setActiveIndex(index);
    setScreenStates({});
    pendingScreens.current.clear();
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch') {
      touchStartX.current = event.clientX;
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const difference = event.clientX - touchStartX.current;

    if (Math.abs(difference) > 50) {
      changeCase(difference < 0 ? 1 : -1);
    }

    touchStartX.current = null;
  }

  function handlePointerCancel() {
    touchStartX.current = null;
  }

  function changePhoneScreen(phoneId: string, screens: string[]) {
    if (screens.length <= 1) return;
    if (pendingScreens.current.has(phoneId)) return;

    const currentIndex = screenStates[phoneId] ?? 0;
    const nextIndex = (currentIndex + 1) % screens.length;
    const nextScreen = screens[nextIndex];

    if (!nextScreen) return;

    pendingScreens.current.add(phoneId);

    const preload = new Image();

    preload.onload = () => {
      setScreenStates((current) => ({
        ...current,
        [phoneId]: nextIndex,
      }));

      pendingScreens.current.delete(phoneId);
    };

    preload.onerror = () => {
      pendingScreens.current.delete(phoneId);
    };

    preload.src = nextScreen;
  }

  return (
    <section className={styles.cases}>
      <div
        className={styles.carousel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div className={styles.topLine}>
          <span>( кейс )</span>
          <span>( подробнее )</span>
        </div>

        <a
          className={styles.deepLink}
          href={activeCase.link || undefined}
          aria-disabled={!activeCase.link}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            if (!activeCase.link) event.preventDefault();
          }}
        >
          <img src="/deeplinkbl.svg" alt="Подробнее" />
        </a>

        <div key={activeCase.id} className={styles.caseContent}>
          <div className={styles.heading}>
            <h2>{activeCase.title}</h2>
            <p>{activeCase.description}</p>
          </div>

          <div className={styles.phoneStage}>
            <div
              className={`${styles.phones} ${styles[activeCase.phoneLayout]}`}
            >
              {activeCase.phones.map((phone, index) => {
                const currentIndex = screenStates[phone.id] ?? 0;
                const screen = phone.screens[currentIndex];

                return (
                  <div
                    className={`${styles.phone} ${
                      index === 0 ? styles.phoneLeft : styles.phoneRight
                    }`}
                    key={phone.id}
                  >
                    <button
                      className={styles.screenSwitch}
                      type="button"
                      aria-label="Следующий экран телефона"
                      disabled={phone.screens.length <= 1}
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={() =>
                        changePhoneScreen(phone.id, phone.screens)
                      }
                    >
                      <img src="/change.svg" alt="" />
                    </button>

                    <button
                      className={styles.phoneScreen}
                      type="button"
                      aria-label="Следующий экран телефона"
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={() =>
                        changePhoneScreen(phone.id, phone.screens)
                      }
                      disabled={phone.screens.length <= 1}
                    >
                      {screen && (
                        <img
                          className={styles.screenImage}
                          src={screen}
                          alt={`Экран ${currentIndex + 1}`}
                        />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              type="button"
              aria-label="Предыдущий кейс"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => changeCase(-1)}
            >
              <img src="/arrow.svg" alt="" />
            </button>

            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              type="button"
              aria-label="Следующий кейс"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => changeCase(1)}
            >
              <img src="/arrow.svg" alt="" />
            </button>
          </div>

          <div className={styles.swipeIndicators}>
            {cases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.indicator} ${
                  index === activeIndex ? styles.indicatorActive : ''
                }`}
                aria-label={`Перейти к кейсу ${index + 1}`}
                aria-pressed={index === activeIndex}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => goToCase(index)}
              />
            ))}
          </div>

          <CaseSteps steps={activeCase.steps} />
        </div>
      </div>
    </section>
  );
}

export default Cases;
