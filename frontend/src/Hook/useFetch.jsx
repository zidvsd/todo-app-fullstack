import React from "react";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      const json = await res.json();
      setData(json);
      console.log(data);
    } catch (err) {
      setError(err);
      console.log(err, "Error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url) fetchData(url);
  }, [url]);

  useEffect(() => {
    console.log(data); // This will run *after* data is updated
  }, [data]);

  return { data, loading, error, fetchData };
};

export default useFetch;
