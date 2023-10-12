import { Routes, Route } from "react-router-dom";
import './App.css'
import * as Pages from './pages';


function App() {


  return (
    <Routes>
      <Route index element={<Pages.Home />}></Route>

    
    </Routes>
  )
}

export default App
