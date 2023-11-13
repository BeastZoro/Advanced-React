import { Box } from "@mui/material";
import React from "react";
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
