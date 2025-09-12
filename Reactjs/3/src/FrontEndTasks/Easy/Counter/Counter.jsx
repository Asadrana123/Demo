import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStep(value);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      
      <div className="counter-display">
        {count}
      </div>

      <div className="button-group">
        <button className="counter-btn decrease" onClick={handleDecrement}>
          -
        </button>
        <button className="counter-btn increase" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="step-control">
        <label>Increment/Decrement by</label>
        <input 
          type="number" 
          value={step} 
          onChange={handleStepChange}
          min="1"
          className="step-input"
        />
      </div>

      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
