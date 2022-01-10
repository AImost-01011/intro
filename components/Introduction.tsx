import React from "react";
import st from "./introduction.module.scss";
import Image from "next/image";
import introImage from "../public/intro-image.jpg";

function Introduction() {
  return (
    <div className={st.introduction}>
      <span className={st.introTitle}>置いていかれた私たち</span>

      <div className={st.introContent}>
        <div className={st.introImage}>
          <Image src={introImage} alt="" layout="fill" objectFit="cover" />
        </div>

        <div className={st.introWards}>
          <div className={st.intro1}>
            2020年に入ると今までに経験したことのないほどのパンデミックがわれわれを襲った。
            <br />
            それは何万もの命を奪い今なおわたしたちを苦しめている。
          </div>

          <div className={st.intro2}>
            それに加えて世の中の仕組みが大きく変わった。
            <br />
            人同士が会わなくなってしまったのである。
            <br />
            デジタルを使うことが求められるようになったのだ。
            <br />
            しかし医療のデジタル化は複雑で今の今になってもうまくいかない。
            <br />
            このままでよいのか。
          </div>

          <div className={st.intro3}>
            そんなわけない。
            <br />
            変化が加速するこの時代についていくために私たちも変わろう。
            <br />
            私たちと一緒にデジタルへ挑戦しようじゃないか。
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
