import { useState, useEffect } from "react";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(url)
        .then((res) => res.json())
        .catch((e) => console.log(e));

      setData(req);
    };
    getData();
  }, [url]);

  return data;
};
