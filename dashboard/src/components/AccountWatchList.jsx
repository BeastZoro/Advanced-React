import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Box, Card, Typography } from "@mui/material";

const AccountWatchList = ({ width, height, accData }) => {
  const [data] = useState(accData);
  const svgRef = useRef();

  useEffect(() => {
    //setting up the svg/chart

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .style("margin-block", "20px")
      .style("padding-inline", "20px")
      .style("overflow", "visible");

    //setting up the table
    const table = svg
      .append("foreignObject")
      .attr("width", "100%") // Corrected the typo here
      .attr("height", "100%")
      .append("xhtml:table")
      .style("width", "100%")
      .style("letter-spacing", "1px");

    // setting up the table head
    const thead = table.append("thead");
    const thRow = thead.append("tr");

    thRow
      .selectAll("th")
      .data(["Account", "This Month", "YTD"])
      .enter()
      .append("th")
      .text((d) => d)
      .style("text-align", "left")
      .style("color", "#CED0D1")
      .style("font-weight", "500")
      .style("padding-bottom", "20px");

    const tbody = table.append("tbody");
    const rows = tbody.selectAll("tr").data(data).enter().append("tr");

    rows
      .selectAll("td")
      .data((d) => [
        { value: d.account, width: "50%" },
        { value: d3.format(",.2f")(d.currMon), width: "25%" },
        { value: d3.format(",.2f")(d.ytd), width: "25%" },
      ])
      .enter()
      .append("td")
      .text((d) => d.value)
      .style("text-align", "left")
      .style("font-size", "15px")
      .style("padding-block", "5px")
      .style("width", (d) => d.width);
  }, [data]);
  return (
    <Card
      sx={{
        width: { xs: "90%", md: width },
        height: "460px",
        marginTop: "30px",
        paddingBlock: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #ebebec",
          paddingBottom: "20px",
          marginBottom: "20PX",
          paddingInline: "20px",
        }}
      >
        <Typography variant="subtitle" className="chart_head_title">
          Account watchlist
        </Typography>
      </Box>
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default AccountWatchList;
