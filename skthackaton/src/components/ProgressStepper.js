import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';

function ProgressStepper({ steps, activeStep }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default ProgressStepper;
