import { useEffect } from "react"

const useTitle = (title, isLoading = false) => {
  useEffect(() => {
    if (title !== undefined && !isLoading) {
      document.title = title;
    }
  }, [title])
}

export default useTitle;