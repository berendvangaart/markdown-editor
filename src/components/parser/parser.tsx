import React, {FC} from 'react';
import ReactMarkdown from 'react-markdown'

type ParserProps = {
    markdown: string
}

const Parser: FC<ParserProps> = ({markdown }) => {
    return (
        <div>
            <ReactMarkdown >{markdown}</ReactMarkdown>
        </div>
    );
};

export default Parser;