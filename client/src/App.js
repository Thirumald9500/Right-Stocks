import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/register";
import Home from "./components/home";
import Sell from "./components/sellbuy";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sell' element={<Sell/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
