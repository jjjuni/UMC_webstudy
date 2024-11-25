import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const useCustomMutation = () => {
  const queryClient = useQueryClient();
  
  const { mutate } = useMutation({
    mutationFn: async ({ method, url, data }) => {
      await axios({
        method,
        url,
        data,
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries(['getTodos'])
    }
  })
  return mutate;
}

export default useCustomMutation;