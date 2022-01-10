import { NextRouter } from "next/router";

const isIe = (router: NextRouter) => {
  const agent = window.navigator.userAgent.toLowerCase();

  if (agent.indexOf("msie") != -1 || agent.indexOf("trident") != -1) {
    router.push("/msie");
  }
};

export default isIe;
