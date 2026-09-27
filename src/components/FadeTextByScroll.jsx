import React, { useEffect, useRef, useState } from 'react';
import styles from'./FadeText.module.css';

function FadeTextByScroll({ text = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it has animated in, you can choose to unobserve to save performance
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { 
        threshold: 0.1 // Triggers when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <p 
      ref={containerRef} 
      className={`${styles.fadeTextContainer} ${isVisible ? 'is-visible' : ''}`}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className={styles.fadeWord}
          style={{ '--word-index': index }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

function FadeTextReanimate({ text = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset visibility when the element completely leaves the viewport
          setIsVisible(false);
        }
      },
      { 
        // 10% element intersection threshold
        threshold: 0.1, 
        // Starts the animation 150px BEFORE the element scrolls up into the viewport boundary
        rootMargin: '0px 0px 150px 0px' 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <p 
      ref={containerRef} 
      className={`${styles.fadeTextContainer} ${isVisible ? 'is-visible' : ''}`}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className={styles.fadeWordReanimate}
          style={{ '--word-index': index }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

export { FadeTextByScroll, FadeTextReanimate };