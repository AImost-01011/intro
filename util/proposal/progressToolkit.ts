import { sv, sh, tv, th } from "../base";

export const proposalOpacity = (
  scroll: number,
  start: number,
  end: number
): number => {
  if (sv()) {
    if (scroll < start) return 0;
    else if (scroll > end) return 1;
    else {
      const alpha = 1 / (end - start);
      const beta = start / (end - start);
      return alpha * scroll - beta;
    }
  } else if (sh()) {
    const Start = (start * 2) / 3;
    const End = (end * 4) / 5;

    if (scroll < Start) return 0;
    else if (scroll > End) return 1;
    else {
      const alpha = 1 / (End - Start);
      const beta = Start / (End - Start);
      return alpha * scroll - beta;
    }
  } else if (tv() || th()) {
    return 1;
  } else return 1;
};
