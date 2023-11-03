import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchApiData from "../utilities/useFetchApiData";

const ChannelDetail = () => {

  const { id } = useParams();
  const FetchChannelData = useFetchApiData(`channels?part=snippet&id=${id}`);

  console.log(FetchChannelData)
 
  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
