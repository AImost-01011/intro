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
    dispatch(changePage(5));

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
        <title>Emergency</title>
        <meta
          name="description"
          content="様々な医療機関と協力して救命率を上げる救急車をつくるデバイスです。救急の患者はときに生死をさまよいます。医療機関ほどきちんとした設備がない救急車内でできる処置は少ないです。それならば医療機関と救急車を強く結びつけてチームで救命したほうがもっと助かる人が増えるでしょう。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Starter"
            shortDesc="エンジンが温まる前に"
            desc="救急車のエンジンをつけると同時にEmergencyが起動します。救急の現場はとても忙しいです。少ない時間でたくさんの準備をしなければいけません。そんなことをしていたらうっかりミスが起こってもおかしくありません。Emergencyはエンジンと同時に起動するので救急車が発進するときには準備OKです。Emergencyが起動したらまず最寄りの医療機関に救急発進をしたことを通達します。"
          />
          <DetailDesc
            title="Visual Signal"
            shortDesc="百聞より一見に力を"
            desc="救急車のストレッチャー固定部の真上にカメラを付けて運び込まれた患者の状況を最寄りのControlを使う医療機関にライブ映像を送ります。こうすることで医療機関にいる医師が映像を見て受け入れできる患者かどうかを判断し受け入れの可否を示すことができます。救急隊員は受け入れ可能と返信した最寄りの医療機関へ運べばスムーズな治療を行うことができます。"
          />

          <DetailDesc
            title="Essential Rally"
            shortDesc="強くつながり一心同体"
            desc="救急車にはカメラ以外に小さなモニターやスピーカー、マイクを付けて医療機関の医師と強いコミュニケーションを取ることができます。救急車にカメラをたくさんつけることはできませんので小さな症状や気づきを救急隊員が声やジェスチャーで医療機関の医療スタッフに伝えることができます。逆に医療機関のスタッフが欲しい情報を口頭でリクエストして病態の共有をすることができます。"
          />
          <DetailDesc
            title="Easy Installation"
            shortDesc="どんな救急車にも"
            desc="情報共有用のカメラやマイクを大きな改造無しで取り付けます。救急車は高額なのでEmergencyの機能を入れるためだけに車を買い替え、改造するのは非効率です。Emergencyで使うのは主にカメラとマイクなので天井に貼ることさえできれば簡単に導入することができます。電源はシガーソケットから取るのでエンジンとEmergencyのオン・オフを同期することができます。"
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
