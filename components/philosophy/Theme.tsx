import React from "react";
import st from "./theme.module.scss";
import { useSelector } from "react-redux";
import { isDark, isLight } from "../../util/theme/progressToolkit";
import { RootState } from "../../redux/store";

const Theme: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <div className={st.theme}>
      <div className={st.titleWrapper}>
        <div className={st.title}>Theme</div>
      </div>

      <div className={st.topDescWrapper}>
        <div className={st.topDesc}>
          Themeはアプリケーションの見た目のことを言います。つまりは顔のようなものです。はっきりとしたコンセプトを持たないといわゆる見づらい、使いづらいアプリケーションになってします。今回はLightテーマとDarkテーマの二種類のテーマを作り、それぞれ異なるコンセプトを持たせいろいろな人が心地よく使えるようにします。
        </div>
      </div>

      <div
        className={`${st.themeWrapper} ${st.lightWrapperOpen} ${
          isLight(support.scroll) ? "" : st.lightWrapper
        }`}
      >
        <span className={st.themeTitle}>Light Theme</span>

        <div className={st.logoWrapper}>
          <div className={st.relativeBox}>
            <span className={st.juicy}>Juicy</span>
            <span className={st.plus}>+</span>
            <span className={st.pop}>Pop</span>
          </div>
        </div>

        <div className={st.descWrapper}>
          <div className={st.desc}>
            Lightのテーマ、見ていて飽きないテーマ
            <br />
            <br />
            様々な果物を模した色とりどりの色彩を使ってアプリケーションを彩ります。
            <br />
            マウスホバー、クリック、タップなど様々な動きに対して様々な反応をもたせ目で見て楽しめる、操作して楽しめるアプリケーションを目指します。
            <br />
            もちろん色を効果的に使って入力ミスを減らしていきます。
            <br />
            このサイトはLightテーマでできています。
          </div>
        </div>
      </div>

      <div
        className={`${st.themeWrapper} ${st.darkWrapperOpen} ${
          isDark(support.scroll) ? "" : st.darkWrapper
        }`}
      >
        <span className={st.themeTitle}>Dark Theme</span>

        <div className={st.logoWrapper}>
          <div className={st.relativeBox}>
            <span className={st.cool}>Cool</span>
            <span className={st.plus}>+</span>
            <span className={st.solid}>Solid</span>
          </div>
        </div>

        <div className={st.descWrapper}>
          <div className={st.desc}>
            Darkのテーマ、極限まで集中力を高めるテーマ
            <br />
            <br />
            見た目を黒に統一して全体の一体感をもたせます。
            <br />
            無駄の削ぎ落とした最低限のアニメーションですっきりとした使い心地を目指します。
            <br />
            黒地に色を使うとコントラストで目を引きます。
            <br />
            注目すべき場所に色彩をあしらって必要な情報を取り逃がさないようにします。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
