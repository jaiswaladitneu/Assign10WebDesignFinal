// src/pages/Contact.js
import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography>
              📍 123 Job Street, Boston, MA 02115
              <br />
              📞 +1 (617) 555-1234
              <br />
              ✉️ support@jobportal.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
