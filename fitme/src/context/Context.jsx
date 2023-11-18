import { createContext, useState } from "react";

export const BodyPartContext = createContext();
export const ExerciseContext = createContext();

const Context = ({ children }) => {
  const [BodyPart, setBodyPart] = useState("all");
  const [Exercises, setExercises] = useState([]);

  const updateBodyPart = (newPart) => {
    setBodyPart(newPart);
  };

  const updateExercises = (newExercises) => {
    console.log("Inoked",newExercises)
    setExercises(newExercises);
  };

  const BodyPartData = { updateBodyPart, BodyPart };
  const ExerciseData = { updateExercises, Exercises };
  return (
    <BodyPartContext.Provider value={BodyPartData}>
      <ExerciseContext.Provider value={ExerciseData}>
        {children}
      </ExerciseContext.Provider>
    </BodyPartContext.Provider>
  );
};

export default Context;
