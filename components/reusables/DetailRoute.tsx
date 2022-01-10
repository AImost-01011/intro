import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import st from "./detailRoute.module.scss";
import Link from "next/link";

const DetailBackBtn: React.FC = () => {
  const support = useSelector((state: RootState) => state.support);

  const btnList = [
    {
      usage: "Buddy",
      route: "buddy",
      st: st.route_0,
    },
    {
      usage: "Control",
      route: "control",
      st: st.route_1,
    },
    {
      usage: "Edit",
      route: "edit",
      st: st.route_2,
    },
    {
      usage: "Recept",
      route: "recept",
      st: st.route_3,
    },
    {
      usage: "Serve",
      route: "serve",
      st: st.route_4,
    },
    {
      usage: "Emergency",
      route: "emergency",
      st: st.route_5,
    },
    {
      usage: "Press",
      route: "press",
      st: st.route_6,
    },
    {
      usage: "Press Pro",
      route: "pressPro",
      st: st.route_7,
    },
    {
      usage: "Philosophy",
      route: "philosophy",
      st: st.route_8,
    },
  ];

  return (
    <div className={st.detailRoute}>
      <div className={st.routesWrapper}>
        {btnList.map((el, i) => {
          if (support.nowPage === i) return <div key={500000000} />;
          else
            return (
              <Link href={`/${btnList[i].route}`} passHref={true} key={i}>
                <button className={st.routeWrapper} value={i}>
                  <div className={`${st.routeTag} ${el.st}`} />
                  <div className={st.routeTo}>{el.usage}</div>
                </button>
              </Link>
            );
        })}

        <Link href={`/${btnList[support.nowPage].route}`} passHref={true}>
          <button className={st.routeWrapper}>
            <div className={`${st.routeTag} ${st.toTop}`} />
            <div className={st.routeTo}>トップへ</div>
          </button>
        </Link>
      </div>

      <div className={st.topPageWrapper}>
        <Link href="/" passHref={true}>
          <button className={st.routeWrapper}>
            <div className={st.routeTag} />
            <div className={st.routeTo}>トップページへ</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailBackBtn;
