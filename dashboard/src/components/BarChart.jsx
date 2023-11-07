import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, Stack } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { months } from "../utilities/Constants";

const LineChart = () => {
  const [data] = useState([180, 250, 200, 150, 170, 190, 150, 170, 180]);
  const svgRef = useRef();

  useEffect(() => {
    // Setting up the svg
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Setting up the scales of the chart
    const xScale = d3.scaleLinear().domain([0, data.length]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // Setting up the x-axis ticks as text elements
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(10)
      .tickFormat((d) => d + 9) // Adjust the tick format

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll(".tick text")
      .style("font-size", "14px");

    // Remove the x-axis line
    svg.select(".domain").remove();
    svg.selectAll('line').remove()

    // Setting up the data for the svg
    svg
      .append("path")
      .datum(data)
      .attr("d", generateScaledLine)
      .attr("fill", "none")
      .attr("stroke", "#47b747")
      .attr("stroke-width", 4);
  }, [data]);

  return (
    <Card
      sx={{
        width: "850px",
        height: "400px",
        marginTop: "30px",
        paddingBlock: "15px",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        px='20px'
        sx={{ borderBottom: "1px solid #ebebec", paddingBottom: "20px" }}
      >
        <p>Checking account</p>
        <Stack flexDirection="row" gap="20px">
          <Box className="chart_menu">
            <span>Manage</span>
            <span className="alignCenter">
              <KeyboardArrowDownRoundedIcon />
            </span>
          </Box>
          <Box className="chart_menu">
            <span>January</span>
            <span className="alignCenter">
              <KeyboardArrowDownRoundedIcon />
            </span>
          </Box>
        </Stack>
      </Stack>
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default LineChart;
