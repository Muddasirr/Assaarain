import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import image from '../assets/Rectangle2.png'

const AssarainFoodProducts = () => {
  return (
    <Box sx={{ backgroundColor: '#003B6D', color: '#fff', pt: 5 }}>
      <Container>
        <Typography variant="h3" align="center"  gutterBottom>
          Assarain Food Products L.L.C.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontStyle: 'italic', color: '#d9d9d9' }}
        >
          "Food, in the end, in our own tradition, is something holy. It’s not about nutrients and calories. It’s about sharing. It’s about honesty. It’s about identity."
          <br />
          <Typography color='#00AEEF'>– Louise Fresco</Typography>
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              Our commitment to maintaining high standards, delivering superior quality food products and services, and the unwavering trust placed in us by our ever-increasing loyal customer base reflects our drive and effort to provide only the best in handling, storage, logistics, and distribution of a wide range of premium food products. Since our inception in 1982, we have grown from strength to strength through the diversification of our expertise, new brand acquisition, and participation in major franchises.
            </Typography>
            <Typography variant="body1">
              At Assarain Food Products, we are importers, distributors, and suppliers of a wide variety of food products and our portfolio includes frozen food products, poultry, meat, frozen fish, further processed meat, and oils. We have established prominence in ambient food products, offering a unique blend of products both suitable for B2B businesses to business and B2C customer environments. Our value-based services ensure that we address the unique challenges of providing a full range of branded and commodity products that are suitable to our customers and this is what makes us stand apart from our competitors, who focus only on certain product categories.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={image} 
              alt="Assarain Food Products"
              sx={{
                width: '100%',
              height:'100%'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AssarainFoodProducts;
