import React, { useState } from 'react';
import './Stepper.css';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'Contact Details',
      description: 'Add contact details for further communications.'
    },
    {
      number: 2,
      title: 'Shipping Address',
      description: 'Add shipping address for delivery.'
    },
    {
      number: 3,
      title: 'Payment',
      description: 'Choose payment method for your order.'
    },
    {
      number: 4,
      title: 'Delivered',
      description: 'Your order has been delivered successfully.'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      <h1>Stepper</h1>
      
      {/* Progress Bar */}
      <div className="stepper">
        {steps.map((step, index) => (
          <div key={step.number} className="step-container">
            <div className={`step-circle ${currentStep >= step.number ? 'active' : ''}`}>
              {step.number}
            </div>
            <div className="step-title">{step.title}</div>
            {index < steps.length - 1 && (
              <div className={`step-line ${currentStep > step.number ? 'completed' : ''}`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Current Step Description */}
      <div className="step-description">
        {steps[currentStep - 1].description}
      </div>

      {/* Navigation Buttons */}
      <div className="button-container">
        <button 
          className="btn previous" 
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button 
          className="btn next" 
          onClick={handleNext}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
