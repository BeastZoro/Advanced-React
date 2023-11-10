import { Stack } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import CashFlowChart from "./CashFlowChart";
import AccountWatchList from "./AccountWatchList";
import { LineChartData } from "../utilities/Constants";
import { BarData } from "../utilities/Constants";
import { CashFlow } from "../utilities/Constants";
import { AccWatchList } from "../utilities/Constants";

const DashboardDetails = () => {
  return (
    <Stack
      flexDirection="row"
      gap="30px"
      flexWrap="wrap"
      justifyContent="center"
      py="50px"
      sx={{
        background: "#f6f7f9",
        marginLeft: "250px",
        width: "100%",
        minHeighteight: "100vh",
        boxShadow: "inset 0 0 10px #000000;",
      }}
    >
      <LineChart width={700} height={300} data={LineChartData} />
      <BarChart width={700} height={300} bardata={BarData} />
      <CashFlowChart width={700} height={300} cashData={CashFlow} />
      <AccountWatchList width={700} height={300} accData={AccWatchList} />
    </Stack>
  );
};

export default DashboardDetails;
