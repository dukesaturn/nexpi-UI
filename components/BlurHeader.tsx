import Box from "./Box"
import Typography from "./Typography"
import styles from './styles/BlurHeader.module.css'

interface BlurHeaderProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const BlurHeader = ({ ...props }: BlurHeaderProps) => {
    return (
        <div
            className={styles.blurheader}
            style={props.style}
        >
            <Typography type='h1'>{props.children}</Typography>
        </div>)
}

export default BlurHeader;