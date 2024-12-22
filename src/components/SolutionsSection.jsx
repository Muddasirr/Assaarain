import React from "react";
import { Grid, Typography, Button, Divider, Box } from "@mui/material";
import Rectangle from '../assets/Rectangle.png';

const SolutionsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#003366",
        color: "#fff",
        width: "100%",
        p: 0,
        m: 0,
      }}
    >
      <Grid container spacing={0}>
     
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
            We Give You Complete <br /> Control Of Your <br /> Distribution.
          </Typography>

          <Grid container spacing={2}>
          
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">
                Warehouse Solutions
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We use a hub and spoke distribution platform covering Oman with
                our Head Office and main stores located in Muscat.
              </Typography>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#00aaff",
                  padding: 0,
                }}
              >
                Read More
              </Button>
            </Grid>

         
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", md: "block" },
                bgcolor: "#fff",
              }}
            />

          
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">
                Logistics Solutions
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We use a hub and spoke distribution platform covering Oman with
                our Head Office and main stores located in Muscat.
              </Typography>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#00aaff",
                  padding: 0,
                }}
              >
                Read More
              </Button>
            </Grid>
          </Grid>
        </Grid>

        
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={Rectangle}
            alt="Warehouse"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SolutionsSection;
