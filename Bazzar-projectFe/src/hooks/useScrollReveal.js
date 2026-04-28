import { useEffect, useState, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported, just show it
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.05, // Lower threshold for better reliability
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it enters the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Backup: Show after 1 second if still not visible (e.g. if something went wrong)
    const backupTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      clearTimeout(backupTimer);
    };
  }, []);

  return { 
    ref, 
    isVisible, 
    revealClass: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' 
  };
}
