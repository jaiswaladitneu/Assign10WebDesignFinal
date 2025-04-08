import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyShowcase from "./pages/CompanyShowcase";
import AddJob from "./pages/AddJob";
import AdminUsers from "./pages/AdminUsers";
import PrivateRoute from "./components/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import { useSelector } from "react-redux";




function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log("🔥 App.js boot state:", { user, isAuthenticated });
  return (
    
    <Router>
      <Navbar /> {/* ✅ This renders the top navigation bar */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/jobs"
          element={
            <PrivateRoute role={"employee"}>
              <JobListings />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-job"
          element={
            <PrivateRoute role="admin">
              <AddJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <PrivateRoute role="admin">
              <AdminUsers />
            </PrivateRoute>
          }
        />



        <Route path="/contact" element={<Contact />} />
        <Route path="/companies" element={<CompanyShowcase />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} />
      </Routes>
    </Router>
  );
}


export default App;
