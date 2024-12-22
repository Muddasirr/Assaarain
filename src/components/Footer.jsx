import React from 'react';
import { Box, Container, Grid, TextField, Button, Typography, Link } from '@mui/material';
import { Instagram, Twitter, Facebook, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#003B6D', color: '#fff', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Delivered on time with no hassle.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Link href="#" color="inherit" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" color="inherit" aria-label="Twitter">
                <Twitter />
              </Link>
              <Link href="#" color="inherit" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Keep Up To Date
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                
                placeholder="Email Address"
                size="small"
                
                sx={{ border:'white' ,color:'#fffff', borderRadius: 1,width:'75%',
                  '& .MuiInputBase-input::placeholder': {
      color: '#ffffff', 
    },
                }}
              />
              <Button    sx={{ borderRadius: 0,bgcolor:'#00AEEF',color:'#fff'}}>
                Sign Me Up!
              </Button>
            </Box>
          </Grid>
          
        </Grid>

    
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ mt: 4, borderTop: '1px solid #fff', pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Copyright © 2023 - Assarain Food Products L.L.C. Design & Developed by Codevative
          </Typography>
          <Box >
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Privacy
            </Link>
            /
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Terms & Conditions
            </Link>
            /
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Site Map
            </Link>
            /
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
