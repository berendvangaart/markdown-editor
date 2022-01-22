import React, {FC} from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/midnight.css'
import 'codemirror/mode/markdown/markdown'
import {Controlled} from "react-codemirror2";

type EditorProps = {
    value: string,
    onChange: Function
}

const Editor: FC<EditorProps> = ({value,onChange}) => {

    const handleChange = (editor: any, data: any, value: string) => {
        console.log(data)
        onChange(value)
    }

    return (
        <>
            <h1>hello editor</h1>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "markdown",
                    lineNumbers: true,
                    theme: 'midnight'
                }}
            />
        </>
    );
};

export default Editor;