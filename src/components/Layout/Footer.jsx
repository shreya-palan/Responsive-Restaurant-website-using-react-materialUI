import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
        sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <YouTubeIcon />
        </Box>
        <Typography 
        variant="h5"
        sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
          >
            All Right Reserved &copy; Swadham Bhog
        </Typography>
      </Box>
    </>
  )
}

export default Footer
