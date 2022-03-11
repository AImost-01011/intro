import React from "react";
import st from "./tech.module.scss";
import { isWeb } from "../../util/tech/progressToolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Tech: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <div className={st.tech}>
      <div className={st.titleWrapper}>
        <div className={st.title}>Technology</div>
      </div>

      <div className={st.topDescWrapper}>
        <div className={st.topDesc}>
          現在、私たちの身の回りには様々なデバイスがあります。
          <br />
          先程も言いましたが適切なデバイスを適切なタイミングで使えるようにデザインしなければいけません。
          <br />
          作る側も同じで何かトラブルがあれば即座に修正できるような体制を築いていなければ診療システムとして失格です。
        </div>
      </div>

      <div className={st.contentWrapper}>
        <div
          className={`${st.techCardOpen} ${
            isWeb(support.scroll) ? "" : st.techCard
          }`}
        >
          <span className={st.title}>Conect With</span>

          <span className={st.descTop}>知識と、皆と、強くつながる。</span>

          <div className={st.desc}>
            現在最も使われているアプリケーションの一つにインターネットブラウザがあります。
            <br />
            そうそう、何かわからないことがあれば検索できるアレです。
            <br />
            インターネットブラウザでシステムを作るとどんな良いことがあるでしょうか。
            <br />
            同じコードでたくさんのデバイスを動かすことができます。
            <br />
            だってそうでしょ？パソコンでもタブレットでも同じホームページを検索して見ることができることがその証拠です。
            <br />
            そう考えるとどんなパソコンやタブレット、スマホでさえも医療機器になることができるんだ。
            <br />
            だから災害が起きても難なく医療行為ができます。
            <br />
            電子カルテが停電に弱いという弱点が指摘されているけれど
            <br />
            現在の電子機器のバッテリーは余裕で1日くらいもちます。
            <br />
            さらにモバイルバッテリーがあれば数日くらいもつことができます。
            <br />
            これだけ使用できれば緊急時の代替品として合格でしょう。
            <br />
            まだまだメリットがあります。
            <br />
            ブラウザを使っているのでわからないことがあればすぐに検索することだってできます。
            <br />
            これで知識と、皆と、いつでも、強くつながることができます。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
