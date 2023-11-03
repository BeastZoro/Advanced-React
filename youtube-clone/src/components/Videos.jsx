import { Card, Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos &&
        videos.map((video, index) => (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelInfo={video} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
