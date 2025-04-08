// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h1>Welcome to the Job Portal!</h1>
      <p>You are logged in ✅</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
