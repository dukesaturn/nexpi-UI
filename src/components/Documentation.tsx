import React from 'react'
import Markdown from './Markdown'
import CodeBlock from './Codeblock'
import hljs from 'highlight.js';
import Box from './Box';


interface DocumentationProps {
    path: string;
    id?: string;
    children?: React.ReactNode[];
}

interface doc {
    payload: string;
    docType: number;
    lang: string;
    indexInline ?: number | undefined;
}


const Documentation = async ({ path, id, children }: DocumentationProps) => {

    const elaborateText = (text: string) => {
        const splitDocCodeString = '```';
        var crunchs = text.split(splitDocCodeString);
        var indexLine = 0;
        const supportedLanguages = hljs.listLanguages();
        supportedLanguages.push('inline');

        const newDoc = crunchs.map(
            (item: string, index: number) => {
                const tmp = supportedLanguages.find((elem) => elem === crunchs[index].split('\n')[0].trim())

                if (tmp !== undefined) {
                    
                    const arrayTmp = item.split(tmp);
                    if(tmp === 'inline') {
                        const tmpIndex = indexLine;
                        indexLine += 1;
                        return  {
                            payload : '',
                            docType : 2,
                            lang : '',
                            indexInline : tmpIndex
                        }
                    }
                    return {
                        payload: arrayTmp.slice(1).join(tmp),
                        docType: 1,
                        lang: tmp
                    }
                }
                return {
                    payload: item,
                    docType: 0,
                    lang: ''
                }

            }
        )

        return newDoc;

    }

    const res = await fetch(path);
    const data = await res.text();
    const doc = elaborateText(data);

    return (
        <Box id={id} >
            {doc.map((item, index) => {
                switch (item.docType) {
                    case 1:
                        return <CodeBlock key={index} language={item.lang} value={item.payload} />;
                    case 0:
                        return (
                            <div key={index} style={{ color: 'var(--nxp-primary-color)' }}>
                                <Markdown>{item.payload}</Markdown>
                            </div>
                        );
                    case 2:
                        return <>{children && item.indexInline !== undefined ? children[item.indexInline] : null}</>
                    default:
                            return null;
                }
            })}
        </Box>
    );




}

export default Documentation;