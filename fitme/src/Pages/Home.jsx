import { Box } from "@mui/material";
import React, { useState } from "react";
import { HeroBanner, SearchBox, Exercises } from "../components/index";

const Home = () => {


  return (
    <Box >
      <HeroBanner />
      <SearchBox />
      <Exercises />
    </Box>
  );
};

export default Home;
