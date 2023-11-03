import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchApiData from "../utilities/useFetchApiData";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams();
  const FetchChannelData = useFetchApiData(`channels?part=snippet&id=${id}`);

  const FetchChannelVideos = useFetchApiData(
    `search?channelId=${id}&part=snippet&order=date&maxResults=50`
  );

  console.log(FetchChannelData);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            zIndex: 10,
            height: "300px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-60%",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            <ChannelCard
              channelInfo={FetchChannelData && FetchChannelData[0]}
            />
          </div>
        </div>
      </Box>

      <Box display="flex" p="2" marginTop="200px">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={FetchChannelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
