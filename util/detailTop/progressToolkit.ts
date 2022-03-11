import { sv, sh, tv, th } from "../base";

export const detailTopBlur = (scroll: number): boolean => {
  if (sv() || sh()) {
    if (scroll < 300) return false;
    else return true;
  } else return false;
};
