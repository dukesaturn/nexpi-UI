"use client";
import React from 'react';
import Card from './Card';
import Textfield from './Textfield';
import { Grid } from '@mui/material';
import Button from './Button';
import Typography from './Typography';
import { useState, useEffect } from 'react'

interface StepItem {
    data: React.ReactNode;
}

interface StepperProps {
    steps: StepItem[];
}

const Stepper = ({ steps }: StepperProps) => {
    const [currentStepIndex, setCurrentIndex] = useState<number>(0)
    const [currentStep, setCurrent] = useState<React.ReactNode>()

    const handleAfter = () => {
        if(currentStepIndex < (steps.length - 1)){
            setCurrentIndex(currentStepIndex + 1)
        }

    }

    const handleBefore = () => {
        setCurrentIndex(currentStepIndex - 1)
    }


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '2rem' }}>
                {
                    steps.map((item, index) => {
                        return (
                            <div style={{ width: '26px', height: '26px', 
                            backgroundColor: index === currentStepIndex ? 'var(--nxp-secondary-color)' :  'var(--nxp-secondary-shadow-color)', 
                            borderRadius: '50%', marginBottom: '10px', fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', color : 
                                    index === currentStepIndex ? 'var(--nxp-background-color)' :  'black'
                                 }}>{index}</span>
                            </div>
                        )
                    })
                }

            </div>
            <Card>
                <Typography>Step 1</Typography>
                <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    {steps[currentStepIndex].data}
                    <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        {currentStepIndex !== 0 && (
                            <Button factory='void' onClick={handleBefore}>Before</Button>
                        )}
                        <div style={{ flex: 1 }}></div>
                        <Button factory='primary' onClick={handleAfter}>After</Button>
                    </Grid>
                </Grid>




            </Card>
        </div>
    );
}

export default Stepper;