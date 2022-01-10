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
    dispatch(changePage(7));

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
        <title>Press Pro</title>
        <meta
          name="description"
          content="医療職向けの最新の論文や正しい医学知識を伝えるまとめサイトです。いくら医学を勉強したと言ってもすべての知識を常に完璧にすることはできません。また自分の専門分野以外の最新情報を常に追い続けることは不可能です。Press Proなら最新の論文の概要を簡単に日本語でまとめて専門分野以外の最新知識にふれる機会を提供します。また教科書的な細かい知識をまとめてあるので自分の知識に不安があればいつでも確認することができます。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Headline"
            shortDesc="最先端はここにある"
            desc="最新の論文の概要を軽く日本語訳してニュースサイトのようにリスト化し、新聞のように流し読みできるようにします。もしもっと詳細が気になったら論文のオリジナル版へのリンクもあるのでしっかり学ぶことができます。こうすることで少ない時間で様々な分野の最新の知見を得ることができます。"
          />
          <DetailDesc
            title="Look Back"
            shortDesc="たまには立ち止まって"
            desc="医療大学で学ぶような教科書的な知識を学べるWebページを作ります。どんなに記憶力が良い人でもど忘れすることだってあります。ましてや医学部で6年間も勉強してきて全て覚えているなんて言う人のほうが少ないでしょう。たまには基礎に戻って思い出すことが重要になってきます。教科書を軽くまとめたようなページを作るとササッと思い出すことができて便利です。またこの内容はEditの病名欄や薬剤欄でも見ることができ簡単にまとまっているからこそ手軽に振り返ることができます。"
          />
          <DetailDesc
            title="Regional Report"
            shortDesc="周りは見えている？"
            desc="Editで診療している医療機関からあらゆるデータを集めて今、どの地域で、どのような疾患が、どれほど発生しているのかを見やすく表示します。自動的にデータを集めるので常に最新の情報を表示することができます。もちろん過去のデータに遡ることもでき、去年の同じ時期と比べて今年の傾向を掴む事もできますし、地域のロコモ予防活動などの施策が機能しているのか俯瞰的に確認することもできます。"
          />
          <DetailDesc
            title="Entrance"
            shortDesc="医療のすべてはここから"
            desc="医療者が使うアプリケーションにはEntranceという今回紹介するアプリに移動するリンク集が設けられています。例えば医師が出勤したあとBuddyでメッセージを確認し、EntranceからEditを選んでそのまま診療を始める、スキマ時間にEntranceからPress Proを選んで自己研鑽をするといったことができます。こうすることでBuddyのアカウント一つでControlやEditなどすべてのアプリケーションにログインすることができます。つまり、Buddyアカウントがあれば医療業務のすべてを行うことができます(スタッフ個人がどの範囲までアプリケーションを使えるかControlで権限設定ができます。こうすることで受付係が勝手にEditに入ってカルテデータを読み漁るようなことはできません。)。"
          />
        </DetailBody>

        <DetailRoute />
      </div>
    </>
  );
};

export default Index;
