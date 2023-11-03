import { Stack } from "@mui/material";
import { categories } from "../utilities/contants";
import { useState } from "react";

const Sidebar = ({selectedCategory, updateSelectedCategory}) => {

  return (
    <Stack
      direction={"row"}
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        overflowY: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          onClick={() => updateSelectedCategory(category.name)}
        >
          <span style={{color:category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'}}>
            {" "}
            <category.icon />
          </span>
          <span style={{opacity: category.name === selectedCategory  ? '1' : '0.8'}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
