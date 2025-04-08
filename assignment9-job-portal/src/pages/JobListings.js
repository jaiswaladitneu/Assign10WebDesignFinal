// src/pages/JobListings.js
import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
      salary: "$100,000 - $120,000",
      lastUpdated: "Last updated 2 days ago",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
      salary: "$100,000 - $120,000",
      lastUpdated: "Last updated 1 day ago",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    description:
      "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
      salary: "$100,000 - $120,000",
      lastUpdated: "Last updated 4 hours ago",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 4,
    title: "Data Scientist",
    description:
      "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
      salary: "$100,000 - $120,000",
      lastUpdated: "Last updated 3 days ago",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Customer Support Representative",
    description:
      "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
      salary: "$100,000 - $120,000",    
      lastUpdated: "Last updated 6 hours ago",
    applyLink: "https://example.com/apply/customer-support-representative",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
      salary: "$100,000 - $120,000",
      lastUpdated: "Last updated 1 week ago",
    applyLink: "https://example.com/apply/project-manager",
  },
];

function JobListings() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid item xs={12} md={6} lg={4} key={job.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Salary: {job.salary}
                  {job.description}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {job.lastUpdated}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={job.applyLink}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default JobListings;
