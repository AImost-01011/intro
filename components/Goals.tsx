import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import st from "./goals.module.scss";
import Image from "next/image";
import roadImg from "../public/road.jpg";
import { switchMordal } from "../redux/supportSlice";
import GoalsModal from "./goals/GoalsModal";
import { RootState } from "../redux/store";

const Goals: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const support = useSelector((state: RootState) => state.support);
  const dispatch = useDispatch();

  const messageClick: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    dispatch(switchMordal());
    const index = e.currentTarget.id.split("-")[1];
    setMessageIndex(parseInt(index));
  };

  const returnClick = () => dispatch(switchMordal());

  return (
    <section className={st.goals}>
      <div className={st.titleOuter}>
        <div className={st.titleInner}>Goals - 目標</div>
      </div>

      <div className={st.contents}>
        <div className={st.imageWrapper}>
          <Image
            src={roadImg}
            alt="road image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={st.messageWrapper}>
          <div
            className={st.messageOuter}
            onClick={messageClick}
            id="message-0"
          >
            <div className={st.messageInner}>
              医療者を医療者の仕事に専念させよう
            </div>
          </div>
          <div
            className={st.messageOuter}
            onClick={messageClick}
            id="message-1"
          >
            <div className={st.messageInner}>
              医療をもっと身近に感じられるようにしよう
            </div>
          </div>
          <div
            className={st.messageOuter}
            onClick={messageClick}
            id="message-2"
          >
            <div className={st.messageInner}>
              緊急時でもいつも通り診療できるようにしよう
            </div>
          </div>
          <div
            className={st.messageOuter}
            onClick={messageClick}
            id="message-3"
          >
            <div className={st.messageInner}>
              みんなが医療に興味を持てるようにしよう
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={support.isMordal}
        onRequestClose={returnClick}
        closeTimeoutMS={400}
        overlayClassName={`${st.modalBg} ${
          support.isMordal ? "" : st.modalBgClose
        }`}
        className={st.modal}
      >
        <GoalsModal messageIndex={messageIndex} />
      </Modal>
    </section>
  );
};

export default Goals;
