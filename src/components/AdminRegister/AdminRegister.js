import React, { useState } from "react"
import "./AdminRegister.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const AdminRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const AdminLogin = () => {
            navigate("/AdminLogin")
    }

    

    const collectDate = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/AdminRegister',{name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        
        AdminLogin();
        // result = await result.json;
        // localStorage.setItem("user", JSON.stringify(result));
        // console.log(result);
    }


    return (
        <div className="register">
            <form onSubmit={collectDate} >
                <h2>Admin SignUp Form</h2>
                <div>
                   <label>UserName</label>
                   <input className="input"
                   type="text" 
                   value={name}
                   onChange={(e) => setName(e.target.value)}/> 
                </div>
                <div>
                    <label>Email :</label>
                    <input className="input"
                    type="email" 
                    value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input className="input"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="button" type="submit" onSubmit={() =>AdminLogin()}> Submit</button>
                
            </form>
        </div>
    )
};

export default AdminRegister;