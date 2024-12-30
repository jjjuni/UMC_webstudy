import { useMutation } from "@tanstack/react-query";
import { axiosUserInstance } from "../apis/axios-instance";

interface MutationData {
  url: string;
  data: {
    email: string,
    password: string,
    username?: string,
    role?: string,
  };
}

interface APIResponse {
  data: any;
  status: number;
  message?: string;
}

const useCustionMutation = () => {
  const { mutateAsync } = useMutation<APIResponse, Error, MutationData>({
    mutationFn: async ({ url, data }) => {
      const response = await axiosUserInstance.post(url, data);
      return response;
    },
  });
  return mutateAsync;
};

export default useCustionMutation;
