import React, {useState} from "react"
import "./AdminLogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // const home = () => {
    //     navigate("./Homepage1")
    // }
    const AdminRegister = () => {
        navigate("/AdminRegister")
}




    const collectDate = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/AdminLogin',{email, password})
        .then(result => {
            console.log(result)
            if(result.data ==="success"){
                navigate("/AdminPanel")
            }
        })
        .catch(err => console.log(err))
        
        // result = await result.json;
        // localStorage.setItem("user", JSON.stringify(result));
        // console.log(result);
    }


    return (
        <div className="login">
            <form onSubmit={collectDate} >
                <h2>Admin Login Page</h2>
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
                <button className="button" type="submit" onClick={()=> AdminLogin()} > Submit</button>
                <div>
                    <h5>Don't have an account?</h5>
                    <button className="button" onClick={ () =>AdminRegister()}> Create Admin account</button>
                </div>
                
            </form>
        </div>
    )
}

export default AdminLogin;