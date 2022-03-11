import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import st from "./topNav.module.scss";
import { topNavMove } from "../util/topNav/progresToolkit";

const TopNav: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <nav
      className={`${
        topNavMove(support.scroll)
          ? st.topNavOpen
          : st.topNavOpen + " " + st.topNav
      }`}
    >
      <div className={st.titleWrapper}>
        <span className={st.title}>Lively Health, Lovely Life</span>
        <span className={st.subTitle}>
          健康になれば私がもっと好きになるはずだ
        </span>
      </div>
    </nav>
  );
};

export default TopNav;
