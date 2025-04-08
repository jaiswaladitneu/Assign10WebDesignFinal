import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddJob = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: '',
  });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Token not found. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/job/create/job',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        // Open the snackbar to show success message.
        setOpenSnackbar(true);
        // Optionally, you can reset the form or redirect after a delay.
        setFormData({
          companyName: '',
          jobTitle: '',
          description: '',
          salary: '',
        });
        // For example, redirect after 1.5 seconds:
        setTimeout(() => {
          navigate('/jobs');
        }, 1500);
      }
    } catch (err) {
      console.error("Error creating job:", err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to create job. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Add New Job
        </Typography>
        {error && <Typography color="error" gutterBottom>{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Create Job
          </Button>
        </form>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Job created successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddJob;
