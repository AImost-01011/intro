import React from "react";
import st from "../styles/msie.module.scss";
import Link from "next/link";
import Head from "next/head";

const Msie: React.FC = () => {
  return (
    <>
      <Head>
        <title>このサイトはInternet Explorerに対応していません</title>
      </Head>

      <div className={st.msie}>
        <div className={st.cautionBox}>
          <div className={st.caution}>!!!</div>

          <div className={st.title}>
            このサイトはInternet Explorerに対応していません
          </div>
          <div className={st.content}>
            閲覧するには以下のブラウザがおすすめです
          </div>

          <div className={st.btnWrapper}>
            <Link
              href="https://www.google.com/intl/ja_jp/chrome/"
              passHref={true}
            >
              <button>Google Chrome</button>
            </Link>

            <Link href="https://www.apple.com/jp/safari/" passHref={true}>
              <button>Safari</button>
            </Link>

            <Link
              href="https://www.mozilla.org/ja/firefox/new/"
              passHref={true}
            >
              <button>Mozilla Firefox</button>
            </Link>

            <Link href="https://www.microsoft.com/ja-jp/edge" passHref={true}>
              <button>Microsoft Edge</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Msie;
