import axios from "axios";

const axiosTMDBInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

const axiosUserInstance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
});

axiosUserInstance.interceptors.response.use(
  (response) => { return response; },
  async (error) => {
    const { config, response: { status } } = error;
    
    if (status === 401 && error.response.data.error === 'Unauthorized') {
      
      const originRequest = config;

      if (!originRequest._retry){
        originRequest._retry = true;

        try{
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axios.post('http://localhost:3000/auth/token/access', {}, {
            headers: {
              Authorization: `Bearer ${refreshToken}`
            }
          });

          const {accessToken : newAccessToken, refreshToken: newRefreshToken} = response.data;
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosUserInstance(originRequest);

        } catch (error){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
});

export { axiosTMDBInstance, axiosUserInstance };
