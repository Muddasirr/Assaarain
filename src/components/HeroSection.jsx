import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import bgimage from '../assets/background.png';
import bgplay from '../assets/bgplay.png'
import play from '../assets/play.png'

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        
      }}
      
    >

<Box display='flex'  p={8} width='60%' height='70%'>
  <Box width='75%' bgcolor={'white'} > 
    <Box sx={{ p: { xs: 3, md: 8 } }}>
            <Typography
              variant="h6"
              color="#00AEEF"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Assarain Food Products L.L.C.
            </Typography>
            <Typography
             fontSize={'36px'}
              color="#06163A"
              gutterBottom
              sx={{ fontWeight: 'bold', lineHeight: 1.2 }}
            >
              Oman Best Food Distributor <br />
              Natural, Organic, Specialty, <br />
              And Fresh.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                backgroundColor: '#003B6D', 
                '&:hover': { backgroundColor: '#005bb5' },
              }}
            >
              Request a Quote
            </Button>
          </Box>
          </Box>
  

              
    <Box 
      sx={{
    bgcolor: 'rgba(0, 174, 239, 0.6)', 
    width: '25%',
    height: '100%', 
  }}>
    
    <Box height={'50%'} pt={8}>
  <img src={bgplay} />
 
  </Box>
          
           
            <Box ml={2} height={'50%'}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Video of a Warehouse
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ mb: 2 }}
            >
              How Our Distribution Process Works.
            </Typography>
            <Button
              variant="text"
              size="small"
              sx={{
                color: '#0066cc', 
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Read More
            </Button>
            </Box>
            </Box>
        


</Box>

    </Box>
  );
};

export default HeroSection;
