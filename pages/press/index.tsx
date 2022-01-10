import React, { useEffect } from "react";
import Header from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import DetailRoute from "../../components/reusables/DetailRoute";
import DetailBody from "../../components/reusables/DetailBody";
import DetailDesc from "../../components/reusables/DetailDesc";
import DetailNav from "../../components/reusables/DetailNav";
import DetailTop from "../../components/reusables/DetailTop";
import { changePage, watchScroll } from "../../redux/supportSlice";
import st from "../../styles/index.module.scss";
import isIe from "../../util/isIe";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(6));

    isIe(router);

    if (process.browser) {
      const checkScroll = () => {
        dispatch(watchScroll(window.scrollY));
      };

      document.addEventListener("scroll", checkScroll);

      return () => {
        document.removeEventListener("scroll", checkScroll);
        dispatch(watchScroll(0));
      };
    }
  }, [dispatch, router]);

  return (
    <>
      <Header>
        <title>Press</title>
        <meta
          name="description"
          content="医学について丁寧に説明を加えたニュースサイトです。電車が好きなら電車の図鑑を、星座が好きなら星図を読めば好奇心を満たすことができます。しかし医学に興味を持ってもその好奇心を満たす方法が少ないのです。Pressなら薬の効果や疾患の機序などをシンプルなイラストを用いて説明します。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />

        <DetailBody>
          <DetailDesc
            title="Curiosity"
            shortDesc="知りたいを原動力に"
            desc="イラストや図をふんだんに使って薬の作用機序や病態の説明をします。物事には基本があり、その上に応用が成り立っています。医学も例にもれず応用的な内容を理解しようとすると基本が必要です。基本がしっかりしていると応用を深く理解することができます。Curiosityから医学の基礎を学び「医学的な考え方」を身につけるようにします。こうすることで誤った情報を鵜呑みにしない力を養います。"
          />
          <DetailDesc
            title="Trigger"
            shortDesc="好奇心が冷めないうちに"
            desc="ServeのMedicine AdviserなどにPressのリンクを貼り付け気になる薬、疾患があればワンタップ(ワンクリック)でその関連ページに飛ぶことができます。普通に暮らしていて医学に触れるのは医療機関にかかるときくらいです。そこでふと疑問に思うことがあれば導いて教えて解決したほうが良いと思います。それによって医学を好きになり、志すようになれば良いきっかけとなること間違いありません。"
          />
          <DetailDesc
            title="Deepen"
            shortDesc="深みに嵌る"
            desc="Pressの内容を発展させたPress Proのページを関連ページとして表示します。子供が大人顔負けの知識を持っているということがあります。その分野は鉄道であれ、魚であれ、車であれ何でも良いと思います。そのような子どもたちは将来そういった職業に興味を持ち就職する場合が多いです。医学でも同じようなことができるとより専門的な知識を持った学生が医学を志すといったことが起こると良いと考えます。Pressの基本的な知識を身に着けたらもっと難しい内容にチャレンジしたいと思うのは誰でもあると思います。そこで専門性の高いPress Proの記事を置いて自ら学べる環境を作ります。"
          />
          <DetailDesc
            title="Protected"
            shortDesc="だれでも読める内容を"
            desc="過激な内容やグロテスクな写真をあまり使わずに医学を解説します。血を見ることが苦手な人やグロテスクなものに抵抗感を持つ人が一定数います。彼らが生々しい写真を見たらある種のトラウマを植え付けてしまうでしょう。Pressの記事ではフレンドリーなイラストを用いて疾患や薬剤の作用を説明します。どうしても実際の資料を使う場合は表示する前に刺激の強い画像であることを知らせるようにします。"
          />
        </DetailBody>

        <DetailRoute />
      </div>
    </>
  );
};

export default Index;
