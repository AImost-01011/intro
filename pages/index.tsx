import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const Goals = dynamic(() => import("../components/Goals"), { ssr: false });
const Proposal = dynamic(() => import("../components/Proposal"), {
  ssr: false,
});
const Solutions = dynamic(() => import("../components/Solutions"), {
  ssr: false,
});
const Top = dynamic(() => import("../components/Top"), { ssr: false });
const TopNav = dynamic(() => import("../components/TopNav"), { ssr: false });
import { watchScroll } from "../redux/supportSlice";
import isIe from "../util/isIe";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      isIe(router);

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
      <Head>
        <title>Lively Health, Lovely Life</title>
        <meta
          name="description"
          content="医療を便利にするためにデジタル化をしよう。テクノロジーが発展してきた結果データは記録するものから共有するものに変わっていきました。しかし今の医療システムではデジタルで記録することが主体となりデータを活用できていません。もっと柔軟に考えてどのようにするとうまくデータを活用できるか考えてみましょう。そんな考えを綴る紹介サイトです。"
        />
      </Head>

      <div>
        <TopNav />
        <Top />
        <Proposal />
        <Goals />
        <Solutions />
      </div>
    </>
  );
};

export default Home;
