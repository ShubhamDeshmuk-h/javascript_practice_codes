import React, { useState } from 'react';
import './Calculator.css';

function CalButton({ value, onClick, className = '' }) {
  return (
    <button className={`button ${className}`} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // Evaluate the expression
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      {['7','8','9','/','4','5','6','*','1','2','3','-','C','0','=','+'].map((btn, i) => (
        <CalButton
          key={i}
          value={btn}
          onClick={handleClick}
          className={['/', '*', '-', '+', '='].includes(btn) ? 'operator' : ''}
        />
      ))}
    </div>
  );
};

export default Calculator;
