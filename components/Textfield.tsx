import styles from './styles/Textfield.module.css';
import React from 'react';

interface TextfieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    type?: string;
    autoComplete?: string;
}

const Textfield = ({ ...props }: TextfieldProps) => {
    return (
        <div>
            {props.label ?
                <>
                    <label className={styles.label} >{props.label}</label>
                    <br />
                </>
                : null}

            <input autoComplete={props.autoComplete} type={props.type || 'text'} className={styles.input} style={props.style} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </div>
    );
}

export default Textfield;
