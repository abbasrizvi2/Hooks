import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/DashBoard.jsx'
import Chat from './components/Chat.jsx'
import StopWatch from './components/StopWatch.jsx'

createRoot(document.getElementById('root')).render(
 <>
   {/* <App /> */}
  {/* <Dashboard /> */}
    {/* <Chat /> */}
    <StopWatch/>
    </>
  
)
