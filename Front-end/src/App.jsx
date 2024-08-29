import { useState } from 'react'
import {Route, Routes, HashRouter } from 'react-router-dom';
import './App.css'
import Intro from './components/Intro';
import L_login from './L_login';
import T_login from './T_login';
import L_signup from './L_signup';
import T_signup from './T_signup';
import L_Home from './components/L_Home';
import T_Home from './components/T_Home';
import T_Dash from './components/T_Dash';
import T_Lease from './components/T_Lease';
import T_Maint from './components/T_Maint';
import T_Finance from './components/T_Finance';
import T_Com from './components/T_Com';
import T_Doc from './components/T_Doc';
import T_Prof from './components/T_Prof';
import L_Dash from './components/L_Dash';
import L_Prop from './components/L_Prop';
import L_Maint from './components/L_Maint';
import L_Finance from './components/L_Finance';
import L_Com from './components/L_Com';
import L_Doc from './components/L_Doc';
import L_Prof from './components/L_Prof';

function App() {
  

  return (
    <>
      <div className='' >
      <HashRouter>
      <Routes>
        <Route path="/" element={<><Intro/></>} />
        <Route path="/L_signup" element={<><L_signup/></>} />
        <Route path="/T_signup" element={<><T_signup/></>} />
        <Route path="/L_login" element={<><L_login/></>} />
        <Route path="/T_login" element={<><T_login/></>} />
        <Route path="/T_Dash" element={<><T_Home/><T_Dash/></>} />
        <Route path="/T_Lease" element={<><T_Home/><T_Lease/></>} />
        <Route path="/T_Maint" element={<><T_Home/><T_Maint/></>}/>
        <Route path="/T_Finance" element={<><T_Home/><T_Finance/></>}/>
        <Route path="/T_Com" element={<><T_Home/><T_Com/></>}/>
        <Route path="/T_Doc" element={<><T_Home/><T_Doc/></>}/>
        <Route path="/T_Prof" element={<><T_Home/><T_Prof/></>}/>
        <Route path="/L_Dash" element={<><L_Home/><L_Dash/></>} />
        <Route path="/L_Prop" element={<><L_Home/><L_Prop/></>} />
        <Route path="/L_Maint" element={<><L_Home/><L_Maint/></>} />
        <Route path="/L_Finance" element={<><L_Home/><L_Finance/></>} />
        <Route path="/L_Com" element={<><L_Home/><L_Com/></>} /> 
        <Route path="/L_Doc" element={<><L_Home/><L_Doc/></>} /> 
        <Route path="/L_Prof" element={<><L_Home/><L_Prof/></>} /> 

      </Routes>
      </HashRouter>
    </div>        
    </>
  )
}

export default App
