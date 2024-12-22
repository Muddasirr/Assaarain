import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Button,Box } from '@mui/material';

const articles = [
  {
    title: "The Art of Sourcing: How We Find the Freshest Ingredients for You",
    date: "September 20, 2023",
    image: "image1.png",
    description: "Insights",
  },
  {
    title: "Food Safety Matters: Our Rigorous Standards for Quality Assurance",
    date: "September 20, 2023",
    image: "image2.png",
    description: "Insights",
  },
  {
    title: "Healthy Eating Made Easy: Tips for a Balanced Diet with Our Products",
    date: "September 20, 2023",
    image: "image3.png",
    description: "Insights",
  },
];

const NewsSection = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Box px={16} pb={2}>
      <Typography color='#003B6D' variant="h4" align="center" gutterBottom>
        Featured Assarain News
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
      We offer attractive prospects for fresh graduates as well as for experienced professionals to be part of a fast-growing, progressive organization. You will have the opportunity to work with our multinational business partners and gain the opportunity to work with some of the best brands in the world and gain the latest know-how in the FMCG business.
      </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height={'100%'}
               
                image={`src/assets/${article.image}`}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="#00AEEF">
                  {article.description}
                </Typography>
                <Typography variant="h6" color={'#003B6D'}>{article.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.date}
                </Typography>
                <Button variant="text" size="small" sx={{p:0,m:0,bgcolor:"00AEEF"}} >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewsSection;
