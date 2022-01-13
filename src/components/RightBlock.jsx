import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledRightBlock = styled.div`
  padding: 40px;
  padding-top: 45px;
  font-size: 14px;
  .name_surname {
    font-size: 50px;
  }
  .first_titles {
    font-size: 24px;
    font-weight: 600;
  }
  .summary_titles {
  }
`;

export default function RightBlock() {
  const { t } = useTranslation();
  return (
    <StyledRightBlock>
      <h1 className="name_surname">{t("Name-surname")}</h1>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl first_titles">FrontEnd developer</h3>
        <p className="text">{t("motivation")}</p>
      </div>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl summary_titles">
          {t("project-title")}
        </h3>
        <ul>
          <li>{t("team-project-title")}</li>
          <li>{t("personal-project-title")}</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl summary_titles">
          {t("add-education-title")}
        </h3>
        <ul>
          <li>{t("Duration")}</li>
          <li>{t("Courses")}</li>
          {/* <li>{t("Courses", { courses: "GO-IT academy" })}</li> */}
          <li>{t("Role")}</li>
        </ul>
      </div>

      <div>
        <h3 className="pb-2 mb-2 text-xl summary_titles">
          {t("education-title")}
        </h3>
        <ul>
          <li>{t("Duration", { count: 6 })}</li>
          <li>{t("University")}</li>
          <li>{t("University-role")}</li>
        </ul>
      </div>
    </StyledRightBlock>
  );
}
