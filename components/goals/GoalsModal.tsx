import React from "react";
import { useDispatch } from "react-redux";
import { switchMordal } from "../../redux/supportSlice";
import st from "./goalsModal.module.scss";

const GoalsModal: React.FC<{ messageIndex: number }> = ({ messageIndex }) => {
  const message = [
    {
      title: "医療者を医療者の仕事に専念させよう",
      content:
        "医療機関には2種類の業務があると思います。一つは診察や点滴など専門の資格がないとできない業務、もう一つは掃除や受付対応など資格がなくてもできる業務です。資格が必要な業務をこなせるは当たり前ですが医療機関内で貴重です。しかし今の医療機関では資格がなくてもできる業務を彼らが行っていることが多いです。医療システムがその業務を肩代わりし彼らにしかできない業務に専念することで運営効率を上げることができるでしょう。",
    },
    {
      title: "医療をもっと身近に感じられるようにしよう",
      content:
        "現代人はとても忙しいです。学業や仕事をこなさなければいけないので病院に行く時間も限られます。しかし病院の予約をしようにも仕事の終わり時にはもう病院が閉まっていたなんてことはザラにあるでしょう。予約無しで診療を受けようにもいつまで待合室で待たされるかなんて事前に知ることはできません。オンラインで予約・診療できればスキマ時間をピンポイントに狙って通院できるサポートができるでしょう。",
    },
    {
      title: "緊急時でもいつも通り診療できるようにしよう",
      content:
        "日本は以前から災害が多い国だと言われています。毎年のように洪水が起こり、地震が起こり、停電が起こり…そんな中で必ず出るのが負傷者です。きちんと診療できないと被災後の不安も相まって精神的によくないです。私たちはもうどのような災害が起こるのかライフラインがなかったらどうするのかノウハウはあるのでそういった知識を医療システムにも応用してなにが起こっても診療を続けられる病院をつくりましょう。",
    },
    {
      title: "みんなが医療に興味を持てるようにしよう",
      content:
        "特に若者は日常的な生活をしていたら医療と疎遠になりがちです。そのためなにか感染症が流行ったらデマに踊らされ、わけのわからない健康食品を買い、間違った感染予防をするのです。医療と縁がない人が少しでも医療的な考え方をできればそういった間違いに気づくことができるのです。また昆虫好き、車好きがいるように医療が好きな人がいてもおかしくありません。そういう人たちが意欲的に学べる場所もあったほうがよいでしょう。",
    },
  ];

  const dispatch = useDispatch();

  const returnClick = () => dispatch(switchMordal());

  return (
    <div className={st.goalsModal}>
      <div className={st.contentWrapper}>
        <div className={st.contentTitle}>{message[messageIndex].title}</div>
        <div className={st.content}>{message[messageIndex].content}</div>
      </div>
      <div className={st.returnWrapper}>
        <button className={st.returnBtn} onClick={returnClick}>
          もどる
        </button>
      </div>
    </div>
  );
};

export default GoalsModal;
