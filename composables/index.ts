import { jwtDecode } from "jwt-decode";
export const decodeJwt = (token: string | null) => {
  if (token) return jwtDecode<Types.Utils.JwtToken>(token);
  else return null;
};
