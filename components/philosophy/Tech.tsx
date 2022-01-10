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

      <div
        className={`${st.contentWrapperOpen} ${
          isWeb(support.scroll) ? "" : st.contentWrapper
        }`}
      >
        <div className={st.logoWrapper}>
          <div className={st.relativeBox}>
            <div className={st.html}>HTML</div>
            <div className={st.css}>CSS</div>
            <div className={st.js}>JS</div>
            <div className={st.web}>Web</div>
          </div>
        </div>

        <div className={st.descWrapper}>
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
            そう考えるといま地球上にあるパソコン、タブレット、スマホが医療機器になりうるということなんだ。
            <br />
            それってワクワクしないですか？
            <br />
            他になにか長所がないかな？
            <br />
            緊急時でも使える特徴があるんだ。
            <br />
            電子カルテの弱点に停電に弱いというものがあるんだが、
            <br />
            医療スタッフのスマホ、タブレットの電源が付けさえすれば
            <br />
            最低限の医療行為ができるようになるんだ。
            <br />
            そういったデバイスはモバイルバッテリーとかで充電しながら使えるから
            <br />
            停電が復旧するまでの代替品として使うことができるのも特徴だね。
            <br />
            日本では災害が多いのでこういったアイデアも必要になるでしょ？
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
