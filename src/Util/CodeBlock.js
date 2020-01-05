import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function CodeBlock(props) {
    return (
        <SyntaxHighlighter language={props.language}>
            {props.value}
        </SyntaxHighlighter>
    )
}