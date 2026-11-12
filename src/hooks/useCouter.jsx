import { useState } from "react"

function useCouter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}

export default useCouter