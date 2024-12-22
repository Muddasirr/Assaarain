import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const AboutUs = () => {
  const data = [
    { title: "200+", subtitle: "Global Brands", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
    { title: "20+", subtitle: "Warehouses", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
    { title: "85,000+", subtitle: "Pallet Capacity", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
    { title: "300+", subtitle: "Own Vehicles", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
    { title: "1000+", subtitle: "Skilled Employees", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
    { title: "Omni", subtitle: "Channel Coverage", description: "We use a hub and spoke distribution platform covering Oman with our Head Office and main stores located in Muscat." },
  ];

  return (
    <Box sx={{ my:0 }}>
      <Box my={8} px={16}>
      <Typography variant="h4" align="center" sx={{ color: '#003B6D' }} fontWeight={'700'} fontSize={'44px'}  gutterBottom >
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        In acknowledgement of the basic premise that good food leads to good health and well-being, Assarain Food Products LLC occupies a place of pride among the market leaders in the Oman industry of Fast-Moving Consumer Goods (FMCG), founded on a reputation built over four decades of excellence in food products and operations. Setting high benchmarks for their local competitors, we are the first FMCG sales and distribution company to acquire ISO 22000:2005 Certification for Food Safety Management Systems within the Sultanate.
      </Typography>
      </Box>
      <Grid container spacing={4} sx={{ px: 3 }}>
      {data.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Box
        sx={{
          textAlign: 'center',
          p: 2,
          borderBottom: '1px solid #D8E9F5', 
          borderRight: '1px solid #D8E9F5',
          '&:nth-of-type(2n)': {
            borderRight: 'none', 
          },
          '&:last-child, &:nth-last-of-type(n-3)': {
            borderBottom: 'none', 
          },
        }}
      >
        <Typography align="left" fontSize={'64px'} sx={{  color: '#00AEEF' }}>
          {item.title}
        </Typography>
        <Typography align="left" sx={{ color: '#003B6D' }} fontWeight={'700'} fontSize={'32px'}  gutterBottom>
          {item.subtitle}
        </Typography>
        <Typography align="left" fontWeight={'400'} fontSize={'16px'}  sx={{ color: '#202020' }}>
          {item.description}
        </Typography>
      </Box>
    </Grid>
  ))}

      </Grid>
    </Box>
  );
};

export default AboutUs;
