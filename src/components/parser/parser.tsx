import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

type ParserProps = {
    markdown: string
}

const Parser: FC<ParserProps> = ({markdown}) => {
    return (
        <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}
                           components={{
                               code({node, inline, className, children, ...props}) {
                                   const match = /language-(\w+)/.exec(className || '')
                                   return !inline && match ? (
                                       <SyntaxHighlighter
                                           children={String(children).replace(/\n$/, '')}
                                           language={match[1]}
                                           PreTag="div"
                                           style={vscDarkPlus}
                                           {...props}
                                       />
                                   ) : (
                                       <code className={className} {...props}>
                                           {children}
                                       </code>
                                   )
                               }
                           }}
            >{markdown}</ReactMarkdown>
        </div>
    );
};

export default Parser;