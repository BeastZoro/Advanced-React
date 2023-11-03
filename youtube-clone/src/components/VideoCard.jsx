import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utilities/contants";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  const { videoId } = video.id;
  const { snippet } = video;

  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            alignItems="center"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
