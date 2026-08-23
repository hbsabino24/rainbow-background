import React from 'react';
import CodeBlock from '../components/CodeBlock';

function CodeSnippet() {
  const myCode = `function calculateTotal(price, tax) {
  const total = price + (price * tax);
  return total.toFixed(2);
}`;

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>My React App Codeblock</h2>
      <CodeBlock codeString={myCode} />
    </div>
  );
}

export default CodeSnippet;
