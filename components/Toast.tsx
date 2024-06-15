"use client";
import styles from './styles/Toast.module.css'
import {useState, useEffect} from 'react';
import Button from './Button';

interface action {
    name : string;
    CallbackAction?: () => void;

}
interface ToastProps {
    title?: string;
    text?: string;
    action?: action;
    start ?:  boolean;
    time ?: number
}



const Toast = ({ title, text, action, start = true, time = 5000}: ToastProps) => {

    const [isOpen, setOpen] = useState(start);

    useEffect(() => {
        setOpen(start);
    }, [start])

    useEffect(() => {
            const timer = setTimeout(() => setOpen(false), time);
        return () => clearTimeout(timer);
    }
    , [isOpen])

    return (
        (isOpen ? 
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent : 'space-around' }}  className={styles.toast}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft : '1rem' }} >
                <p style={{ fontSize: '14px' }} ><b>{title}</b></p>
                <p style={{ marginTop: '-1rem', fontSize: '14px' }}>{text}</p>
            </div>
            <div style={{ flexShrink: 0, marginTop : '0.5rem' }}>
                <Button factory='primary' onClick={action?.CallbackAction}>action.name</Button>
            </div>
        </div>
        : null
        )

    )
}

export default Toast;