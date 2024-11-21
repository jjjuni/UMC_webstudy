import { useMutation } from "@tanstack/react-query"
import { axiosLOGInstance } from "../apis/axios-instance";

const useCustionMutation = () => {
  const { mutateAsync } = useMutation({
    mutationFn: async ({url, data}) => {
      await axiosLOGInstance.post(url, data)
    }
  })
  return mutateAsync;
}

export default useCustionMutation;