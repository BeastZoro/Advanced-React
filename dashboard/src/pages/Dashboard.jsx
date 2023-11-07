import { Stack } from "@mui/material";
import React from "react";
import Siderbar from "../components/Siderbar";
import DashboardDetails from "../components/DashboardDetails";

const Dashboard = () => {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      <Siderbar />

      <DashboardDetails />
    </Stack>
  );
};

export default Dashboard;
