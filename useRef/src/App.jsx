import { useEffect, useState,useRef } from 'react'
import './App.css'
useState
function App() {

  const [count, setCount] = useState(0)

  const btnRef = useRef(0)

  const handleClick = () => {
    btnRef.current = btnRef.current + 1
    // setCount((prev) => prev + 1)
  }


  // it runs on every render
  useEffect(() => {
    console.log("Screen Render on count" ,count)
  },)

  return (
    
      <div>
      <h3>useRef</h3>
      <br></br>
      <h3>Set Count is : {count}</h3>
      <br></br>
      <button onClick={handleClick} ref={btnRef}>Increment</button>
      </div>
   
  )
}

export default App
