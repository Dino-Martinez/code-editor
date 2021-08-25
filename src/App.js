import './App.css'
import React, { useState } from 'react'

import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/addon/display/autorefresh'
import 'codemirror/addon/comment/comment'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/keymap/sublime'

function App () {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('js')

  return (
    <div className='container'>
      <select onChange={(e) => { setLanguage(e.target.value) }}>
        <option value='js'>JavaScript</option>
        <option value='python'>Python</option>
        <option value='c#'>C#</option>
        <option value='c'>C</option>
        <option value='c++'>C++</option>
        <option value='jsx'>JSX</option>
        <option value='java'>Java</option>
      </select>

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
            mode: language
          }}
        />
      </div>
    </div>
  )
}

export default App
