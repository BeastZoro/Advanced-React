import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, ExerciseDetail } from "./Pages/index";
import { Navbar, Footer } from "./components/index";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
