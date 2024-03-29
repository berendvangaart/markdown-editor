import React, {FC} from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import './editor.css'
import {Controlled} from "react-codemirror2";

type EditorProps = {
    value: string,
    onChange: Function
}

const Editor: FC<EditorProps> = ({value,onChange}) => {

    const handleChange = (editor: any, data: any, value: string) => {
        console.log(value)
        onChange(value)
    }

    return (
        <div className={'editorcontainer'}>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "markdown",
                    lineNumbers: true,

                    highlightFormatting: true,
                }}
            />
        </div>
    );
};

export default Editor;