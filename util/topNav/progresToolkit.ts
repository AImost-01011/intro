import { sv, sh, tv, th } from "../base";

export const topNavMove = (scroll: number): boolean => {
  if (sv()) {
    if (scroll < 600) return false;
    else return true;
  } else if (sh()) {
    if (scroll < 200) return false;
    else return true;
  } else if (tv() || th()) {
    if (scroll < 600) return false;
    else return true;
  }

  if (scroll < 600) return false;
  else return true;
};
