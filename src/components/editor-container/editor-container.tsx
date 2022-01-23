import React, {useState} from 'react';
import Editor from "../editor/editor";
import Parser from "../parser/parser";

const EditorContainer = () => {
    const [markdown, setMarkdown] = useState('')


    return (
        <div>
            <Editor value={markdown} onChange={setMarkdown}/>
            <Parser markdown={markdown}/>
        </div>
    );
};

export default EditorContainer;