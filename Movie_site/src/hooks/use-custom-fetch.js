import axios from "axios";
import { useEffect, useState } from "react";

const useCustomFetch = (url, axiosInstance = axios, method = 'GET', body = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        const options = {
          method,
          url,
        }

        if (method === 'POST' && body){   // POST 요청 시 body 설정
          options.data = body;
        }

        try {
          const response = await axiosInstance(options);    // instance 및 options 사용하여 요청
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

  return { response: data, isLoading, isError };
};

export default useCustomFetch;
