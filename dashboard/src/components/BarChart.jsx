import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, Stack } from "@mui/material";
import { BarData } from "../utilities/Constants";

const LineChart = () => {
  const [data] = useState([100, 250, 200, 150, 170, 190]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up the svg to render
    const width = 600;
    const height = 300;

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .style("margin-block", "20px")
      .style("overflow", "visible")
      .style("padding-inline", "20px")
      .style("color", "#c7cacb")
      .style("font-weight", "500");

    //setting up the scales for the chart

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(.9);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

     svg
     .selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", (d, i) => xScale(i))
     .attr("y", (d) => yScale(d))
     .attr("width", xScale.bandwidth())
     .attr("height", (d) => height - yScale(d))
     .attr("fill", (d, i) => colorScale(i));
  }, [data]);

  return (
    <Card
      sx={{
        width: { xs: "90%", md: "700px" },
        height: "460px",
        marginTop: "30px",
        paddingBlock: "15px",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        px="20px"
        sx={{ borderBottom: "1px solid #ebebec", paddingBottom: "20px" }}
      >
        <p className="chart_head_title">Invoices owed to you</p>
        <button className="invoice_btn">New Sales Invoice</button>
      </Stack>
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default LineChart;
