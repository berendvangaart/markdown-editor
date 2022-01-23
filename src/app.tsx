import './app.css'
import Editor from "./components/editor/editor";
import {useState} from "react";

function App() {
  const [markdown, setMarkdown] = useState('')

  return (
    <div className={'app'}>
      <Editor value={markdown} onChange={setMarkdown}/>
    </div>
  );
}

export default App;
