import React from "react";
import st from "./solutions.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/supportSlice";

const Solutions: React.FC = () => {
  const dispatch = useDispatch();

  const routeClick: React.MouseEventHandler<HTMLButtonElement> | undefined = (
    e
  ) => {
    dispatch(changePage(Number(e.currentTarget.value)));
  };

  return (
    <div className={st.solutions}>
      <div className={st.title}>Blue Print - 計画</div>

      <div className={st.contentsWrapper}>
        <Link href="/buddy" passHref={true}>
          <button
            className={`${st.contentBox} ${st.buddy}`}
            value={0}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Buddy</span>
            <span className={st.content}>
              スタッフ同士の
              <br />
              コミュニケーション
            </span>
          </button>
        </Link>

        <Link href="/control" passHref={true}>
          <button
            className={`${st.contentBox} ${st.control}`}
            value={1}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Control</span>
            <span className={st.content}>
              医療機関の
              <br />
              維持と運営
            </span>
          </button>
        </Link>

        <Link href="/edit" passHref={true}>
          <button
            className={`${st.contentBox} ${st.edit}`}
            value={2}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Edit</span>
            <span className={st.content}>
              共有が得意な
              <br />
              電子カルテ
            </span>
          </button>
        </Link>

        <Link href="/recept" passHref={true}>
          <button
            className={`${st.contentBox} ${st.recept}`}
            value={3}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Recept</span>
            <span className={st.content}>
              待合室と予約の
              <br />
              管理
            </span>
          </button>
        </Link>

        <Link href="/serve" passHref={true}>
          <button
            className={`${st.contentBox} ${st.serve}`}
            value={4}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Serve</span>
            <span className={st.content}>
              通院予約と
              <br />
              おくすりの管理
            </span>
          </button>
        </Link>

        <Link href="/emergency" passHref={true}>
          <button
            className={`${st.contentBox} ${st.emergency}`}
            value={5}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Emergency</span>
            <span className={st.content}>
              救急車と
              <br />
              医療機関の連携
            </span>
          </button>
        </Link>

        <Link href="/press" passHref={true}>
          <button
            className={`${st.contentBox} ${st.press}`}
            value={6}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Press</span>
            <span className={st.content}>
              医療知識を普及する
              <br />
              メディア
            </span>
          </button>
        </Link>

        <Link href="/pressPro" passHref={true}>
          <button
            className={`${st.contentBox} ${st.pressPro}`}
            value={7}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Press Pro</span>
            <span className={st.content}>
              最新の知識を広める
              <br />
              メディア
            </span>
          </button>
        </Link>

        <Link href="/philosophy" passHref={true}>
          <button
            className={`${st.contentBox} ${st.philosophy}`}
            value={8}
            onClick={routeClick}
          >
            <span className={st.contentTitle}>Philosophy</span>
            <span className={st.content}>
              コンセプトと
              <br />
              思想
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
