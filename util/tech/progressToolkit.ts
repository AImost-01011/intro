import { sv, sh, tv, th } from "../base";

export const isWeb = (scroll: number): boolean => {
  if (sv() || sh()) {
    return scroll > 3900;
  } else if (tv()) {
    return scroll > 2450;
  } else if (th()) {
    return scroll > 2700;
  } else return true;
};
