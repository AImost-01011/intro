import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import st from "./topNav.module.scss";
import { topNavMove, topNavOpacity } from "../util/topNav/progresToolkit";

const TopNav: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <nav
      className={st.topNav}
      style={{
        top: `${topNavMove(support.scroll)}px`,
        opacity: topNavOpacity(support.scroll),
      }}
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
