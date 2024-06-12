import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const _mapProps = (props) => ({...props,
    remarkPlugins: [RemarkMathPlugin],
    rehypePlugins: [rehypeKatex],
    components: {
        h1: ({ node, ...props }) => <h1 style={{ color: 'var(--nxp-secondary-color)' }} {...props} />,
    },
});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;