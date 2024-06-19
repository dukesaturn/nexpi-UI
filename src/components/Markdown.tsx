import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Image from "next/image";

interface HeadingProps {
    node: any; 
}

const _mapProps = (props: any) => ({
    ...props,
    remarkPlugins: [RemarkMathPlugin],
    rehypePlugins: [rehypeKatex],
});

const Markdown = (props: any) => <div style={{color : 'var(--nxp-primary-color)'}}><ReactMarkdown {..._mapProps(props)} /></div>;

export default Markdown;