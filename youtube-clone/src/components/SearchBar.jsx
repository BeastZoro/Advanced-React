import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setsearchText] = useState('')

  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`search/${searchText}`)
    setsearchText('')
  }
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
      className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
      />
      <IconButton type="submit" sx={{ p:'10px', color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
