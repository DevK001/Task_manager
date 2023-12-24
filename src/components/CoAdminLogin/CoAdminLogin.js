import React, {useState} from "react"

import "./CoAdminLogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // const home = () => {
    //     navigate("./Homepage1")
    // }
    const CoAdminRegister = () => {
        navigate("/CoAdminRegister")
}


    // const CoAdminHome = (val) => {
    //     navigate(`/CoAdminHome/val`)
    // }
    const collectDate = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/CoAdminLogin',{email, password})
        .then(result => {
            console.log(result)
            if(result.data.status ==="success"){
                console.log(result.request.statusText)
                navigate(`/CoAdminHome/${result.data.userId}`)
                // CoAdminHome()
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
                <h2>Co-Admin Login Page</h2>
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
                <button className="button" type="submit" > Submit</button>
                <div>
                    <h5>Don't have an account?</h5>
                    <button className="button" onClick={ () =>CoAdminRegister()}> Create Co-Admin account</button>
                </div>
                
            </form>
        </div>
    )
}

export default UserLogin;