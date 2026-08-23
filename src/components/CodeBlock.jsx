import React, { useState } from 'react';

const CodeBlock = ({ codeString }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      
      // Reset button text after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={handleCopy} 
        style={{
          ...styles.button,
          ...(copied ? styles.buttonCopied : {})
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre style={styles.pre}>
        <code style={styles.code}>{codeString}</code>
      </pre>
    </div>
  );
};

// Inline styles for easy copy-pasting (Feel free to move to a CSS file)
const styles = {
  container: {
    position: 'relative',
    margin: '20px 0',
    backgroundColor: '#1e1e1e',
    borderRadius: '6px',
    paddingTop: '32px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  button: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #555',
    padding: '6px 12px',
    fontSize: '12px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonCopied: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  pre: {
    margin: 0,
    padding: '16px',
    overflowX: 'auto',
  },
  code: {
    fontFamily: "'Consolas', 'Monaco', monospace",
    color: '#d4d4d4',
    fontSize: '14px',
    whiteSpace: 'pre',
  }
};

export default CodeBlock;
