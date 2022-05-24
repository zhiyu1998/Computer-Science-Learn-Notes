import React, { useContext } from "react";
// import { UserContext, ThemeContext } from "../App";
import useUserContext from "../hooks/user-hook";

export default function CustomContextShareHook() {
  // const user = useContext(UserContext);
  // const theme = useContext(ThemeContext);
  const [user, theme] = useUserContext();

  console.log(user);
  console.log(theme);

  return (
    <div>
      <h2>CustomContextShareHook</h2>
    </div>
  );
}
