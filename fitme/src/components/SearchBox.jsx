import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { exerciseOptions, fetchData } from "../utilities/fetchData";

const SearchBox = () => {
  const [searchText, setsearchText] = useState("");

  const handleSearch = async () => {
    if (searchText) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      console.log(exerciseData);
    }
  };
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px", textTransform: "capitalize" },
          textAlign: "center",
        }}
      >
        Saiyan Exercises you
        <br /> should know
      </Typography>
      <Box position="relative" my="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
          }}
          type="text"
          placeholder="Search Exercises"
          height="76px"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchBox;
