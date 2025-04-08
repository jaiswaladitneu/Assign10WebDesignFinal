// src/pages/About.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        About the Job Portal
      </Typography>

      <Typography variant="body1" textAlign="center" maxWidth="md" mx="auto" mb={4}>
        This Job Portal is a full-stack web application built to help job seekers connect with top companies.
        It supports user authentication, job listings, and company showcases with image uploads.
      </Typography>

      <Grid container spacing={3}>
        {/* Feature Cards */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 1 }}>
              <CodeIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Built with MERN</Typography>
              <Typography variant="body2">
                React, Node.js, Express, MongoDB — a powerful combination for modern apps.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Avatar sx={{ bgcolor: "secondary.main", mx: "auto", mb: 1 }}>
              <BusinessIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Company Gallery</Typography>
              <Typography variant="body2">
                Upload and showcase companies with dynamic image support via backend APIs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 2, textAlign: "center" }}>
            <Avatar sx={{ bgcolor: "success.main", mx: "auto", mb: 1 }}>
              <SchoolIcon />
            </Avatar>
            <CardContent>
              <Typography variant="h6">Student Project</Typography>
              <Typography variant="body2">
                Developed by Aditi Jaiswal for mastering full-stack development with assignments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Box textAlign="center">
        <Typography variant="h6" gutterBottom>
          Version 1.0.0 — Developed with ❤️ by Aditi Jaiswal
        </Typography>
        <Typography variant="body2">
          More features coming in Assignment 10: job filtering, resume uploads & more!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
