// src/pages/CompanyShowcase.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/getAll");
        console.log("Raw response:", res.data);

        setCompanies(res.data.users); // Load all users (with and without images)
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Company Showcase
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company, index) => {
          console.log("Company:", company.email, "Image:", company.imagePath);

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                {company.imagePath && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:3000${company.imagePath}`}
                    alt={company.email}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{company.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;
