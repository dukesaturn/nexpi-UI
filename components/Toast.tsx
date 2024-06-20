"use client";
import styles from './styles/Toast.module.css'
import { useState, useEffect } from 'react';
import Button from './Button';
import Typography from './Typography';
import React from 'react';

interface action {
    name: string;
    CallbackAction?: () => void;

}
interface ToastProps {
    title?: string;
    text?: string;
    action?: action;
    start?: boolean;
    time?: number
}



const Toast = ({ title, text, action, start = false, time = 5000 }: ToastProps) => {

    const [isOpen, setOpen] = useState(start);
    const [firstOpen, setFirstOpen] = useState(true && !start);

    /**
     * The component works whenever change the state of the `start` value.
     * The value of start is important only in the mounting, 'cause defines 
     * the initial state. The state 'firstOpen' ensures that when is the entry of the component
     * we are out of the rest of the logic.
     */
    
    useEffect(() => {
        if(!firstOpen){
            setOpen(true);
        }
        setFirstOpen(false);
    }, [start])


    useEffect(() => {
        if(!firstOpen){
            const timer = setTimeout(() => setOpen(false), time);
            start = !start;
            return () => clearTimeout(timer);
        }
        setFirstOpen(false);

    }
        , [isOpen])

    return (
        (isOpen ?
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} className={styles.toast}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }} >
                    <Typography type='h1' style={{ fontSize: '14px' }} ><b>{title}</b></Typography>
                    <Typography  style={{ marginTop: '-1rem', fontSize: '14px' }}>{text}</Typography>
                </div>
                <div style={{ flexShrink: 0, marginTop: '0.5rem' }}>
                    {action ? <Button factory='primary' onClick={action?.CallbackAction}>{action.name}</Button>
                        : null}
                </div>
            </div>
            : null
        )

    )
}

export default Toast;