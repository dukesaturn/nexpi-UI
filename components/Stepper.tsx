"use client";
import React from 'react';
import { useState } from 'react'
import Button from './Button';
import Card from './Card';

interface StepItem {
    data: React.ReactNode;
}

interface StepperProps {
    steps: StepItem[];
}

const Stepper = ({ steps }: StepperProps) => {
    const [currentStepIndex, setCurrentIndex] = useState<number>(0)

    const handleAfter = () => {
        if (currentStepIndex < (steps.length - 1)) {
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
                            <div key={index} style={{
                                width: '26px', height: '26px',
                                backgroundColor: index === currentStepIndex ? 'var(--nxp-secondary-color)' : 'var(--nxp-secondary-shadow-color)',
                                borderRadius: '50%', marginBottom: '10px', fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <span style={{
                                    display: 'inline-flex', justifyContent: 'center', alignItems: 'center', color:
                                        index === currentStepIndex ? 'var(--nxp-background-color)' : 'black'
                                }}>{index}</span>
                            </div>
                        )
                    })
                }

            </div>
            <Card>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div >
                        {steps[currentStepIndex].data}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', overflow : 'auto' }}>
                        {currentStepIndex !== 0 && (
                            <Button factory='void' onClick={handleBefore}>Before</Button>
                        )}
                        <div style={{ flex: 1 }}></div>
                        <Button factory='primary' onClick={handleAfter}>After</Button>
                    </div>
                </div>


            </Card>
        </div>
    );
}

export default Stepper;