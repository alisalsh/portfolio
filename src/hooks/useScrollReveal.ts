import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Если элемент появился в зоне видимости
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Отключаем наблюдение, чтобы анимация сработала только 1 раз
        if (ref.current) observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.1, // Срабатывает, когда элемент виден на 10%
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isVisible };
};