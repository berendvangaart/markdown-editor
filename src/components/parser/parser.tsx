import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

type ParserProps = {
    markdown: string
}

const Parser: FC<ParserProps> = ({markdown}) => {

    const val = markdown.replace(/(^[ \t]*\n)/gm, "&nbsp; \n") // makes line breaks possible
    return (
        <div>
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}
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
              children={val} />
        </div>
    );
};

export default Parser;