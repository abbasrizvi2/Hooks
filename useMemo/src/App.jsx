import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count+1)
  }

  function sumUpTo(n) {
    console.log("sumUpto" ,n)
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum = sum + i
    }
    return sum;
  }

  // const sum1000 = sumUpTo(1000); //--> onClicking count these functions are calling so we don't need them to be called always
  // const sum10000 = sumUpTo(10000) //-> we will use useMemo now

  // ******* useMemo already calculate value ko cache kr leta h so it won't calculate it again and again
  //** like useEffect takes 2 arguments callbackFunction and dependency array */

  // const sum1000 = useMemo(()=> {
  //   return sumUpTo(1000)
  // },[])
  // const sum10000 = useMemo(function () {
  //   return sumUpTo(10000)
  // },[])

  //* another easy way to write above code is

  // const [sum1000, sum10000] = useMemo(() => {
  //   return [sum1000,sum10000]
  // },[]) //--> due to testing i commented this


  //** when to use useMemo so basically when you array element are more than 10000  */
  // ***** and when ur calculation speed is greater than 1ms function takes >1ms

  console.time('Test') //--> timer start from here

  sumUpTo(1000)

  console.timeLog('Test') //--> tells us about time taken to calculate


  return (
      <div>
      <button onClick={handleClick}>Count is : {count}</button>
      {/* <h2>Sum of first 1000 is : {sum1000}</h2>
      <h2>Sum of forts 100000 is : {sum10000}</h2> */}
      </div>
     
   
  )
}

export default App
