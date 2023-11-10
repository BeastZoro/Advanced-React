import { Avatar, Badge, Box, IconButton, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="end"
      gap="10px"
      pr="50px"
      height="70px"
    >
      <Paper
        sx={{
          boxShadow: "none",
          background: "#f6f7f9",
          display: { xs: "none", md: "block" },
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          value={searchInput}
          className="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
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
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <ArrowDropDownSharpIcon />
      </Box>
    </Stack>
  );
};

export default Navbar;
