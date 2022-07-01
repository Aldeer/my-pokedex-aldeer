import { useEffect } from "react";
import useCallAPI from "./hooks/useCallAPI";


function App() {
  const {data, loading, error} = useCallAPI(1);
  useEffect(() => {
    console.log(data);
    console.log(loading);
  },[loading])
  
  return(
    <div className="container">
    </div>
  )
}

export default App;