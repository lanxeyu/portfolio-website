import { Routes, Route } from "react-router-dom";
import * as Pages from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <Routes>
      <Route index element={<Pages.Home />}></Route>

    
    </Routes>
  )
}

export default App
