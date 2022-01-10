import React, { useEffect } from "react";
import Header from "next/head";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { changePage, watchScroll } from "../../redux/supportSlice";
const DetailTop = dynamic(import("../../components/reusables/DetailTop"), {
  ssr: false,
});
const Theme = dynamic(import("../../components/philosophy/Theme"), {
  ssr: false,
});
const Usability = dynamic(import("../../components/philosophy/Usability"), {
  ssr: false,
});
const Tech = dynamic(import("../../components/philosophy/Tech"), {
  ssr: false,
});
import DetailRoute from "../../components/reusables/DetailRoute";
import isIe from "../../util/isIe";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(changePage(8));

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
        <title>Philosophy</title>
        <meta
          name="description"
          content="今回説明する診療システムの設計思想を紹介します。"
        />
      </Header>

      <div>
        <DetailTop />
        <Theme />
        <Usability />
        <Tech />
        <DetailRoute />
      </div>
    </>
  );
};

export default Index;
