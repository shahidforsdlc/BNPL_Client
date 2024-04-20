import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stacks from './Pages/Stacks';
import PersonalInfo from './Pages/PersonalInfo';
import EmploymentStatus from './Pages/EmploymentStatus';
import AccountProfile from './Pages/AccountProfile';
import Loading from './Pages/Loading';
import Success from './Pages/Success';
import Status from './Pages/Status';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Stacks/>} />
        <Route path="/personalInfo" element={<PersonalInfo/>} />
        <Route path="/employmentstatus" element={<EmploymentStatus/>} />
        <Route path="/accountProfile" element={<AccountProfile/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/sucess" element={<Success/>} />
        <Route path="/status" element={<Status/>} />
        </Routes>
    </Router>
  )
}

export default App
