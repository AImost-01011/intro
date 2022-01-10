import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../redux/store";
import st from "./detailNav.module.scss";
import { isNav } from "../../util/detailNav/progressToolkit";

const DetailNav: React.FC = () => {
  const listName = [
    {
      usage: "Buddy",
      route: "buddy",
      st: st.buddy,
    },
    {
      usage: "Control",
      route: "control",
      st: st.control,
    },
    {
      usage: "Edit",
      route: "edit",
      st: st.edit,
    },
    {
      usage: "Recept",
      route: "recept",
      st: st.recept,
    },
    {
      usage: "Serve",
      route: "serve",
      st: st.serve,
    },
    {
      usage: "Emergency",
      route: "emergency",
      st: st.emergency,
    },
    {
      usage: "Press",
      route: "press",
      st: st.press,
    },
    {
      usage: "Press Pro",
      route: "pressPro",
      st: st.pressPro,
    },
    {
      usage: "Philosophy",
      route: "philosophy",
      st: st.philosophy,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const support = useSelector((state: RootState) => state.support);

  useEffect(() => {
    isNav(support.scroll) ? setIsActive(st.detailNavActive) : setIsActive("");
    if (support.scroll < 500) setIsOpen(false);

    // support.scroll > 500 ? setIsActive(st.detailNavActive) : setIsActive("");
  }, [support.scroll]);

  const openClick = () => setIsOpen((prevProp) => !prevProp);

  return (
    <div
      className={`${st.detailNav} ${isActive} ${
        isOpen ? st.detailNavOpen : ""
      }`}
    >
      <div className={st.navTop}>
        <Link href="/" passHref={true}>
          <div className={st.topTitle}>Lively Health, Lovely Life</div>
        </Link>

        <div className={st.sectionTitle}>{listName[support.nowPage].usage}</div>
        <button className={st.elseBtn} onClick={openClick}>{`>`}</button>
      </div>

      <div className={st.navList}>
        {listName.map((el, i) => {
          if (support.nowPage === i) return <div key={5000000} />;
          else
            return (
              <Link href={`/${listName[i].route}`} passHref={true} key={i}>
                <button className={st.itemWrapper} value={i}>
                  <div className={`${st.tag} ${el.st}`} />
                  <div className={st.btnTitle}>{el.usage}</div>
                </button>
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default DetailNav;
