import React from 'react';

const StepButton = ({ number, active, onClick }) => {
  return (
    <div className={`step-buttons ${active ? 'active' : ''}`} onClick={onClick}>
      {number}
    </div>
  );
};

export default StepButton;