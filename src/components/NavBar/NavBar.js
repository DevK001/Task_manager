// Navbar.js

import React from "react";
import './NavBar.css'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()

    const userLogin = () => {
        navigate("/userLogin")
    }
    const CoAdminLogin = () => {
        navigate("/CoAdminLogin")
    }
    const AdminLogin = () => {
        navigate("/AdminLogin")
    }
    const home = () => {
      navigate('/')
    }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
  <a class="nav-link" onClick={()=>home()}>User Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" onClick={() => userLogin()}>UserLogin <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" onClick={() => CoAdminLogin()}>CoAdminLogin <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" onClick={() => AdminLogin()}>AdminLogin <span class="sr-only">(current)</span></a>
      </li>
      {/* <li class="nav-item active">
        <a class="nav-link" onClick={() => nav()}>UserLogin <span class="sr-only">(current)</span></a>
      </li> */}
      </ul>
   
  </div>
</nav>
  );
};

export default Navbar;
