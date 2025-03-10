import { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [text, setText] = useState('');


    
  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
    }
    useEffect(() => {
        console.log("rendering")
    },)

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
