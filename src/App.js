import './App.css'
import React, { useState } from 'react'

import { encode, decode } from 'js-base64'

import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/addon/display/autorefresh'
import 'codemirror/addon/comment/comment'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/keymap/sublime'
import './themes/dark.css'

function App () {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('js')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const languageCodes = {
    "c": 50,
    "c++": 54,
    "c#": 51,
    "java": 62,
    "js": 63,
    "python2": 70,
    "python": 71,
    "ts": 74
  }

  const mode = (language === 'python2') ? 'python' : language

  const compileCode = async () => {
    setLoading(true)

    const encodedCode = encode(code)

    const body = {
      'language_id': languageCodes[language],
      'source_code': encodedCode,
      'stdin': 'SnVkZ2Uw'
    }

    const res = 
    await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*", {
      'method': 'POST',
      'mode': 'cors',
      'headers': {
        'content-type': 'application/json',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'x-rapidapi-key': '61fe7c62d2msh25a9210654659d5p16fd9djsn76a3a8332105'
      },
      'body': JSON.stringify(body)
    })

    const json = await res.json()
    const output = decode(json.stdout)

    setLoading(false)
    setResult(output)
  }

  return (
    <div className='container'>
      <div className='ui-bar'>
        <select className='language-selector' onChange={(e) => { setLanguage(e.target.value) }}>
          <option value='js'>JavaScript</option>
          <option value='ts'>TypeScript</option>
          <option value='python2'>Python 2</option>
          <option value='python'>Python 3</option>
          <option value='c#'>C#</option>
          <option value='c'>C</option>
          <option value='c++'>C++</option>
          <option value='java'>Java</option>
        </select>
        
        <button onClick={compileCode}>Compile</button>

      </div>

      <div className='ide'>
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
              mode: mode
            }}
          />
        </div>
        
        <div className='output'>
          {loading && 
            <p>Loading...</p>
          }
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default App
