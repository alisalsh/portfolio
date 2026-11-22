
import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import styles from './Rabbit.module.css';

const SCENE_URL =
  'https://prod.spline.design/T2-gIfBY8qgCq0yY/scene.splinecode';

function Rabbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const stopSplineWheel = (event: WheelEvent) => {
      event.stopPropagation();
    };

    element.addEventListener('wheel', stopSplineWheel, {
      capture: true,
      passive: true,
    });

    return () => {
      element.removeEventListener('wheel', stopSplineWheel, true);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.rabbit}>
      {shouldLoad && <Spline scene={SCENE_URL} />}
    </div>
  );
}

export default Rabbit;
