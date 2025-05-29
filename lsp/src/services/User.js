import { api } from "@/services/API";

export const getLoggedUser = () => {
  return api.get("users/me/");
}

export const LogoutUser = () => {
  return api.get("logout/");
}
