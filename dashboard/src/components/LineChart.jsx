import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, MenuItem, Select, Stack } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import ChartHeader from "./ChartHeader";

const LineChart = ({width, height, data}) => {
  const [ChartData, setChartData] = useState(data);
  const svgRef = useRef();

  const updateChartData = (newData) => {
    setChartData(newData);
  };

  useEffect(() => {
    //setting up the svg to render

    const svg = d3
      .select(svgRef.current)
      .attr("width", '100%')
      .attr("height", height)
      .style("margin-block", "20px")
      .style("overflow", "visible")
      .style("padding-inline", "20px")
      .style("color", "#c7cacb")
      .style("font-weight", "500");

    // This is remove the previous line graph and update it with the newData received on change of months
    svg.selectAll("*").remove();

    //setting up the scales for the chart
    const scaleX = d3
      .scaleLinear()
      .domain([0, ChartData.length - 1])
      .range([0, width]);

    const scaleY = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const createScaledLine = d3
      .line()
      .x((d, index) => scaleX(index))
      .y(scaleY)
      .curve(d3.curveCardinal);

    // setting up the x and y axis
    const xAxis = d3
      .axisBottom(scaleX)
      .ticks(10)
      .tickFormat((d) => d + 9);

    // const yAxis = d3.axisLeft(scaleY)

    const xAxisGroup = svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`)
      .attr("font-size", "14px");

    xAxisGroup.selectAll("line").remove();
    xAxisGroup.select("path").remove();

    // const yAxisGroup = svg.append('g').call(yAxis)

    svg
      .selectAll(".line")
      .data([ChartData])
      .join("path")
      .attr("d", (d) => createScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47b747")
      .attr("stroke-width", 4);
  }, [ChartData]);

  return (
    <Card
      sx={{
        width: {xs:'90%', md: width},
        height: "460px",
        marginTop: "30px",
        paddingBlock: "15px",
      }}
    >
      <ChartHeader
        title={"Checking account"}
        LineChartData={ChartData}
        updateChartData={updateChartData}
      />
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default LineChart;
