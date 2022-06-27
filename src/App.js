//Components
import Homepage from "./pages/Homepage";

//bootstrap
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () =>{
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </Router>
  )
}

export default App;