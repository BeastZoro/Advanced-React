import { Avatar, Badge, Box, IconButton, Paper, Stack } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="end"
      gap="10px"
      pr="50px"
      height="70px"
    >
      <Paper sx={{ boxShadow: "none", background: "#f6f7f9" }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" value="" className="search" />
      </Paper>
      <Badge color="success" variant="dot" overlap="circular">
        <NotificationsIcon />
      </Badge>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          cursor: "pointer",
          marginLeft: "30px",
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <ArrowDropDownSharpIcon />
      </Box>
    </Stack>
  );
};

export default Navbar;
