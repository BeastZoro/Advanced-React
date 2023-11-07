import { Box, Stack } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { months } from "../utilities/Constants";
import { useState } from "react";

const ChartHeader = ({ title, LineChartData, updateChartData }) => {
  const [selectedMonth, setselectedMonth] = useState(months[0]);

  const handleChange = (e) => {
    setselectedMonth(e.target.value);

    // const newLineData =
    if (selectedMonth !== e.target.value) {
      randomLineChartData();
    }
  };

  const randomLineChartData = () => {
    const newData = LineChartData.map((value) => {
      const random = Math.floor(Math.random() * 37) - 15;
      return value + random;
    });
    updateChartData(newData);
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      px="20px"
      sx={{ borderBottom: "1px solid #ebebec", paddingBottom: "20px" }}
    >
      <p>{title}</p>
      <Stack flexDirection="row" gap="10px">
        <Box className="chart_menu" onClick={randomLineChartData}>
          <span>Manage</span>
          <span className="alignCenter">
            <KeyboardArrowDownRoundedIcon />
          </span>
        </Box>
        <Box className="chart_menu">
          <select value={selectedMonth} onChange={handleChange}>
            {months.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ChartHeader;
