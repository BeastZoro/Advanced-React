import React, { useContext } from "react";
import { ExerciseContext } from "../context/Context";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Exercises = () => {
  const { Exercises } = useContext(ExerciseContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {Exercises.map((exercise, index) => (
        <Link to="/" className="exercise-card" key={index}>
          <img src={exercise.gifUrl} loading="lazy" />
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            <button className="exercise_btn">{exercise.target}</button>
            <button className="exercise_btn">{exercise.bodyPart}</button>
          </Box>
          <Typography
            variant="h6"
            textTransform="capitalize"
            color='red'
            fontWeight='500'
          >
            {exercise.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Exercises;
