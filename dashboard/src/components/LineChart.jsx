import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, Stack } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { months } from "../utilities/Constants";

const LineChart = () => {
  const [data] = useState([180, 250, 200, 150, 170, 190, 150, 170, 180]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up the svg
    const width = 600;
    const height = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin-top", "50px")
      .style("margin-left", "20px")
      .style("overflow", "visible")
      .style("color", "black")
      .style("font-weight", "bold");

    //setting up the scales of the chart
    const xScale = d3.scaleLinear().domain([9, 18]).range([0, width]);

    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i + 9))
      .y(yScale)
      .curve(d3.curveCardinal);

    //setting up the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);

    // const yAxis = d3.axisLeft(yScale);

    const xAxisGroup = svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`)
      .attr("font-size", "14px");

    xAxisGroup.selectAll("line").remove();
    xAxisGroup.select("path").remove();
    // svg.append("g").call(yAxis);

    //setting up the data for the svg

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47b747")
      .attr("stroke-width", 4);
  }, [data]);

  return (
    <Card
      sx={{
        width: "600px",
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
