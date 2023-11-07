import { Stack } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const DashboardDetails = () => {
  return (
    <Stack
    flexDirection='row'
    gap='30px'
    flexWrap='wrap'
    justifyContent='center'
    py='50px'
      sx={{
        background: "#f6f7f9",
        // border: "1px solid",
        marginLeft: "250px",
        width: "100%",
        minHeighteight: "100vh",
        boxShadow: "inset 0 0 10px #000000;",
      }}
    >
      <LineChart />
      {/* <BarChart /> */}
    </Stack>
  );
};

export default DashboardDetails;
