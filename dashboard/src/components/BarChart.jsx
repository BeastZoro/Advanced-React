import { Card } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const [data] = useState([80, 40, 80, 60, 70, 50]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up the svg
    const width = 600;
    const height = 400;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin-top", "50px")
      .style('margin-left', '30px')
      .style("background", "#d3d3d3")
      .style("overflow", "visible");

    //setting up the scales of the chart
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    //setting up the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    svg.append("g").call(yAxis);

    //setting up the data for the svg

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <Card sx={{ width: "650px", height: "500px", marginTop: "30px" }}>
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default BarChart;
