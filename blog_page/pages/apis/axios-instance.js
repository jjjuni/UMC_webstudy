import axios from "axios";

const axiosUserInstance = axios.create({
  withCredentials: true, // 쿠키를 요청에 자동으로 포함시킴
});

const axiosRefreshInstance = axios.create({
  withCredentials: true, // 쿠키를 요청에 자동으로 포함시킴
});

axiosUserInstance.interceptors.response.use(
  // 받은 응답을 intercept, 에러(토큰 만료) 발생 시 refresh 토큰으로 토큰 재발급
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401 && error.response.data.message === "Unauthorized") {
      const originRequest = config;

      if (!originRequest._retry) {
        originRequest._retry = true;

        try {
          await axiosRefreshInstance.post(`${process.env.NEXT_PUBLIC_LOCAL_HOST}/v1/auth/refresh`);

          return axiosUserInstance(originRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export { axiosUserInstance };
