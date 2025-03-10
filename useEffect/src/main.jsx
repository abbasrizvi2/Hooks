import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import DashBoard from './DashBoard.jsx';
import Error from './Error.jsx';



const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dasboard',
        element: <DashBoard/>
      }
    ],
    errorElement: <Error/>,
  },
 

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);