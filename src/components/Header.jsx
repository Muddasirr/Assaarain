import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import viteLogo from '/vite.svg'
import Logo from '../assets/Logo.png'

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingLeft: `calc(1em + ${theme.spacing(2)})`,
  width: "100%",
}));

const Header = () => {
  return (
   
    <Box py={2} px={8}>
          <Box display={'flex'} justifyContent='center' alignItems='center'>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img
            src={Logo} 
            alt="Logo"
            
          />
          
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2 }}>
          <Typography variant="body2">For Suppliers</Typography>
          <Typography variant="body2">For Retailer</Typography>
          <Typography variant="body2">Location</Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ ml: 2, textTransform: "none" }}
        >
          Request a Quote
        </Button>
        </Box>

       
<Box display='flex' justifyContent={'space-between'}>
       
        <Box sx={{ display: "flex", gap: 2 }}>
          <MenuItem>Home</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>What We Do</MenuItem>
          <MenuItem>Brands</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Careers</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </Box>

    
      

    
        <StyledSearch>
          <IconButton>
            <SearchIcon />
          </IconButton>
          
        </StyledSearch>
        </Box>
        </Box>
        
  );
}

export default Header;