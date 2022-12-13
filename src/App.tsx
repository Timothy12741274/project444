import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EmailConfirmation from "./pages/emailConfirmation";

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path={'/project444'} element={<Login/>}/>
          <Route path={'/project444/'} element={<Login/>}/>
          <Route path={'/'} element={<Login/>}/>
          <Route path={'/registration'} element={<Registration/>}/>
          <Route path={'project444/login'} element={<Login/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/email_confirmation'} element={<EmailConfirmation/>}/>
      </Routes>
    </div>
  );
}

export default App;
