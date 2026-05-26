import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
  // Store sectionIds in a ref so the effect dep array stays stable across renders
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    const ids = sectionIdsRef.current;

    const observers = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return activeSection;
}
