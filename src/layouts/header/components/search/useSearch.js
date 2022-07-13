import { useState, useEffect } from "react";
const useSearch = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    if (key.length >= 3) {
      console.log(key);
    }
  }, [key]);
  return [setKey];
};
export default useSearch;
