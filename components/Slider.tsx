"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './styles/Slider.module.css';

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
            return '--nxp-light-green';
        case 'warning':
            return '--nxp-yellow';
        case 'danger':
            return '--nxp-light-red';
        case 'info':
            return '--nxp-light-violet';
        case 'notice':
            return '--nxp-cian';
        default:
            return '--nxp-secondary-color)';
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

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const canvas = canvasRef.current;
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                const newPercent = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1) * 100;
                onChange(newPercent);
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

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

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={styles.slider}
            onMouseDown={handleMouseDown}
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
