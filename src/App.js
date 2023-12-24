// import "./App.css";
import UserHomepage from "./components/Userhomepage/UserHomepage";
import UserLogin from "./components/UserLogin/UserLogin";
import Register from "./components/Register/Register";
import CoAdminRegister from "./components/CoAdminRegister/CoAdminRegister";
import CoAdminLogin from "./components/CoAdminLogin/CoAdminLogin";
import CoAdminHome from "./components/CoAdminHome/CoAdminHome";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminRegister from "./components/AdminRegister/AdminRegister";
import AdminPanel from "./components/AdminPanel/AdminPanel"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/AdminPanel/UpdateUser";
import NavBar from "./components/NavBar/NavBar";
import UserProfile from "./components/UserProfile/UserProfile"
import CoAdminProfile from "./components/Co-Admin-profile/CoAdminProfile";
import Home from "./components/HomePage/Home"
// import { useState } from "react";

const App = () =>{
  // const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
         <Route path='/Register' element={<Register/>}></Route>
         <Route path='/UserLogin' element={<UserLogin/>}></Route>
         <Route path='/UserHomepage/:id' element={<UserHomepage/>}></Route>
         <Route path='/CoAdminHome/:id' element={<CoAdminHome/>}></Route>
         <Route path='/CoAdminLogin' element={<CoAdminLogin/>}></Route>
         <Route path='/CoAdminProfile/:id' element={<CoAdminProfile/>}></Route>
         <Route path='/CoAdminRegister' element={<CoAdminRegister/>}></Route>
         <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
         <Route path='/AdminRegister' element={<AdminRegister/>}></Route>
         <Route path='/AdminPanel' element={<AdminPanel/>}></Route>
         <Route path="/updateuser/:id" element={<UpdateUser />} />
         <Route path="/UserProfile/:id" element={<UserProfile/>}></Route>
         <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
