import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const JoinOurTeam = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f9f9f9' }}>
      <Container>

        <Box
          component="video"
          src="placeholder" 
          controls
          alt="Warehouse video"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: 2,
            mb: 4,
          }}
        />

        <Typography fontWeight={'700'} fontSize={'44px'} align="center" sx={{color:'#003B6D'}} gutterBottom>
          Join Our Team
        </Typography>
        <Typography
          variant="body1"
          align="center"
         
          sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
        >
          We offer attractive prospects for fresh graduates as well as for experienced professionals to be part of a fast-growing, progressive organization. You will have the opportunity to work with our multinational business partners and gain the opportunity to work with some of the best brands in the world and gain the latest know-how in the FMCG business.
        </Typography>
        <Typography
          variant="body1"
          align="center"
         
          sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
        >
          We are looking to recruit talented individuals to join our workforce. If you are highly motivated, goal-oriented, and thrive on challenges, do get in touch with us.
        </Typography>

      
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: 0, px: 4,bgcolor:'#003B6D' }}
         
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinOurTeam;
