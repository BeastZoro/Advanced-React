import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import CategoryBox from "./CategoryBox";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const RightArrow = ({ data }) => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const LeftArrow = ({ data }) => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizantalScroll = ({ data }) => {
  return (
    <ScrollMenu
      RightArrow={<RightArrow data={data} />}
      LeftArrow={<LeftArrow data={data} />}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 30px"
        >
          <CategoryBox bodyPart={item} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizantalScroll;
