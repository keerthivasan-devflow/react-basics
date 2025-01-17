import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./action";

const DataFetcher = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest()); // Dispatch the request action to start loading

      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();

        // Dispatch success or failure based on the result
        dispatch(fetchDataSuccess(result)); // Dispatch success with the fetched data
      } catch (err) {
        dispatch(fetchDataFailure(err.message)); // Dispatch failure if there's an error
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataFetcher;
