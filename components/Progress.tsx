"use client";
import { useRef, useEffect } from "react";

interface ProgressProps {
    percent: number;
    factory?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'notice';
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

const Progress = ({ ...props }: ProgressProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return; 

        const computedStyle = getComputedStyle(document.documentElement);
        const color = computedStyle.getPropertyValue(getColor(props.factory || 'secondary'));

        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color.trim(); 
            ctx.fillRect(0, 0, props.percent * 3, 15);
        }
    }, [props.percent]);


    return <div style={{
        margin: '1rem',
        backgroundColor: 'var(--nxp-secondary-shadow-color)',
        borderRadius: '8px', height: '15px',
        width: '300px', overflow: 'hidden'
    }}>
        <canvas ref={canvasRef} {...props} /></div>

}

export default Progress;
