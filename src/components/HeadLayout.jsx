import React from "react";
import { useTranslation } from "react-i18next";
import { FormControlLabel, Switch } from "@material-ui/core";

export default function HeadLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [checkt, setCheckt] = React.useState({
    checked: true,
    lang: "ru",
    lable: "Русский",
  });

  const handleChange = (e) => {
    setCheckt({
      checked: !checkt.checked,
      lang: !checkt.checked ? "ru" : "en",
      lable: !checkt.checked ? "Русский" : "English",
    });
    i18n.changeLanguage(!checkt.checked ? "ru" : "en");
  };

  return (
    <>
      <section>
        <div className="h-14">
          <div className="flex items-center justify-between text-white m-auto max-w-l h-full bg-gray-400 pl-8  pr-8 text-xl">
            <div>{t("logo")}</div>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Switch
                  color="default"
                  checked={checkt.checked}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label={checkt.lable}
            />
          </div>
        </div>
      </section>
      <section>{children}</section>
    </>
  );
}
