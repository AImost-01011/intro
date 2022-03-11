import { sv, sh, tv, th } from "../base";

export const proposalOpacity2 = (scroll: number, index: number) => {
  if (sv()) {
    switch (index) {
      case 0:
        return scroll > 400;

      case 1:
        return scroll > 600;

      case 2:
        return scroll > 800;

      case 3:
        return scroll > 1300;

      default:
        return true;
    }
  } else if (sh()) {
    return true;
  } else if (tv()) {
    switch (index) {
      case 0:
        return scroll > 500;

      case 1:
        return scroll > 700;

      case 2:
        return scroll > 900;

      case 3:
        return scroll > 1300;

      default:
        return true;
    }
  } else if (th()) {
    switch (index) {
      case 0:
        return scroll > 500;

      case 1:
        return scroll > 700;

      case 2:
        return scroll > 900;

      case 3:
        return scroll > 1300;

      default:
        return true;
    }
  } else return true;
};
