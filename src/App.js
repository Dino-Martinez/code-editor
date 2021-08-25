import './App.css'
import React from 'react';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';

function App () {
  const [code, setCode] = useState('')

  return (
    <div className='editor'>
      <CodeMirror
        value={code}
        onChange={(editor, data) => {
          setCode(editor.getValue())
        }}
        height='100%'
        width='100%'
        options={{
          theme: 'dark',
          keyMap: 'sublime',
          mode: 'jsx',
        }}
      />
    </div>
  )
}

export default App
