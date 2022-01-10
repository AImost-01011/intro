import React from "react";
import Image from "next/image";
import forestImg from "../public/forest.jpg";
import st from "./proposal.module.scss";
import { proposalOpacity } from "../util/proposal/progressToolkit";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Proposal: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <div className={st.proposal}>
      <Image
        src={forestImg}
        alt="forest image"
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`${st.messageBox} ${st.box1}`}
        style={{
          opacity: proposalOpacity(support.scroll, 300, 500),
        }}
      >
        知っているだろうか。
        <br />
        日本で電子カルテの普及率はおおよそ50％である。※
        <br />
        デジタル技術が発展している現在でさえ
        <br />
        紙のカルテを使い続けている医療機関が数多くある。
        <br />
        <span className={st.tip}>
          ※平成29年電子カルテシステム等の普及状況の推移(厚生労働省)より
        </span>
      </div>
      <div
        className={`${st.messageBox} ${st.box2}`}
        style={{
          opacity: proposalOpacity(support.scroll, 400, 600),
        }}
      >
        彼らは使い慣れているという理由だけで頑なに紙を使い続けているが
        <br />
        実はたくさんの人が見えないところで処理するから使いやすいように感じているだけなのだ。
        <br />
        少子高齢化が叫ばれて久しいこの国で
        <br />
        今後十分に人を集め同じように処理し続けることはできるだろうか？
      </div>
      <div
        className={`${st.messageBox} ${st.box3}`}
        style={{
          opacity: proposalOpacity(support.scroll, 700, 1000),
        }}
      >
        かつてのカルテは記録の側面が強かった。
        <br />
        紙は記録をするためにうってつけの素材だった。
        <br />
        しかし現代のカルテはデータの側面にも注目され
        <br />
        共有できることが求められるようになってきた。
        <br />
        そのような時代の要請に紙は対応できるのだろうか。
      </div>
      <div
        className={st.bigMessageBox}
        style={{ opacity: proposalOpacity(support.scroll, 1100, 1300) }}
      >
        <span className={st.bigMessage}>デジタル化しよう</span>
        <div className={st.content}>
          技術発展によってアナログとは違った便利なものが増えてきている。
          <br />
          そのほとんどがデジタルデバイスでありアナログなもので発展したものは少ない。
          <br />
          業務をより便利にするという意味でも
          <br />
          時代についていくという意味でもデジタル化は必須ではないか。
        </div>
      </div>
    </div>
  );
};

export default Proposal;
