import React from "react"
import "./CoAdminHome.css"
import { useNavigate } from "react-router-dom"

const CoAdminHome = ({setLoginUser}) => {

    const nav = useNavigate()

    const navigate = () => {
            nav("/CoAdminLogin")
    }

    const navigate2 = () => {
        const currentUrl = window.location.pathname;
    const userId = currentUrl.split("/").pop();
        nav(`/CoAdminProfile/${userId}`)
}

    return (
        <>
        <div className="homepage">
            <h1>Hello Co-Admin</h1>
            <div className="button" onClick={() =>navigate()} >Logout</div>
            <div className="button" onClick={() =>navigate2()} >CoAdminProfile</div>
        </div>
         
       </> 
    )
}

export default CoAdminHome