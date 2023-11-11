import React, { useEffect, useState } from "react";

const useFetchApiData =  (url) => {
  const [data, setData] = useState(null);

  const BASE_URL = "https://youtube-v31.p.rapidapi.com";

  const options = {
    params: { maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_YT_CLONE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchAPIdata = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        const data = await response.json();
        setData(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPIdata();
  }, [url]);

  return data;
};

export default useFetchApiData;
