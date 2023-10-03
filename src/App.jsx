import React from 'react';
import './App.scss';
import { QuestionAnswer } from './components/questionAnswer';
import bgImage from './assets/images/bg1.jpg'
import { NavLink, Route, Routes, Link } from "react-router-dom";
import { routerPages } from "./router"
import { UserDetails } from "../src/components/userDetail";


function handleClick (){
  console.log('Vazgen');
}

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImage})`}}>
      <button onClick={handleClick}>
      User Details
      <Link to={routerPages.DETAILS}/>
      </button>
      <button>
        Back 
        <Link to={routerPages.HOME}/>
      </button>
  



      <Routes>
        <Route path={routerPages.DETAILS} element={<UserDetails />} />
        <Route path={routerPages.HOME} element={<QuestionAnswer />} />
      </Routes>
    </div>
  );
}

export default App;
