import React from "react";
import useLocalStorage from "../hooks/local-storage-hook";

export default function CustomDataStorage() {
  const [name, setName] = useLocalStorage("name");

  return (
    <div>
      <h2>CustomDataStorage: {name}</h2>
      <button onClick={(e) => setName("zhiyu1998")}>设置NAME</button>
    </div>
  );
}
