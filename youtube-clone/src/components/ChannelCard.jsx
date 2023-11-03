import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utilities/contants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelInfo }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelInfo?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelInfo?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channelInfo?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">
            {channelInfo?.snippet?.title}
            <CheckCircle sx={{ fontSize: 17, color: "gray", ml: "5px" }} />
          </Typography>

          {channelInfo?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelInfo?.statistics?.subscriberCount
              ).toLocaleString("en-US")}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
