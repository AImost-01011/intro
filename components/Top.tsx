import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import st from "./top.module.scss";
import friendshipImg from "../public/friendship.jpg";
import { blurMove, topMove, topOpacity } from "../util/top/progressToolkit";

const Top: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <main className={st.top}>
      <div
        className={st.fixedBox}
        style={{
          top: topMove(support.scroll),
          opacity: topOpacity(support.scroll),
        }}
      >
        <div className={st.relativeBox}>
          <Image
            src={friendshipImg}
            alt="friendship image"
            layout="fill"
            objectFit="cover"
          />

          <section
            className={st.blurBox}
            style={{ bottom: `${blurMove(support.scroll)}px` }}
          >
            <span className={st.title}>Lively Health, Lovely Life</span>
            <span className={st.subTitle}>
              健康になれば私がもっと好きになるはずだ
            </span>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Top;
