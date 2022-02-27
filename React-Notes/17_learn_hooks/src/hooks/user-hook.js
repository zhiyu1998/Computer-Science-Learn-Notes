import { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

function useUserContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return [user, theme];
}

export default useUserContext;
