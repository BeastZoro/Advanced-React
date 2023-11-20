import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import gym from "../assets/icons/gym.png";
import { BodyPartContext, ExerciseContext } from "../context/Context";
import { exerciseOptions, fetchData } from "../utilities/fetchData";

const CategoryBox = ({ bodyPart }) => {
  const { updateBodyPart, BodyPart } = useContext(BodyPartContext);
  const { Exercises, updateExercises } = useContext(ExerciseContext);


  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === BodyPart ? "4px solid #ff2625" : "",
        background: "#fff",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        textTransform: "capitalize",
        fontSize: "22px",
      }}
      onClick={() => {
        updateBodyPart(bodyPart);
      }}
    >
      <img src={gym} alt="cat-icon" width="40px" height="40px" />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {bodyPart}
      </Typography>
    </Stack>
  );
};

export default CategoryBox;
