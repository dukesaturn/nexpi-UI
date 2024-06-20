import { useEffect } from "react";
import styles from "./styles/Modal.module.css";
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children : React.ReactNode;
    style ?: React.CSSProperties;
}

const Modal = ({ children, isOpen, onClose , style} : ModalProps) => {
    
    useEffect(() => {
        if(isOpen) {
            document.body.classList.add(styles.modalOpen);
        } else {
            document.body.classList.remove(styles.modalOpen);
            onClose();
        }
    }, [isOpen]);
    
    if(isOpen){
        return (
            <div style={style} className={styles.modal}>
                {children}
            </div>
        )
    }
    return null;
}

export default Modal;