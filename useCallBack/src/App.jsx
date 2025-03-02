import { memo, useCallback, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function handleIncrease() {
  //   setCount(count+1)
  // }

  const MemoizeFn = useCallback(function () {
    // setCount(count+1) //--> react ne iske count = 0 ko memorize kr liya h isiliye ye kaam nhi krega
    setCount((prev)=>prev+1)
  },[])

  return (
      <div>
      <h1>useCallBack()</h1>

      <div className='my-10'>Count is : {count}</div>

      {/* <MemoizeChild increment={handleIncrease}/> */}
      <MemoizeChild increment={MemoizeFn}/>
      </div>   
  )
}

// *** React component function  render on 2 condition either state has been changed or prop has been modified

//** Problem --> while clicking on Imcrement button our increment prop received by Child compo doesn't change
//* so why it has been rendering */
// **Answer --> React says if parent compo render so it will also render child compo no matters what

//** Solution--> agar koi component render kr rha h due to function so use function ko aap memoize kr skte ho */
// *** by using function useCallback()

function Child({ increment }) {
  console.log("Child fun called") // this function will call after clicking oin button howEver our prop has not been changed
  return (
      <div>
      <button onClick={increment}>Count Increment</button>
      </div>
    )
}
   
const MemoizeChild = memo(Child) // we are memoizing the component

export default App
