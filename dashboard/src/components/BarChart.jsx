import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, Stack } from "@mui/material";
import NewInvoiceFile from "./NewInvoicefile";

const BarChart = ({width, height, bardata}) => {
  const [data] = useState(bardata);
  const [NewInvoice, setNewInvoice] = useState(false);
  const svgRef = useRef();

  useEffect(() => {
    //setting up the svg to render
    // const width = 600;
    // const height = 300;

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .style("margin-block", "20px")
      .style("overflow", "visible")
      .style("padding-inline", "20px")
      .style("color", "#c7cacb")

    //setting up the scales for the chart

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => d.tick))
      .range([0, width])
      .padding(0.87);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // setting up the x axis
    const xAxis = d3.axisBottom(xScale);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .selectAll("text")
      .style("font-size", "14px")
      .style("text-transform", "capitalize")
      .style("font-weight", "500")
      .style("margin-inline", "20px");

    // removing the lines above ticks
    svg.selectAll("line").remove();
    svg.select("path").remove();

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(d.tick))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
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
        marginInline: "10px",
        paddingBlock: "15px",
        position: "relative",
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
        <p className="chart_head_title">Invoices owed to you</p>
        <button
          className="invoice_btn"
          onClick={() => setNewInvoice(!NewInvoice)}
        >
          New Sales Invoice
        </button>
      </Stack>
      <Box
        style={{
          background: `${NewInvoice ? "rgba(71, 183, 71, 0.37" : ""}`,
          WebkitBackdropFilter: `${NewInvoice && "blur(11px)"}`,
          backdropFilter: `${NewInvoice && "blur(11px)"}`,
        }}
      >
        <svg ref={svgRef}></svg>
      </Box>

      {NewInvoice && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <NewInvoiceFile />
        </Box>
      )}
    </Card>
  );
};

export default BarChart;
