import { sv, sh, tv, th } from "../base";

export const isMagic = (scroll: number): boolean => {
  if (sv() || sh()) {
    return scroll > 2800;
  } else if (tv() || th()) {
    return scroll > 1800;
  } else return true;
};
