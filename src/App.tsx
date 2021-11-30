import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navi from "./Navi";
import Home from "./pages/Home";
import List from "./pages/List";
import Apply from "./pages/Apply";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Navi />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/apply' element={<Apply />}/>
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
