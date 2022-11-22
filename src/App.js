import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [voice, setVoice] = useState(false);
  let [text, setText] = useState('');

  let updateVoice = () => {
    setVoice((current) => !current);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {voice && <span>Start Speaking..Im Listening</span>}
      <br />
      <div onClick={updateVoice} className="voice">
        <span>Voice {voice ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}
