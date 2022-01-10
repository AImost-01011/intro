import React, { useEffect } from "react";
import Header from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { changePage, watchScroll } from "../../redux/supportSlice";
import DetailRoute from "../../components/reusables/DetailRoute";
import DetailBody from "../../components/reusables/DetailBody";
import DetailDesc from "../../components/reusables/DetailDesc";
import DetailNav from "../../components/reusables/DetailNav";
import DetailTop from "../../components/reusables/DetailTop";
import st from "../../styles/index.module.scss";
import isIe from "../../util/isIe";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(3));

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
        <title>Recept</title>
        <meta
          name="description"
          content="医療機関の待合室や予約、来院の管理を簡単に行うことができるアプリケーションです。医療機関の受付では様々な種類の業務をこなさなければいけません。診察室に空きができたら待合室の患者を呼びに行かなければいけませんし、予約の電話が入ったらその応対をしなければなりません。さらに患者が来院したらと考えるとてんやわんやになってしまいます。Receptなら受付係の手を煩わせずにアプリの方で自動的に処理していきます。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Welcome Back"
            shortDesc="続けるから習慣に"
            desc="来院した患者の受付をQRコードを使って素早く行います。人が健康になるには定期的に通院して規則正しい生活をする必要があります。毎回その手順が複雑になると病院に行くのがおっくうになってしまいます。患者がServeで簡単に通院予約をして、当日ReceptにQRコードをかざすだけで来院チェックが完了します。もし予約時点で問診票を書いてしまえば体温を測ってただ待つだけになります。こうすれば非接触で素早く待合室入りができます。"
          />
          <DetailDesc
            title="Wider Eye"
            shortDesc="ひと目で理解"
            desc="待合室にいる人と診察室で診察を受けている人がそれぞれリストになっているので患者がいまどこにいるのかひと目で理解することができます。待合室の患者を診察室へドラッグ＆ドロップすることで患者が診察室へ移動したことを知らせることができ、EditのPatient Listに自動追加されます。患者が今どこで何をしているのかを一目で理解できます。"
          />
          <DetailDesc
            title="Imaginary Casher"
            shortDesc="えっ？カードで支払えるんですか？"
            desc="診療料の会計を行います。最近電子マネーやクレジットカードが普及してきて簡単に決済をする手段が増えてきています。しかし医療機関が対応していなくて使えないことが多く現金だよりになってしまいます。ピッとかざすだけで会計が完了する会計方法の方が楽ということもありますしクレジットカードを使うと自動的にポイントが付きます。このように少しでもキャッシュバックすることで患者の金銭的なモチベーションを上げることができます。さらに扱う現金の量を減らすと管理する手間が省け無駄なチェックを減らすことができます。カードでパパっと支払ってその足で薬をもらい静養するといったスタイルにするのが患者への負担も減りますし良いと思います。"
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
