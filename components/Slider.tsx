"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './styles/Slider.module.css';
import React from 'react';

interface ProgressProps {
    percent: number;
    factory?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'notice';
    onChange: (newValue: number) => void;
}

const getColor = (factory: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'notice' | 'info') => {
    switch (factory) {
        case 'primary':
            return '--nxp-primary-color';
        case 'secondary':
            return '--nxp-secondary-color';
        case 'success':
            return '--nxp-green';
        case 'warning':
            return '--nxp-orange';
        case 'danger':
            return '--nxp-red';
        case 'info':
            return '--nxp-violet';
        case 'notice':
            return '--nxp-blue';
        default:
            return '--nxp-secondary-color';
    }
}

const Slider = ({ percent, factory = 'secondary', onChange }: ProgressProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        if (isDragging) {
            const canvas = canvasRef.current;
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                let clientX;
                if (e instanceof MouseEvent) {
                    clientX = e.clientX;
                } else if (e instanceof TouchEvent) {
                    clientX = e.touches[0].clientX;
                }

                if (clientX !== undefined) {
                    const newPercent = Math.min(Math.max(0, (clientX - rect.left) / rect.width), 1) * 100;
                    onChange(newPercent);
                }
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }
        const ctx = canvas?.getContext('2d');
        if(!ctx){
            return;
        }

        const computedStyle = getComputedStyle(document.documentElement);
        const color = computedStyle.getPropertyValue(getColor(factory));

        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color.trim(); 
            ctx.fillRect(0, 0, percent * 3, 10); 
        }
    }, [percent, factory]);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleMouseMove);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={styles.slider}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
        >
            <canvas ref={canvasRef} width={300} height={10} />
            <div
                className={styles.thumb}
                style={{ left: `${percent}%` }}
            />
        </div>
    );
};

export default Slider;
