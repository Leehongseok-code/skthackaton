import React, { useState } from 'react';
import { Stepper, Step, StepLabel,makeStyles } from '@material-ui/core';
import './styles.css'; // 생성한 CSS 파일을 가져옵니다.

const useStyles = makeStyles((theme) => ({
  customStepper: {
    backgroundColor: '#f0f8ff', // 원하는 배경색으로 변경
  },
}));

function ProgressStepper({ steps, activeStep }) {
  const classes = useStyles();

  return (
    <Stepper activeStep={activeStep} alternativeLabel className={classes.customStepper}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default ProgressStepper;
