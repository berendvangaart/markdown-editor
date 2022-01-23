import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type ParserProps = {
    markdown: string
}

const Parser: FC<ParserProps> = ({markdown }) => {
    return (
        <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
    );
};

export default Parser;