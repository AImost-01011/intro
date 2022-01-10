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
    dispatch(changePage(4));

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
        <title>Serve</title>
        <meta
          name="description"
          content="診療予約からおくすりの管理まで日常的な健康をサポートするアプリケーションです。現代人は毎日が忙しいです。だからといって体の不調を放っておいていいわけではありません。Serveならオンラインでいつでも診療予約ができるので空いたスキマ時間に受診することができます。その後もらった薬は自動的に記録され飲み忘れ防止のリマインダーをつけることができます。"
        />
      </Header>

      <div className={st.index} id="pageTop">
        <DetailNav />
        <DetailTop />
        <DetailBody>
          <DetailDesc
            title="Medicine Adviser"
            shortDesc="おくすりのアレコレ教えます"
            desc="お薬手帳に服用方法などの情報を見ることができるよう機能を追加しました。薬の効果、1回に何錠飲むのか薬を正しく使うために情報を提供します。これを見ると誤った服用を防ぐとともに何のために飲む薬なのか知ることができます。Pressと連携していて薬の役割が何か簡単に知ることができます。おくすりリマインダーで薬を服用時間になったら通知をするといったこともできるようになります。もちろんお薬手帳なので薬局に提示することだってできるようにします(予定)。"
          />
          <DetailDesc
            title="Reserve Book"
            shortDesc="ピッタリの病院はここです"
            desc="医療機関の検索と診療予約をすることができます。検索欄に医療機関名や診療科目を入力すると医療機関のリストが出てきます。そこから各医療機関のページに飛んで診療予約をすることができます。Controlを使っている医療機関ならAboutですでに基本情報を保存しているので自動的に医療機関のページが作られます。そのため維持作業は必要ありません。またControlのBulletin Boardで追加したお知らせを表示する他、予約の埋まり具合をカレンダーで表示し患者が都合の良い時間に予約できるか簡単にチェックできるようにします。さらにオンライン予約なので24時間いつでも予約を受付しています。予約が確定したあと事前に問診票を書くこともできスムーズな来院をできるようにします。"
          />
          <DetailDesc
            title="Easy Pass"
            shortDesc="驚くほどすんなり"
            desc="Serveアカウントを登録するとQRコードが配布されそれをReceptにかざすだけで来院処理が終わります。事前に問診票を書いておけば待合室でただ待つだけになります。しっかり予約をしていればそのまま診察室に行くことだってできるかもしれません。将来的に保険証を取り込むことで来院処理に人の手を一切使わないようにしたいです。"
          />
          <DetailDesc
            title="Healthy Point"
            shortDesc="せっかく通うなら楽しく"
            desc="支払った診療料の一定割合に独自のポイントを付けます。このポイントを使って日常的に使うマスクや消毒液などの日用品と交換することができ通院の負担を軽減するとともにモチベーションをあげられるようにします。Medicine Adviserのリマインド機能を利用して服用時間にしっかり服用できたらボーナスポイントを与えるなどゲーム的な要素を組み込むと面白いかもしれません。"
          />
        </DetailBody>

        <DetailRoute />
      </div>
    </>
  );
};

export default Index;
