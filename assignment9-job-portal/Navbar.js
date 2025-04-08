import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log("🧠 Navbar auth state:", { user, isAuthenticated });


  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  console.log("Auth state:", { user, isAuthenticated });
  console.log("🟢 user.type =", user?.type);


  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>

        {isAuthenticated && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/companies">Companies</Button>

            {/* Admin-only buttons */}
            
            {/* {user?.type === "admin" && ( */}
            {JSON.stringify(user?.type) === '"admin"' && (
              <>
                <Button color="inherit" component={Link} to="/add-job">Add Job</Button>
                <Button color="inherit" component={Link} to="/admin-users">Users</Button>
              </>
            )}

            {/* Username + type */}
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              {user?.name} ({user?.type})
            </Typography>

            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
