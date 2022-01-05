import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Print, CloudDownload } from "@material-ui/icons";
import FileSaver from "file-saver";
import { useReactToPrint } from "react-to-print";
import styled from "styled-components";

const StyledMainBlock = styled.div`
  .title {
    font-family: "Montserrat", sans-serif;
  }
`;

export default function HeadLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [check, setCheck] = useState({
    checked: true,
    lang: "ru",
    label: "Русский",
  });

  const handleChange = (e) => {
    setCheck({
      checked: !check.checked,
      lang: !check.checked ? "ru" : "en",
      label: !check.checked ? "Русский" : "English",
    });
    i18n.changeLanguage(!check.checked ? "ru" : "en");
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
      <section className="sticky top-0 h-16">
        <div
          style={{ backgroundColor: "rgb(161 161 170)" }}
          className="flex items-center justify-between h-full pl-8 pr-8 m-auto text-xl text-white shadow-lg max-w-l"
        >
          <div className="text-2xl title">{t("logo")}</div>
          <div>
            <button
              type="button"
              onClick={handlePrint}
              className="mr-3 text-2xl"
            >
              <Print className="hover:text-gray-300" />
            </button>
            <button type="button" onClick={handleDownload}>
              <CloudDownload className="text-2xl hover:text-gray-300" />
            </button>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Switch
                  color="default"
                  checked={check.checked}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label={check.label}
            />
          </div>
        </div>
      </section>
      <section className="main" ref={componentRef}>
        {children}
      </section>
    </StyledMainBlock>
  );
}
