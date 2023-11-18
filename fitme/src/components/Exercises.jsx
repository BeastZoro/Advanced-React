import React, { useContext } from "react";
import { ExerciseContext } from "../context/Context";

const Exercises = () => {
  const { Exercises } = useContext(ExerciseContext);
  // console.log(Exercises)
  return (
    <div>
      {Exercises.map((exercise, index) => (
        <img src={exercise.gifUrl} loading="lazy"/>
      ))}
    </div>
  );
};

export default Exercises;
