import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utilities/fetchData";
import { HorizantalScroll } from "./index";
import { ExerciseContext } from "../context/Context";

const SearchBox = () => {
  const [searchText, setsearchText] = useState("");
  const [searchedExercise, setSearchedExercise] = useState([]);

  const [bodyParts, setBodyParts] = useState([]);

  const {Exercises, updateExercises} = useContext(ExerciseContext)

  useEffect(() => {
    const fetchExercisesCategories = async () => {
      const bodyPartsInfo = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsInfo]);
    };
    fetchExercisesCategories();
  }, []);

  const handleSearch = async () => {
    if (searchText) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=200",
        exerciseOptions
      );

      const searchedResponse = exerciseData.filter(
        (exercise) =>
          exercise.bodyPart.toLowerCase().includes(searchText) ||
          exercise.target.toLowerCase().includes(searchText) ||
          exercise.name.toLowerCase().includes(searchText) ||
          exercise.equipment.toLowerCase().includes(searchText)
      );
      setsearchText("");
      updateExercises(searchedResponse);
      console.log(exerciseData)
      // console.log("Exercises",Exercises)
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

      <Box sx={{ width: "100%", position: "relative", p: "20px" }}>
        <HorizantalScroll data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchBox;
