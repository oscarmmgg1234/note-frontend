import logo from './logo.svg';
import './App.css';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NoteHub from "./Pages/NoteHub";
import moment from 'moment';

export const core_context = createContext();

function App(props) {
  
  const [UserInfo, setUserInfo] = useState({ID: "", FName: "", LName: ""});
  const [sys_date, set_sys_date] = useState(moment().format())

  useEffect(()=>{
    setInterval(()=>{set_sys_date(moment().format());
    }, 10000)}
    , [])

  return (
    <core_context.Provider value={{UserInfo,setUserInfo, sys_date}}>
    <BrowserRouter>
    <Routes > 
          <Route path="/"  element={<Login/>} ></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/NoteHub" element={<NoteHub/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    </core_context.Provider>
  );
}

export default App;
