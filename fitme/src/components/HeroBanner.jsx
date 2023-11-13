import { Box, Button, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        padding: "20px",
        position: "relative",
      }}
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Saiyan Club
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
          fontWeight: "700",
        }}
      >
        Eat, Sleep <br /> and Repeat
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ marginTop: "15px", padding: "15px 20px" }}
        href="#exercises"
      >
        Explore exercises
      </Button>
      <Typography
        fontSize="200px"
        fontWeight="600"
        color="#ff2625"
        marginTop={10}
        sx={{ opacity: "0.2", display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={banner} alt="banner" className="hero_banner_img" />
    </Box>
  );
};

export default HeroBanner;
