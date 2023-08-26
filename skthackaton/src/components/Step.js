import React, { useState } from 'react';
import StepButton from './StepButton';
import './StepButton.css';

function Step() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
        <StepButton number={1} active={activeStep === 1} onClick={() => handleStepClick(1)} />
        <span className="arrow">→</span>
        <StepButton number={2} active={activeStep === 2} onClick={() => handleStepClick(2)} />
        <span className="arrow">→</span>
        <StepButton number={3} active={activeStep === 3} onClick={() => handleStepClick(3)} />
    </div>
  );
}

export default Step;