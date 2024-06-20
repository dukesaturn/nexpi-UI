import Image from 'next/image';
import React from 'react';

interface ImgProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}

const Logo = ({ ...props }: ImgProps) => {
    return <Image width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100px', height: 'auto' }} { ...props } />;
}

export default Logo;