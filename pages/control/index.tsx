import React, { useEffect } from "react";
import Header from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import DetailTop from "../../components/reusables/DetailTop";
import DetailDesc from "../../components/reusables/DetailDesc";
import DetailNav from "../../components/reusables/DetailNav";
import DetailBody from "../../components/reusables/DetailBody";
import DetailRoute from "../../components/reusables/DetailRoute";
import { changePage, watchScroll } from "../../redux/supportSlice";
import st from "../../styles/index.module.scss";
import isIe from "../../util/isIe";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(1));

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
        <title>Control</title>
        <meta
          name="description"
          content="医療機関の情報を発信したり、あらゆるデータを収集するアプリケーションです。医療機関の業務の中には特別な医療資格の必要のないものが含まれています。それはスタッフの管理とか来月の出勤表を作るとかです。これらをControlが代わりに行ってそういった業務を行う人員を減らします。そうすると少数でコンパクトな医療機関を運営することができるようになります。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Staff List"
            shortDesc="スタッフ管理を簡単に"
            desc="医療機関に所属するスタッフをリストで表示します。このリストからスタッフの役割、今どこにいるのか(医療機関内のみ)、どのチームに属しているのか(医療機関内のチームに限る)などといった詳細情報を閲覧することができます。また医療機関内のチームもリストで表示することができ、チームの構成員などを閲覧することができます。透明性のある医療機関運営を行うためBuddyのチームの会話内容を閲覧する権限があります(検討中)。Staff Listにスタッフを登録したら自動的に医療機関の全体連絡用のチームに入るので全体の連絡など簡単に行うことができます。"
          />
          <DetailDesc
            title="Bulletin Board"
            shortDesc="伝えたいことははっきりと"
            desc="患者や外部の人に対してお知らせを表示することができます。Bulletin Boardでお知らせを書くと自動的にお知らせを追加することができ、それらがServeを使う患者たちなどが簡単に見ることができるようになります。写真や文書を添付して公開することもできますので細やかな情報を伝えることにも長けています。"
          />
          <DetailDesc
            title="About"
            shortDesc="情報は正確に"
            desc="医療機関の基本情報を保存します。医療機関名、住所、診療科目、問い合わせ先などを入力すると自動的に医療機関のページが作り出され誰でもインターネットで閲覧することができます。こうすることで自分の症状にあった医療機関か患者が判断することができます。またServeを使っている患者ならそのページから数ステップで診療予約をすることができます。もし医療機関の基本情報が変わっても再編集することができ常に最新の情報を提供することができます。"
          />
          <DetailDesc
            title="Ask Forward"
            shortDesc="情報は早いほうが良い"
            desc="問診票の中身を事前に登録することができます。医療機関の診療科ごとに問診内容を変えることができ、様々な症状の患者に対応することができます。Serveを使って患者が予約を確定させた後にここで事前に設定した問診票に答えることができます。"
          />

          <DetailDesc
            title="Coordinator"
            shortDesc="自由にはたらくを後押し"
            desc="勤務表作成をサポートします。AIを使って（予定）Staff Listのメンバーが上手い具合に配置されるようにして毎月の勤務表を作ります。BuddyのScheduleともリンクしていて先に予定が入っていたらその日に勤務を入れないようにするなど細やかな配慮もできます。人の手で勤務表を作ることもでき、スタッフの予定の埋まり具合を表示することができダブルブッキングを防ぐ工夫もしています。"
          />
          <DetailDesc
            title="Savior"
            shortDesc="頼れる救世主"
            desc="医療機関の近くにいるEmergencyをつけた救急車をリアルタイムに検知しその救急車がどこにいるのか、どのような患者を運んでいるのかを簡単に見せることができます。Emergencyからリアルタイムの映像が送られてくるのでその情報をもとに救急受け入れの可否を決めるところから準備をすることまでできます。映像を見るだけでなくマイクを使って救急隊員と会話をすることができ思い違いなどが起こらないようにします。"
          />
          <DetailDesc
            title="Real Track"
            shortDesc="本番までのカウントダウン"
            desc="Emergencyからのライブ映像を見ることができます。救急車の中の情報を患者が到着する前に知ることができ、少ない時間ながら軽いミーティングをすることができます。さらにEmergencyのカメラにはGPSがついていて医療機関からどれくらい離れているのか、あと何分で着くのかを常に表示することができます。"
          />
          <DetailDesc
            title="Imaginary Stock"
            shortDesc="底の尽きない夢の在庫"
            desc="医療機関内の医療在庫が減ったら自動的に発注してくれます。倉庫は発注されるとすぐにドローンで配達を始めます(予定)。こうすることで超短時間で必要物資を運ぶことができます。倉庫は一般の人たちもインターネットで医療用品を購入することができます。しかし何かパンデミックなどで物資不足が考えられる場合一般の購入や医療機関の過剰発注を止めて最低限必要な物資を医療機関へ送り届けるようにして買い占め、転売の対策をします。このようにして在庫管理や発注する人員を減らします。"
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
