import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    const name = window.localStorage.getItem(key);
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem(key, name);
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
