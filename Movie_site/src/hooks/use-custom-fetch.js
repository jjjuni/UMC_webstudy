import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get(url);
          setData(response);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
