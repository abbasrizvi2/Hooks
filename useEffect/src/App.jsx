
import { useEffect} from 'react'
import './App.css'
import DashBoard from './DashBoard'
import { Link } from 'react-router'



function App() {
  
  // useEffect(() => {
  //  setInterval(() => {
  //     console.log("rendering")
  //   })
  // })

  return (
    <div>
      Yes
       <Link to="/dashboard">Dashboard</Link>;
      </div>
     
  )
}

export default App
