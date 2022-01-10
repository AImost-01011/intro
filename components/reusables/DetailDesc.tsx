import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import st from "./detailDesc.module.scss";
import { RootState } from "../../redux/store";

const DetailDesc: React.FC<{
  title: string;
  shortDesc: string;
  desc: string;
}> = ({ title, shortDesc, desc }) => {
  const [selectStyle, setSelectStyle] = useState("");
  const [modalStyle, setModalStyle] = useState("");

  const support = useSelector((state: RootState) => state.support);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    switch (support.nowPage) {
      case 0:
        setSelectStyle(st.buddy);
        setModalStyle(st.buddyModal);
        break;

      case 1:
        setSelectStyle(st.control);
        setModalStyle(st.controlModal);
        break;

      case 2:
        setSelectStyle(st.edit);
        setModalStyle(st.editModal);
        break;

      case 3:
        setSelectStyle(st.recept);
        setModalStyle(st.receptModal);
        break;

      case 4:
        setSelectStyle(st.serve);
        setModalStyle(st.serveModal);
        break;

      case 5:
        setSelectStyle(st.emergency);
        setModalStyle(st.emergencyModal);
        break;

      case 6:
        setSelectStyle(st.press);
        setModalStyle(st.pressModal);
        break;

      case 7:
        setSelectStyle(st.pressPro);
        setModalStyle(st.pressProModal);
        break;

      default:
        break;
    }
  }, [support.nowPage]);

  const changeModal = () => {
    setIsOpen((prevProps) => !prevProps);
  };

  return (
    <>
      <div className={`${st.detailDesc} ${selectStyle}`} onClick={changeModal}>
        <div className={st.title}>{title}</div>
        <div className={st.shortDesc}>{shortDesc}</div>
      </div>

      <Modal
        isOpen={isOpen}
        overlayClassName={`${st.modalBg} ${isOpen ? "" : st.modalBgClose}`}
        className={`${st.modal} ${modalStyle}`}
        onRequestClose={changeModal}
        closeTimeoutMS={400}
      >
        <div className={st.contentWrapper}>
          <div className={st.title}>{title}</div>
          <div className={st.content}>{desc}</div>
        </div>

        <div className={st.returnWrapper}>
          <button className={st.returnBtn} onClick={changeModal}>
            もどる
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DetailDesc;
