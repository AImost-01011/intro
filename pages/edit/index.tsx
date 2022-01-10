import React, { useEffect } from "react";
import Header from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import DetailBody from "../../components/reusables/DetailBody";
import DetailDesc from "../../components/reusables/DetailDesc";
import DetailNav from "../../components/reusables/DetailNav";
import DetailRoute from "../../components/reusables/DetailRoute";
import DetailTop from "../../components/reusables/DetailTop";
import { changePage, watchScroll } from "../../redux/supportSlice";
import st from "../../styles/index.module.scss";
import isIe from "../../util/isIe";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(2));

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
        <title>Edit</title>
        <meta
          name="description"
          content="情報の共有に強い電子カルテです。医療は連携することで真の力を発揮します。人の力だけでは限界があるのでアプリケーション同士で連携することで医療チームをサポートします。医療機関内のスタッフに情報を共有するときや他の病院に紹介するときボタン一つで情報を見られるよう医療機関内外のつながりもサポートします。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Patient List"
            shortDesc="患者の切り替えはできるだけスマートに"
            desc="画面の左側にカルテ編集待ちの患者たちのリストが常に表示されます。Receptと連携することができて、受付係が患者を待合室から診察室に移動すると自動的にリストへ患者情報が追加されます。また自分から患者をリストに追加することもできます。このようにしてスムーズに診療をスタートすることができます。"
          />
          <DetailDesc
            title="Caution"
            shortDesc="その判断、合ってる？"
            desc="電子カルテに病名や処方薬を入力するときにその疾患や薬の特徴をまとめた情報を見ることができるようにします。どんなに自己学習を続けていると言ってもその中に取りこぼしがないとは言えません。ど忘れでもミスによっては致命的になるので知識を再確認してでも正しい判断をすべきです。疾患ならば特徴的な病態、検査結果の読み方などをまとめ、薬ならば用法、禁忌薬などをまとめて表示します。"
          />
          <DetailDesc
            title="Pre Load"
            shortDesc="問診票を先にゲット"
            desc="Serveで診療予約した患者は予約時点で問診票を書くことができます。Serveを使っている患者の問診情報を患者が来院する前から先読みすることができます。その情報をもとに診療の準備をすることができるようになります。"
          />
          <DetailDesc
            title="Story"
            shortDesc="ゆりかごから墓場まで"
            desc="Serveを使っている患者なら今までEditで編集された既往歴、処方歴を一覧することができます(患者自身が公開拒否したものは除く)。これは他の医療機関で書かれた情報も見ることができ、処置のミスや処方ミスを様々な人が目を通すことで発見しやすくなります。こうすることで曖昧な情報の中で処置をしなくて良くなります。"
          />
          <DetailDesc
            title="Top Down"
            shortDesc="目線は流れるように"
            desc="あちらこちらに情報がばらまかれていると文字を書くのも読むのも辛いです。カルテの情報は多種多様できちんと整理されていないと尚更そうです。そうならないように上からブロックを積み上げるように入力欄を配置します。SOAP入力を上から一つずつ書くような形にして目線の動きをできるだけ減らすようにします。"
          />
          <DetailDesc
            title="Safe"
            shortDesc="盆に返る覆水"
            desc="ゲームをしているとき、セーブを忘れてデータが消えてしまった思い出はありませんか？カルテデータをそんなことで消えてしまっては大惨事です。Editはオートセーブ機能をつけているので一度書いたデータはデータバンクに自動保存されてデータの保護を行います。逆に間違ってデータを消したときに復元できるような機能も実装する予定です。"
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
