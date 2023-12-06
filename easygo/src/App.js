import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SigninPageTB from './pages/signintb';
import SigninPageLF from './pages/signinlf';
import SigninPageCU from './pages/signincu';
import SigninPageEBT from './pages/signinebt';
import SigninPageHAF from './pages/signinhaf';
import TravelBuddyPage from './pages/travelbuddy';
import LostAndFoundPage from './pages/lostandfound';
import CollegeUpdatesPage from './pages/collegeupdates';
import OtherServicesebtPage from './pages/otherservicesebt';
import OtherServiceshafPage from './pages/otherserviceshaf';
import EditCPage from './pages/editc';
import AddCPage from './pages/addc';
import EditLPage from './pages/editl';
import AddLPage from './pages/addl';
import EditTPage from './pages/editt';
import AddTPage from './pages/addt';
import EditHPage from './pages/edith';
import AddHPage from './pages/addh';
import EditTkPage from './pages/edittk';
import AddTkPage from './pages/addtk';
import DashboardPage from './pages/DashboardPage';
import EmailverfPage from './pages/emailverf';
import PassverfPage from './pages/passverf'
import ForgotpassPage from './pages/Passedit';
// import Dashboard from './pages/Dashboard';
function App() {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/signin" element={<SigninPage/>} exact />
          <Route path="/signup" element={<SignupPage/>} exact />
          <Route path="/editc" element={<EditCPage/>} exact />
          <Route path="/addc" element={<AddCPage/>} exact />
          <Route path="/editl" element={<EditLPage/>} exact />
          <Route path="/addl" element={<AddLPage/>} exact />
          <Route path="/editt" element={<EditTPage/>} exact />
          <Route path="/addt" element={<AddTPage/>} exact />
          <Route path="/edith" element={<EditHPage/>} exact />
          <Route path="/addh" element={<AddHPage/>} exact />
          <Route path="/edittk" element={<EditTkPage/>} exact />
          <Route path="/addtk" element={<AddTkPage/>} exact />
          <Route path="/signintb" element={<SigninPageTB/>} exact />
          <Route path="/signinlf" element={<SigninPageLF/>} exact />
          <Route path="/signincu" element={<SigninPageCU/>} exact />
          <Route path="/signinebt" element={<SigninPageEBT/>} exact />
          <Route path="/signinhaf" element={<SigninPageHAF/>} exact />
          <Route path="/travelbuddy" element={<TravelBuddyPage/>} exact />
          <Route path="/lostandfound" element={<LostAndFoundPage/>} exact />
          <Route path="/collegeupdates" element={<CollegeUpdatesPage/>} exact />
          <Route path="/otherservicesebt" element={<OtherServicesebtPage/>} exact />
          <Route path="/otherserviceshaf" element={<OtherServiceshafPage/>} exact />
          <Route path="/dashboard" element={<DashboardPage/>} exact />
          <Route path="/emailverf" element={<EmailverfPage/>} exact />
          <Route path="/passverf" element={<PassverfPage/>} exact />
          <Route path="/forgotpass" element={<ForgotpassPage/>} exact />

          

      </Routes>
    {/* <Home/> */}
    </Router>
  );
}

export default App;
