import React, {useState} from 'react';
import Editor from "../editor/editor";
import Parser from "../parser/parser";
import css from './editor-container.module.scss'

const EditorContainer = () => {
    const [markdown, setMarkdown] = useState('')


    return (
        <div className={css.container}>
            <div className={css.editorbox}>
                <Editor value={markdown} onChange={setMarkdown}/>
            </div>
            <div className={css.editorbox}>
                <Parser markdown={markdown}/>
            </div>


        </div>
    );
};

export default EditorContainer;