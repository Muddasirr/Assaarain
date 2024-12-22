import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactForm = () => {
  const [userType, setUserType] = useState('supplier');

  return (
    <Box sx={{ padding: 4, bgcolor: '#EFF8FF', minHeight: '100vh' }}>
      <Typography fontWeight={'700'} fontSize={'44px'} align="center" sx={{color:'#003B6D'}} gutterBottom>
        Call Us or Fill the Form
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Get in touch with us easily. Whether you have questions, feedback, or inquiries, we're here to assist you.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  +968 1234 5678
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Don't hesitate to contact us!
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Working Time
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Company Headquarters
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  123 Main Street, Muscat, Oman
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

     
        <Grid item xs={12} md={8}>
          <Box sx={{ p: 3 }}>
            <RadioGroup
              row
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              sx={{ mb: 3 }}
            >
              <FormControlLabel value="supplier" control={<Radio />} label="I am a Supplier" />
              <FormControlLabel value="retailer" control={<Radio />} label="I am a Retailer" />
            </RadioGroup>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained"  sx={{borderRadius:0,bgcolor:'#003B6D'}}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
