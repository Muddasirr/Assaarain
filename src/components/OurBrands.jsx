import React from 'react';
import { Box, Grid, Typography, Paper,Divider } from '@mui/material';

const brands = [
  { name: 'Brand 1', logo: 'fresh.png' },
  { name: 'Brand 2', logo: 'watties.png' },
  { name: 'Brand 3', logo: 'Lutosa.png' },
  { name: 'Brand 4', logo: 'happy.png' },
  { name: 'Brand 5', logo: 'fonteraa.png' },
  { name: 'Brand 6', logo: 'unilever.png' },
  { name: 'Brand 7', logo: 'leprino.png' },
  { name: 'Brand 8', logo: 'gourmet.png' },
  { name: 'Brand 9', logo: 'image21.png' },
  { name: 'Brand 10', logo: 'maestro.png' },
  { name: 'Brand 11', logo: 'olam.png' },
  { name: 'Brand 12', logo: 'minstrel.png' },
];

const OurBrands = () => {
  return (
    <Box sx={{ padding: 4, bgcolor: '#f5f9ff' }}>
      <Box py={8} px={24} >
      <Typography color='#003B6D' fontWeight={'700'} fontSize={'44px'} align="center" gutterBottom>
        Our Brands
      </Typography>
      <Divider
    sx={{
      width: '80px', 
      height: '1px', 
      backgroundColor: '#00AEEF', 
      margin: '0 auto', 
      marginBottom: '16px', 
    }}
  />
      <Typography fontWeight={'400'} fontSize={'16px'} align="center" color="textSecondary" sx={{ mb: 4 }}>
        Our way forward strategy is to work with more international brands and leverage our sales
        expertise and marketing skills in the market for the development of the brand & gain market
        share. Below are some of our brand partners in the Retail & Foodservices sectors.
      </Typography>
      </Box>

      <Grid container >
        {brands.map((brand, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
           <Box
  sx={{
    border: '1px solid #C0EEFF', 
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    backgroundColor: 'transparent', 
    transition: 'all 0.3s ease-in-out', 
    '&:hover': {
      backgroundColor: '#FFFFFF', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
    '&:hover img': {
      transform: 'scale(1.1)', 
    },
  }}
>
              <img
                src={`src/assets/${brand.logo}`}
                
                alt={brand.name}
                
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurBrands;
