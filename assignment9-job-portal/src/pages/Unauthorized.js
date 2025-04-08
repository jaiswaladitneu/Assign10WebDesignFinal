import React from "react";
import { Typography, Container } from "@mui/material";

const Unauthorized = () => {
  return (
    <Container sx={{ marginTop: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        🚫 Access Denied
      </Typography>
      <Typography variant="body1">
        You do not have permission to view this page.
      </Typography>
    </Container>
  );
};

export default Unauthorized;
