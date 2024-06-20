"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Box from './Box';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import React from 'react';



interface CodeBlockProps {
    language: string;
    value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
    }

    useEffect(() => {
        if (isCopied) {
            navigator.clipboard.writeText(value);
            setTimeout(() => {
                setIsCopied(false);
            }
                , 500);
        }
    }
        , [isCopied]);

    return (
        <Box>
            <Box style={{ border: '1px solid var(--nxp-secondary-shadow-color)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: 'var(--nxp-primary-color)', margin: '1rem', fontSize: '13px', fontFamily: 'var(--nxp-font-family)' }}>{language}</p>
                {
                    isCopied ?
                        <FaCheck
                            style={{ fill: 'var(--nxp-secondary-color)', strokeWidth: 0.5, fontSize: '1.5rem', margin: '0.7rem', cursor: 'pointer' }}
                            onClick={handleCopy} />
                        : <FaRegCopy
                            style={{ fill: 'var(--nxp-primary-color)', strokeWidth: 0.5, fontSize: '1.5rem', margin: '0.7rem', cursor: 'pointer' }}
                            onClick={handleCopy} />

                }
            </Box>
                
                <SyntaxHighlighter
                    language={language}
                    style={solarizedlight}
                    wrapLongLines
                    customStyle={{
                        opacity: "1",
                        border: '1px solid var(--nxp-secondary-shadow-color)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        backgroundColor : 'var(--npx-background-color)',
                        color : 'var(--nxp-primary-color)',
                    }}
                    codeTagProps={{
                        style: {
                            color: "var(---nxp-primary-color",
                        },
                    }}
                >
                    {value}
                </SyntaxHighlighter>


        </Box>

    );
};

export default CodeBlock;