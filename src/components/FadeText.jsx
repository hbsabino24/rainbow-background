import React from 'react';
import styles  from './FadeText.module.css';

export default function FadeText({ text = '' }) {
  // Split the text into an array of individual words
  const words = text.split(' ');

  return (
    <p className={styles.fadeTextContainer}>
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
