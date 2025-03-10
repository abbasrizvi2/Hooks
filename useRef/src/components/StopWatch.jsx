import { useEffect, useState } from "react"


const StopWatch = () => {

    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    
 
    useEffect(() => {
        if (!isRunning) {
            console.log("hit stop")
            return
        }

       setInterval(() => {
            setTime((prev)=>prev + 1)
        },1000)

        // return ()=> clearInterval(intervalTime) //previous interval ko khali krte chalo nhi toh pile up hota rhega wo
    },[isRunning])
 
   
  return (
      <div>
          <div>
          <h1>StopWatch
              </h1>
             
              </div>

          <h2>Start :{time}</h2>
          <button onClick={()=>setIsRunning(true)}>Start</button>
          <hr></hr>
          
          <h2>Stop :{time}</h2>
          <button onClick={()=>setIsRunning(false)}> Stop</button>
          <hr></hr>
          <h2>Reset :{time}</h2>
          <button onClick={() => { setTime(0); setIsRunning(false)}}>Reset</button>
         
    </div>
  )
}

export default StopWatch
