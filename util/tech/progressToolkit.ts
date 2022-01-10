import { sv, sh, tv, th } from "../base";

export const isWeb = (scroll: number): boolean => {
  if (sv() || sh()) {
    return scroll > 3700;
  } else if (tv() || th()) {
    return scroll > 2450;
  } else return true;
};
