import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import st from "./detailTop.module.scss";
import buddyImg from "../../public/buddy.jpg";
import editImg from "../../public/edit-img.jpg";
import controlImg from "../../public/control-img.jpg";
import receptImg from "../../public/recept-img.jpg";
import serveImg from "../../public/serve-img.jpg";
import emergencyImg from "../../public/emergency-img.jpg";
import pressImg from "../../public/press-img.jpg";
import pressProImg from "../../public/pressPro-img.jpg";
import philoImg from "../../public/philosophy-img.jpg";
import { RootState } from "../../redux/store";
import { detailTopBlur } from "../../util/detailTop/progressToolkit";

const DetailTop: React.FC = () => {
  const showList = [
    {
      title: "Buddy",
      st: st.buddy,
      subtitle: "こいつが私の相棒",
      desc: (
        <div className={st.desc}>
          医療を行う上で様々なスタッフと常に連携していることが求められます
          <br />
          しかし情報を共有するために口頭で言うのも不便ですし
          <br />
          メールやメッセージアプリは仕事中常に確認できるわけではありません
          <br />
          リアルタイムで情報を共有することこそが良い連携になると思うのです
          <br />
          そこでやってくるのがBuddy
          <br />
          こいつは医療業務のことに関してなんでも知っているんだ
          <br />
          何かメッセージが来ていないか教えることはもちろん
          <br />
          明日の勤務時間までしっかり管理してくれる
          <br />
          これって最高の相棒じゃないか？
          <br />
          <br />
          Buddyは医療を行う上で必要な情報共有、スケジューリングを行う医療スタッフのコミュニケーションアプリです。Buddyは他のアプリケーションにも組み込まれていて電子カルテを書いているときでも、受付をしているときも、救急現場に向かう救急車でもスタッフと情報共有・スケジュール確認ができます。
        </div>
      ),
    },
    {
      title: "Control",
      st: st.control,
      subtitle: "医療機関の頼れるトップ",
      desc: (
        <div className={st.desc}>
          医療機関を運営する上で医療行為以外がかなり多い
          <br />
          様々な記録をとったり、
          <br />
          スタッフの勤務状況を確認したり、
          <br />
          ホームページの情報更新をしたり、
          <br />
          たり　たり　たり
          <br />
          それはわざわざ人の手で行わなければならないことかな？
          <br />
          それらの業務を代わりにやってくれたらどんなに楽だろうな
          <br />
          <br />
          Controlは医療機関の事務作業など様々な業務をこなすアプリケーションです。スタッフの管理や医療機関からの情報発信、勤務管理までありとあらゆる事務を一通り行えます。さらにEmergencyをつけた救急車が医療機関の近くにいたらどのような病態の患者が搬送されているのかつなぐ機能まであります。
        </div>
      ),
    },
    {
      title: "Edit",
      st: st.edit,
      subtitle: "わたしのカルテ　みんなのカルテ",
      desc: (
        <div className={st.desc}>
          診療をしていく上で
          <br />
          カルテって大事だ
          <br />
          様々な情報が書かれていて
          <br />
          それをもとに治療方針が決まる
          <br />
          同じ医療機関の中だったら困らないのだけれど
          <br />
          様々な医療機関と協力しながら治療するなら困ってしまう
          <br />
          せっかく患者データを集めたのに
          <br />
          共有ができなければ研究や発見はできない
          <br />
          じゃあWebベースでデータを閲覧できるシステムを作ったら
          <br />
          医療者同士で共有できるようになるんじゃないかな
          <br />
          <br />
          Editは電子カルテを編集することができるアプリケーションです。すでにある電子カルテとほぼ同じ事ができます。今までの既往歴など患者の過去にどのような疾患になり、どの薬剤を使ったのかはっきり見ることができるようにします。さらに医療機器との連携を強め様々な機器をシームレスに使えるようにします。
        </div>
      ),
    },
    {
      title: "Recept",
      st: st.recept,
      subtitle: "複雑な作業を効率よく",
      desc: (
        <div className={st.desc}>
          健康診断はスタートラインだと言う人がいる
          <br />
          それは自分の体の異常を知るということで
          <br />
          異常がわかると治療を始めることができる
          <br />
          つまりそういうことを言っているのだろう
          <br />
          じゃあ自発的に診察に来る人は
          <br />
          他の人より強い健康意識をもっているのでしょう
          <br />
          そう考えると病院に受診することは
          <br />
          ゴールテープを自力で切ったことになります
          <br />
          えらいえらい
          <br />
          そういった人をサポートしなくちゃという気持ちになっちゃいます
          <br />
          健康的な行動が日常的な生活に溶け込むためには
          <br />
          まず入り口から考えよう
          <br />
          <br />
          Receptは医療機関の受付を行うアプリケーションです。医療機関の受付は予約の電話受付、外来でやってきた患者から保険証や問診票の回収、診察室への案内、会計などたくさんの業務を同時にこなす必要があります。Receptがそれをサポートして単純な業務を代わりに行い通院する患者・受付係の双方が通いやすい・働きやすい環境を作ります。
        </div>
      ),
    },
    {
      title: "Serve",
      st: st.serve,
      subtitle: "その道は健康へとつづく",
      desc: (
        <div className={st.desc}>
          毎日の生活で手一杯だから
          <br />
          時間がかかる病院にはかかることができないよ
          <br />
          そんな人はたくさんいます
          <br />
          せっかく自分の健康に目を向けてくれたのに
          <br />
          もったいないなあ
          <br />
          症状を我慢させていたら悪化するかもしれないよ
          <br />
          じゃあもっと簡単に通院できるようにしてよ！
          <br />
          <br />
          Serveは医療機関の外来受診予約、おくすり手帳の管理、自分の情報登録など通院する際必要な細々とした登録作業を簡単に行うことができるアプリケーションです。Controlを使っている医療機関であればServeから数ステップで診療予約をすることができます。将来的に保険証を取り込むことなども検討しています。
        </div>
      ),
    },
    {
      title: "Emergency",
      st: st.emergency,
      subtitle: "たった1秒が命をつなぐ",
      desc: (
        <div className={st.desc}>
          ピーポーピーポー
          <br />
          救急車はやっぱり大変だなぁ
          <br />
          そうなんです　とっても大変なんです
          <br />
          一刻を争って命をつないでいるんです
          <br />
          でも容態が悪くて救いきれない人がいることも事実なんです
          <br />
          そんなふうにお別れするなんて誰だってつらいじゃないですか！
          <br />
          考えよう
          <br />
          命の救える救急車ってどんなものだろう？
          <br />
          <br />
          Emergencyは主に救急車に取り付けたデバイスを通してControlを使う医療機関とリアルタイムでコミュニケーションを取ることができるアプリケーションとデバイスです。閉鎖された救急車内の情報や処置を開放しみんなが見ることができるようにして様々な医療者が一丸となってなくなりかけた命を救います。
        </div>
      ),
    },
    {
      title: "Press",
      st: st.press,
      subtitle: "知りたいが今、ここに",
      desc: (
        <div className={st.desc}>
          知りたいは止まらない
          <br />
          好奇心に感化された子どもたちは
          <br />
          満足を知らない
          <br />
          電車に興味を持てば電車の本を買って
          <br />
          たくさん読みます
          <br />
          魚に興味を持てば水族館に行ったり釣り竿を買って
          <br />
          たくさんの魚に触れます
          <br />
          医学に興味を持てば...持てば？
          <br />
          ゴリゴリの医学書を買って読み漁る？
          <br />
          そう。医学に興味があっても自分から学ぶことができない
          <br />
          きっかけは何であれ医学に興味を持ってくれたら
          <br />
          好奇心が強い人が医学の門を叩いてくれるかもしれない
          <br />
          そういう人たちを応援すべきだと思う
          <br />
          <br />
          Pressは医学を知らない人たちが医学を正しく知るためのニュースサイト・まとめサイトです。ここで病態の説明や薬の効果など基本的な情報を発信していきます。
        </div>
      ),
    },
    {
      title: "Press Pro",
      st: st.pressPro,
      subtitle: "フロンティアは知り尽くしたか",
      desc: (
        <div className={st.desc}>
          医学は多様な分野に細かく分かれています
          <br />
          医師たちは自分の分野について最新の知識を身につけることに一生懸命になっています
          <br />
          それは研究医も臨床医も変わりません
          <br />
          医学は多種多様な専門分野があるので
          <br />
          同じ診療科でも内容が大きく変わってしまいます
          <br />
          では自分の範囲の分野だけ博識であればよいのでしょうか？
          <br />
          医学は様々なところでつながっています
          <br />
          そういって分野に分けずいろんな知識を身につけると
          <br />
          新たな発見や技術の向上につながるのではないでしょうか
          <br />
          <br />
          Press
          Proでは主に医師など医療従事者をターゲットにした最新の論文紹介サイト・医学の高度な解説サイトです。日々発表される論文の大枠を日本語訳し他分野の論文でも読み進められるよう工夫します。専門家レベルで薬剤の作用機序、病態の解説を行うページも用意します。
        </div>
      ),
    },
    {
      title: "Philosophy",
      st: st.philosophy,
      subtitle: "成長につなげるアイデア",
      desc: (
        <div className={st.desc}>
          さてさて最後はPhilosophyです
          <br />
          ここではただ今説明したアプリケーションの設計思想を説明していきます
          <br />
          使いやすい、わかりやすいと言っても何を基準にしてそれが決まっているかわかりません
          <br />
          ここではどのように使いやすいのか、何がわかりやすいのか
          <br />
          ゆっくり説明していきます
          <br />
          こうしちゃいられない
          <br />
          さあ、いきますよ！
        </div>
      ),
    },
  ];

  const [topImg, setTopImg] = useState<StaticImageData>(buddyImg);

  const support = useSelector((state: RootState) => state.support);

  useEffect(() => {
    switch (support.nowPage) {
      case 0:
        setTopImg(buddyImg);
        break;

      case 1:
        setTopImg(controlImg);
        break;

      case 2:
        setTopImg(editImg);
        break;

      case 3:
        setTopImg(receptImg);
        break;

      case 4:
        setTopImg(serveImg);
        break;

      case 5:
        setTopImg(emergencyImg);
        break;

      case 6:
        setTopImg(pressImg);
        break;

      case 7:
        setTopImg(pressProImg);
        break;

      case 8:
        setTopImg(philoImg);
        break;

      default:
        break;
    }
  }, [support.nowPage]);

  return (
    <div className={st.detailTop}>
      <div className={st.detailBox} />
      <div
        className={`${st.fixedBox} ${
          detailTopBlur(support.scroll) ? st.fixedBoxBlur : ""
        }`}
      >
        <div className={st.relativeBox}>
          <Image src={topImg} alt="buddy img" objectFit="cover" layout="fill" />
        </div>
      </div>

      <div className={`${st.titleWrapper} ${showList[support.nowPage].st}`}>
        <div className={st.title}>{showList[support.nowPage].title}</div>

        <div className={st.catch}>{showList[support.nowPage].subtitle}</div>
      </div>

      <div className={st.descWrapper}>{showList[support.nowPage].desc}</div>
    </div>
  );
};

export default DetailTop;
