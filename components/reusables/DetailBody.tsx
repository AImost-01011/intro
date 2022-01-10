import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import st from "./detailBody.module.scss";

const DetailBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectStyle, setSelectStyle] = useState("");

  const support = useSelector((state: RootState) => state.support);

  useEffect(() => {
    switch (support.nowPage) {
      case 0:
        setSelectStyle(st.buddy);
        break;

      case 1:
        setSelectStyle(st.control);
        break;

      case 2:
        setSelectStyle(st.edit);
        break;

      case 3:
        setSelectStyle(st.recept);
        break;

      case 4:
        setSelectStyle(st.serve);
        break;

      case 5:
        setSelectStyle(st.emergency);
        break;

      case 6:
        setSelectStyle(st.press);
        break;

      case 7:
        setSelectStyle(st.pressPro);
        break;

      default:
        break;
    }
  }, [support.nowPage]);

  return (
    <div className={st.detailBody}>
      <div className={`${st.titleWrapper} ${selectStyle}`}>
        <div className={st.title}>こんなことできます</div>
      </div>

      <div className={st.contentWrapper}>{children}</div>
    </div>
  );
};

export default DetailBody;
