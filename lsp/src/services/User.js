import { api } from "@/services/API";

export const getLoggedUser = () => {
  return api.get("users/me/");
}

export const logoutUser = () => {
  return api.get("logout/");
}
