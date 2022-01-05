import React from "react";
import { useTranslation } from "react-i18next";

export default function RightBlock() {
  const { t } = useTranslation();
  return (
    <div className="p-6 font-sans">
      <h1 className="mb-6 text-4xl font-medium text-gray-600">
        {t("Name-surname")}
      </h1>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl font-medium text-gray-500 border-b-2">
          Junior FrontEnd developer
        </h3>
        <p>{t("motivation")}</p>
      </div>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl font-medium text-gray-500 border-b-2">
          {t("project-title")}
        </h3>
        <ul>
          <li>{t("team-project-title")}</li>
          <li>{t("personal-project-title")}</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="pb-2 mb-2 text-xl font-medium text-gray-500 border-b-2">
          {t("add-education-title")}
        </h3>
        <ul>
          <li>{t("Duration", { count: 1.5 })}</li>
          <li>{t("Courses", { courses: "GO-IT academy" })}</li>
          <li>{t("Role", { role: "Full Stack Developer" })}</li>
        </ul>
      </div>

      <div>
        <h3 className="pb-2 mb-2 text-xl font-medium text-gray-500 border-b-2">
          {t("education-title")}
        </h3>
        <ul>
          <li>{t("Duration", { count: 6 })}</li>
          <li>{t("University")}</li>
          <li>{t("University-role")}</li>
        </ul>
      </div>
    </div>
  );
}
