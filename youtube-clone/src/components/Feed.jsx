import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utilities/fetchApiData";
import useFetchApiData from "../utilities/useFetchApiData";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const updateSelectedCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  // fetch videos using custom fetch Hook
  const videos = useFetchApiData(
    `search?part=snippet&q=${selectedCategory}&maxResults=50`
  );

  // fetch videos using axios
  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {setVideos(data.items)});
  // }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory
          updateSelectedCategory={updateSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 &copy; YT-Clone
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
