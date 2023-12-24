import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = ({ setLoginUser }) => {
  const nav = useNavigate();

  const navigate1 = () => {
    nav("/UserLogin");
  };

  const navigate2 = () => {
    const currentUrl = window.location.pathname;
    const userId = currentUrl.split("/").pop();
    nav(`/UserProfile/${userId}`);
  };

  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <div className="button" onClick={() => navigate1()}>
        Logout
      </div>
      <div className="button" onClick={() => navigate2()}>
        User profile
      </div>
    </div>
  );
};

export default Homepage;