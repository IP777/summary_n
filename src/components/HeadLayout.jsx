import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@material-ui/core";
import { Print, CloudDownload, Edit } from "@material-ui/icons";
import FileSaver from "file-saver";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";
import DialogModal from "./DialogModal";

const StyledMainBlock = styled.div`
  .sub_wrapper {
    box-shadow: 0px 4px 6px -2px #0000000d;
    box-shadow: 0px 10px 15px -3px #0000001a;
    .title {
      font-size: 24px;
      /* font-family: "Montserrat", sans-serif; */
      font-weight: 600;
      text-transform: uppercase;
    }
    .button_wrapper {
      display: flex;
      align-items: center;
      .param_button {
        width: 40px;
        height: 40px;
        background-color: var(--color-light-gray);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        position: relative;
        .icon {
          width: 24px;
          height: 24px;
        }
        &:hover {
          border: 2px solid #fff;
        }
        &:hover::after {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: var(--color-orange);
          z-index: -1;
          border-radius: 8px;
        }
      }
      .styled_select {
        /* &:hover {
          box-shadow: 0 0px 4px 1px var(--color-orange);
        } */
        &:hover::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: var(--color-orange);
          z-index: -1;
          border-radius: 6px;
        }
      }
    }
  }
`;

export default function HeadLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [select, setSelect] = useState("ru");

  const handleChange = (e) => {
    const { value } = e.target;
    setSelect(value);
    i18n.changeLanguage(value);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownload = () => {
    FileSaver.saveAs(
      "https://raw.githubusercontent.com/IP777/summary/master/src/pdf/Ivanov_Piter_CV-en.pdf",
      "Ivanov_Piter_CV-en.pdf"
    );
  };

  return (
    <StyledMainBlock>
      <section className="sticky top-0 bg-white sub_wrapper">
        <div className="flex items-center justify-between h-20 pl-8 pr-8 m-auto text-xl max-w-l">
          <div className="title">{t("logo")}</div>
          <div className="button_wrapper">
            <button
              type="button"
              onClick={handlePrint}
              className="mr-3 text-2xl param_button"
            >
              <Print className="icon" />
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="param_button"
            >
              <CloudDownload className="icon" />
            </button>
            <Select
              className="styled_select"
              style={{
                background: "var(--color-light-gray)",
                border: 0,
                borderRadius: 3,
                height: 40,
                width: 120,
                marginRight: 17,
                marginLeft: 17,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 16,
              }}
              value={select}
              onChange={handleChange}
            >
              <MenuItem value="ru">Русский</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>

            <DialogModal />
          </div>
        </div>
      </section>
      <section className="main" ref={componentRef}>
        {children}
      </section>
    </StyledMainBlock>
  );
}
