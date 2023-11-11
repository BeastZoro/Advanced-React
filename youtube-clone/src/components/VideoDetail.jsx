import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import useFetchApiData from "../utilities/useFetchApiData";
import { Videos } from ".";

const VideoDetail = () => {
  const { id } = useParams();

  const video = useFetchApiData(`videos?part=snippet&statistics&id=${id}`);
  const relatedVideos = useFetchApiData(
    `search?part=snippet&relatedToVideoId=${id}&type=video`
  );

  // console.log(relatedVideos)

  const [VideoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    if (video) {
      setVideoInfo(video[0]);
    }
  }, [video]);

  if (!VideoInfo?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoInfo;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="fff" variant="h5" fontWeight={"bold"} p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              py={1}
              px={2}
              sx={{ color: "#fff" }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  sx={{
                    variant: { sm: "subtitle1", md: "h6" },
                    color: "#fff",
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
