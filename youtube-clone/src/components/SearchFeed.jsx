import React from "react";
import useFetchApiData from "../utilities/useFetchApiData";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
  const { searchText } = useParams();
  const videos = useFetchApiData(
    `search?part=snippet&q=${searchText}&maxResults=50`
  );
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for :
        <span style={{ color: "#f31503", textTransform: "capitalize" }}>
          {" "}
          {searchText}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
