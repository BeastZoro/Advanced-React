import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SearchBox = () => {
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Saiyan Exercises you
        <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
          }}
          type="text"
          placeholder="Search Exercises"
          height="76px"
          value=""
          onChange={(e) => {}}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "175px", xs: "80px" },
            height:'56px',
            // position:'absolute'
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBox;
