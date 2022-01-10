import React, { useEffect } from "react";
import Header from "next/head";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import DetailRoute from "../../components/reusables/DetailRoute";
import DetailBody from "../../components/reusables/DetailBody";
import DetailDesc from "../../components/reusables/DetailDesc";
import DetailNav from "../../components/reusables/DetailNav";
const DetailTop = dynamic(
  () => import("../../components/reusables/DetailTop"),
  { ssr: false }
);
import { changePage, watchScroll } from "../../redux/supportSlice";
import st from "../../styles/index.module.scss";
import isIe from "../../util/isIe";

const Buddy: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(0));

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
        <title>Buddy</title>
        <meta
          name="description"
          content="医療従事者が心地よく業務に集中できるようにサポートするアプリケーションです。医療者はたくさんの仕事をこなさなければいけません。そのためいつ、どこで、どんな内容の業務をこなさなければいけないか知って共有していなければ組織がバラバラになってしまいます。Buddyなら情報を共有することを前提にしてスケジュールを管理しているのでこれ一つでより楽に業務を行うことができます。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Dashboard"
            shortDesc="朝起きたらまずこれを見よう"
            desc="所属している医療機関、そこではたらく仲間たちからのメッセージをチェックするConnection、勤務の予定が書かれているScheduleなどが1画面にまとまっています。普通のメッセージならもちろん表示することもできますし、緊急性のあるメッセージは強調して表示するので見逃しはさせません。"
          />

          <DetailDesc
            title="Connection"
            shortDesc="意味のあるつながりを"
            desc="スタッフ個人とのやり取りはもちろん、多人数でチームを作ってチーム医療のコミュニケーションがしやすいメッセージ機能です。医療機関に所属した瞬間からその医療機関のどんなスタッフとも連絡を取り合うことができます。その代わりに所属医療機関のControlは会話内容を閲覧する権限があります。透明性を保ったコミュニケーションをできるようにします(予定)。Scheduleとも連携していて訪問診療の日程などConnection上でスケジュール管理を行うこともできます。"
          />
          <DetailDesc
            title="Schedule"
            shortDesc="常に最新の予定表"
            desc="ControlのCoordinatorで作られた勤務予定を反映したスケジュール帳です。勤務予定が決まったらすぐに反映され閲覧することができます。また勤務予定が決まったあと急に休暇が必要になったといった場合でも休暇リクエストをすることができ、誰かと勤務を交代してもらうことや欠員を出すことをControl側で決めることができます。それ以外にもConnectionでできた予定も載せることができ、その人専用の予定表が完成します。"
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

export default Buddy;
