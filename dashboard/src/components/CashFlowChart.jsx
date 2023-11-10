import { Box, Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CashFlowChart = ({width, height, cashData}) => {
  const [data] = useState(cashData);
  const svgRef = useRef();

  useEffect(() => {
    if (!svgRef.current) {
      console.error("SVG Ref not available!");
      return;
    }
    // Setting up the svg/chart
    // const width = 600;
    // const height = 300;

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .style("margin-block", "20px")
      .style("overflow", "visible")
      .style("padding-inline", "20px")
      .style("color", "#c7cacb");

    // Setting up the scales for the chart
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.tick))
      .range([0, width])
      .padding(0.87);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.in, d.out))])
      .range([height, 0]);

    // Setting up the x axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("font-size", "14px")
      .style("text-transform", "capitalize")
      .style("font-weight", "500");

    // Removing the lines above ticks and the x axis path
    svg.selectAll("line").remove();
    svg.select("path").remove();

    // Append rect elements for cash 'in' values
    const inBars = svg
      .selectAll(".in-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "in-bar")
      .attr("x", (d) => xScale(d.tick))
      .attr("y", (d) => yScale(d.in))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.in))
      .attr("fill", "#02bb7d")
      .attr("rx", 3)
      .attr("ry", 3);

    // Append rect elements for cash 'out' values
    const outBars = svg
      .selectAll(".out-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "out-bar")
      .attr("x", (d) => xScale(d.tick))
      .attr("y", (d) => yScale(d.out))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.out))
      .attr("fill", "#47b747")
      .attr("rx", 3)
      .attr("ry", 3);
  }, [data]);
  return (
    <Card
      sx={{
        width: { xs: "90%", md: width },
        height: "460px",
        marginTop: "30px",
        paddingBlock: "15px",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        px="20px"
        sx={{
          borderBottom: "1px solid #ebebec",
          paddingBottom: "20px",
          marginBottom: "20PX",
        }}
      >
        <Typography variant="subtitle" className="chart_head_title">
          Total cash flow
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <p>
            <button className="cash_flow cash_in"></button>In
          </p>
          <p>
            <button className="cash_flow cash_out"></button>Out
          </p>
        </Box>
      </Stack>

      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default CashFlowChart;
