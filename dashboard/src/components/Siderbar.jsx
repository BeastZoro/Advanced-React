import React, { useState } from "react";
import { navbarLinks } from "../utilities/Constants";
import { Box, Stack } from "@mui/material";
import { logo } from "../utilities/Constants";

const Siderbar = () => {
  const [selectedLink, setSelectedLink] = useState("dashboard");

  return (
    <Stack
      direction="column"
      justifyContent="start"
      gap="100px"
      sx={{
        background: "#ffff0",
        height: "100vh",
        width: "250px",
        paddingTop: "30px",
        position: 'absolute',
        top: 0
        // paddingInline: '20px'
      }}
    >
      {/* Replace div with Link tag */}
      <div>
        <img
          src={logo}
          style={{ paddingInline: "30px", width: "230px", height: "40px" }}
        />
      </div>

      <Box>
        {navbarLinks.map((link, index) => (
          // replace div with Link tag from router
          <div
            className={`sidebar_links ${
              selectedLink === link.text ? "active_link" : ""
            }`}
            onClick={() => setSelectedLink(link.text)}
          >
            <span>
              <link.icon />
            </span>
            <span>{link.text}</span>
          </div>
        ))}
      </Box>
    </Stack>
  );
};

export default Siderbar;
