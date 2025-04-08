import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Log the state values to the browser console
    console.log("Attempting login with:", { email, password });
    
    try {
      const res = await axios.post("http://localhost:3000/user/login", { email, password });
      dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
      
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      // Redirect based on role
      const userType = res.data.user.type;
      if (userType === "admin") {
        navigate("/add-job");
      } else {
        navigate("/jobs");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
