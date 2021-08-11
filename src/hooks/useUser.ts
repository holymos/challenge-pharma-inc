import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUsers() {
  const context = useContext(UserContext);

  return context;
}
