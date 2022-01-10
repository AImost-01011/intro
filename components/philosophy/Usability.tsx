import React from "react";
import st from "./usability.module.scss";
import { isMagic } from "../../util/usability/progressToolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Usability: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  return (
    <div className={st.usability}>
      <div className={st.titleWrapper}>
        <div className={st.title}>Usability</div>
      </div>

      <div className={st.topDescWrapper}>
        <div className={st.topDesc}>
          Usabilityは文字通りアプリケーションの使い心地です。
          <br />
          言うなれば性格みたいなものでしょうか。
          <br />
          今の世の中にはパソコン以外にスマホやタブレットなどがあって、どのデバイスでもデジタル化をすることができます。
          <br />
          もちろんデバイスによって得手不得手があるので正しく設計しなければ使い物になりません。
          <br />
          人間の視点から見てデバイスの特徴を最大限使えるようデザインに工夫を凝らす必要があります。
        </div>
      </div>

      <div
        className={`${st.contentWrapperOpen} ${
          isMagic(support.scroll) ? "" : st.contentWrapper
        }`}
      >
        <div className={st.magic}>+ Magic</div>

        <div className={st.descWrapper}>
          <div className={st.descTop}>なじみある動きで思い通り</div>
          <div className={st.desc}>
            最近使われているアプリケーションのほとんどは取扱説明書がありません。
            <br />
            これがないおかげで上手くアプリを使いこなせずインターネットで検索するなんてことがよく起こります。
            <br />
            こうなってしまう原因は操作のヒントがアプリ上に少ないからと考えます。
            <br />
            逆に操作の説明をいちいち書いていたら限りあるディスプレイを説明文が埋め尽くすことになり
            <br />
            それはそれで使いづらくなってしまうでしょう。
            <br />
            それでは視点を変えて「ヒント無しでできる行動」に注目してみましょう。
            <br />
            もしペンがあれば手にとって何かかきたくなりますし、ボタンがあれば押したくなります。
            <br />
            なじみのある動きをものやアイコンで誘発できればそのアプリは使いやすくなるのではないでしょうか。
            <br />
            それって魔法みたいじゃない？
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usability;
