import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError(); //ye ek hook h ye hume error info deta h 
    console.log(err) // you will see object there having the configuration of errors
  return (
    <div>
          <h1>OOPPSSS</h1>
          <h2>{err.status}</h2>
    </div>
  )
}

export default Error