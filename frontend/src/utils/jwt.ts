import { jwtDecode } from "jwt-decode";

export type TokenPayLoad = {
  id: string;
  role: string;
  issuedAt: number;
  expiredAt: number;
};

export const decodeToken = (token: string): TokenPayLoad | null => {
  try {
    return jwtDecode<TokenPayLoad>(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<TokenPayLoad>(token);
    console.log(decoded.id);
    return decoded.expiredAt * 1000 < Date.now();
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
};
